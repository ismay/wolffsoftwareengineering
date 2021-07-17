import Head from "next/head";
import Introduction from "../components/introduction";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wolff Software Engineering</title>
      </Head>
      <Introduction />
    </>
  );
}
