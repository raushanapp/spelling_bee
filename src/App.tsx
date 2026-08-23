import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Honeycomb } from "./components/Honeycomb";
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
          <section className="container">
            <div className="inputs">
              <div className="center">
                <Honeycomb
                  centerLetter={data.centerLetter}
                  outerLetters={data.outerLetters}
                  validLetters={data.validLetters}
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
