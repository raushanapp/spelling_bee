import { useState } from "react";
import { Letter } from "./Letter";

interface HomeycombProps {
  centerLetter: string;
  outerLetters: string[];
  validLetters: string[];
  addLetter: (letter: string) => void;
  removeLetter: () => void;
  checkGuess: () => void;
}

export function Honeycomb({
  centerLetter,
  outerLetters,
  validLetters,
  addLetter,
  removeLetter,
  checkGuess,
}: HomeycombProps) {
  const [randomArray, setRandomArray] = useState([0, 1, 2, 3, 4, 5]);
  const shuffle = () => {
    setRandomArray([...randomArray].sort(() => Math.random() - 0.5));
  };
  return (
    <>
      <article className="honeycomb">
        <Letter letter={centerLetter} isCenter={true} addLetter={addLetter} />
        <Letter
          letter={outerLetters[randomArray[0]]}
          isCenter={false}
          addLetter={addLetter}
        />
        <Letter
          letter={outerLetters[randomArray[1]]}
          isCenter={false}
          addLetter={addLetter}
        />
        <Letter
          letter={outerLetters[randomArray[2]]}
          isCenter={false}
          addLetter={addLetter}
        />
        <Letter
          letter={outerLetters[randomArray[3]]}
          isCenter={false}
          addLetter={addLetter}
        />
        <Letter
          letter={outerLetters[randomArray[4]]}
          isCenter={false}
          addLetter={addLetter}
        />
        <Letter
          letter={outerLetters[randomArray[5]]}
          isCenter={false}
          addLetter={addLetter}
        />
      </article>
      <section className="buttons">
        <button className="button" onClick={removeLetter}>
          Delete
        </button>
        <button className="button" onClick={shuffle}>
          Shuffle
        </button>
        <button className="button" onClick={checkGuess}>
          Enter
        </button>
      </section>
    </>
  );
}
