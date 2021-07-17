import T from "prop-types";
import Footer from "../footer";
import Header from "../header";
import s from "./page.module.css";

export default function Page({ children }) {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <Header />
      </div>
      <main className={s.content}>{children}</main>
      <div className={s.footer}>
        <Footer />
      </div>
    </div>
  );
}

Page.propTypes = {
  children: T.node.isRequired,
};
