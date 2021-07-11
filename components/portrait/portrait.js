import Image from "next/image";
import profileImage from "../../public/img/portrait.jpg";
import s from "./portrait.module.css";

export default function Portrait() {
  return (
    <div className={s.container}>
      <Image alt="Portrait" placeholder="blur" src={profileImage} />
      <p className={s.description}>
        Credit and thanks for the photo to{" "}
        <a href="http://danieloverbeek.com/">Daniel Overbeek</a>
      </p>
    </div>
  );
}
