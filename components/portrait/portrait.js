/* eslint-disable @next/next/no-img-element */

import s from "./portrait.module.css";

export default function Portrait() {
  return (
    <div className={s.container}>
      <img alt="Portrait" className={s.image} src="/img/portrait.jpg" />
      <p className={s.description}>
        Credit and thanks for the photo to{" "}
        <a href="http://danieloverbeek.com/">Daniel Overbeek</a>
      </p>
    </div>
  );
}
