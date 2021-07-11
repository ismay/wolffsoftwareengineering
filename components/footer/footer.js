import s from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={s.container}>
      <a className={s.link} href="mailto:ismay@wolffsoftwareengineering.nl">
        Email
      </a>
      <a className={s.link} href="https://github.com/ismay">
        Github
      </a>
      <a className={s.link} href="https://gitlab.com/ismay">
        Gitlab
      </a>
      <a
        className={s.link}
        href="https://www.linkedin.com/in/wolffsoftwareengineering"
      >
        Linkedin
      </a>
      <span>
        Terms and conditions (<a href="/pdf/terms-and-conditions.pdf">EN</a>/
        <a href="/pdf/algemene-voorwaarden.pdf">NL</a>)
      </span>
    </footer>
  );
}
