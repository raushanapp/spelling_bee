import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Honeycomb } from "./components/Honeycomb";
import { Guess } from "./components/Guess";
import { CorrectGuesses } from "./components/CorrectGuesses";
import { Score } from "./components/Score";
import "./App.css";

export interface ApiResponse {
  data: {
    today: Puzzle;
    yesterday: Puzzle;
  };
}

export interface Puzzle {
  displayWeekday: string;
  displayDate: string;
  printDate: string;
  centerLetter: string;
  outerLetters: string[];
  validLetters: string[];
  pangrams: string[];
  answers: string[];
  id: number;
  freeExpiration: number;
  editor: string;
}

function App() {
  const [data, setData] = useState<Puzzle>();
  const [guess, setGuess] = useState<string>("");
  const [correctGuesses, setCorrectGusses] = useState<string[]>([]);

  const addLetter = (letter: string) => {
    setGuess((g) => g + letter);
  };

  const removeLetter = () => {
    setGuess(guess.slice(0, -1));
  };

  const addCorrectGuess = (guess: string) => {
    setCorrectGusses([...correctGuesses, guess]);
  };

  const checkGuses = () => {
    if (correctGuesses?.includes(guess ?? "")) {
      console.log("Already found!");
    } else if (data?.answers && data.answers.includes(guess)) {
      addCorrectGuess(guess);
      console.log("Good Job!");
    } else {
      console.log("!Not a god job");
    }
    setGuess("");
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetch("/api/data.json", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await result.json();
        setData(json.data.today);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {data ? (
        <>
          <Header date={data?.displayDate} editor={data?.editor} />
          <Score correctGuesses={correctGuesses}></Score>
          <CorrectGuesses correctGuesses={correctGuesses} />
          <section className="container">
            <div className="inputs">
              <div className="center">
                <Guess
                  guess={guess}
                  outerLetters={data.outerLetters}
                  centerLetter={data.centerLetter}
                ></Guess>
                <Honeycomb
                  centerLetter={data.centerLetter}
                  outerLetters={data.outerLetters}
                  validLetters={data.validLetters}
                  addLetter={addLetter}
                  removeLetter={removeLetter}
                  checkGuess={checkGuses}
                />
              </div>
            </div>
          </section>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;
