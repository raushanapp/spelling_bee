interface HeaderProps {
  date: string;
  editor: string;
}

export function Header({ date, editor }: HeaderProps) {
  return (
    <header>
      <h1 className={"title"}>Spelling Bee</h1>
      <p className={"date"}>{date}</p>
      <p className={"editor"}>NYT game edited by {editor}</p>
    </header>
  );
}
