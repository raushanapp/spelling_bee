interface GuessProps {
  guess: string;
  centerLetter: string;
  outerLetters: string[];
}

export function Guess({ guess, centerLetter, outerLetters }: GuessProps) {
  return (
    <section className="guess">
      <p className="guess-letters">
        {guess.split("").map((l, index) => (
          <b
            key={index}
            className={
              "guess-letter" +
              " " +
              (l === centerLetter
                ? "guess-center"
                : outerLetters.includes(l)
                  ? "guess-outer"
                  : "")
            }
          >
            {l}
          </b>
        ))}
      </p>
    </section>
  );
}
