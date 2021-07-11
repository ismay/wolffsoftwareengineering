import ResponsiveImage from "../responsive-image";
import s from "./portrait.module.css";

export default function Portrait() {
  return (
    <div className={s.container}>
      <ResponsiveImage
        alt="Portrait"
        className={s.image}
        height={462}
        src="/img/portrait.jpg"
        width={460}
      />
      <p className={s.description}>
        Credit and thanks for the photo to{" "}
        <a href="http://danieloverbeek.com/">Daniel Overbeek</a>
      </p>
    </div>
  );
}
