import Link from "next/link";
import Logo from "../logo";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <a title="Wolff Software Engineering">
          <Logo />
        </a>
      </Link>
    </header>
  );
}
