import Link from "next/link";
import Logo from "../logo";
import s from "./header.module.css";

export default function Header() {
  return (
    <header>
      <h1 className={s.heading}>
        <Link href="/">
          <a title="Wolff Software Engineering">
            <Logo />
          </a>
        </Link>
      </h1>
    </header>
  );
}
