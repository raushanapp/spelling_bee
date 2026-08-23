import { useState } from "react";
import { Letter } from "./Letter";

interface HomeycombProps {
  centerLetter: string;
  outerLetters: string[];
  validLetters: string[];
}

export function Honeycomb({
  centerLetter,
  outerLetters,
  validLetters,
}: HomeycombProps) {
  const [randomArray, setRandomArray] = useState([0, 1, 2, 3, 4, 5]);
  const shuffle = () => {
    setRandomArray([...randomArray].sort(() => Math.random() - 0.5));
  };
  return (
    <>
      <article className="honeycomb">
        <Letter letter={centerLetter} isCenter={true} addLetter={() => {}} />
        <Letter
          letter={outerLetters[randomArray[0]]}
          isCenter={false}
          addLetter={() => {}}
        />
        <Letter
          letter={outerLetters[randomArray[1]]}
          isCenter={false}
          addLetter={() => {}}
        />
        <Letter
          letter={outerLetters[randomArray[2]]}
          isCenter={false}
          addLetter={() => {}}
        />
        <Letter
          letter={outerLetters[randomArray[3]]}
          isCenter={false}
          addLetter={() => {}}
        />
        <Letter
          letter={outerLetters[randomArray[4]]}
          isCenter={false}
          addLetter={() => {}}
        />
        <Letter
          letter={outerLetters[randomArray[5]]}
          isCenter={false}
          addLetter={() => {}}
        />
      </article>
      <section className="buttons">
        <button className="button" onClick={shuffle}>
          Shuffle
        </button>
      </section>
    </>
  );
}
