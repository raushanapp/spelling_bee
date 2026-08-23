interface GuessProps {
  guess: string;
}

export function Guess({ guess }: GuessProps) {
  return (
    <section className="guess">
      <p className="guess-letter">{guess}</p>
    </section>
  );
}
