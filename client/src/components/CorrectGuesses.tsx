import { useState } from "react";

interface CorrectGuessesProps {
  correctGuesses: string[];
}

export function CorrectGuesses({ correctGuesses }: CorrectGuessesProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openGuesses = () => {
    setIsOpen(true);
  };
  const closeGuesses = () => {
    setIsOpen(false);
  };
  return (
    <section className="correctGuesses">
      {isOpen ? (
        <ul>
          {correctGuesses.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      ) : (
        <p>{correctGuesses.length} word found.</p>
      )}
      {isOpen ? (
        <a className="openclose" href="#" onClick={closeGuesses}>
          Close
        </a>
      ) : correctGuesses.length > 0 ? (
        <a className="openclose" href="#" onClick={openGuesses}>
          Open
        </a>
      ) : null}
    </section>
  );
}
