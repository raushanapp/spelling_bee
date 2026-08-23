interface ScoreProps {
  correctGuesses: string[];
}

export function Score({ correctGuesses }: ScoreProps) {
  let score = 0;
  correctGuesses.map((g) => {
    if (g.length === 4) {
      score++;
    } else {
      score = score + g.length;
    }
  });

  return <p className="score">Score : {score}</p>;
}
