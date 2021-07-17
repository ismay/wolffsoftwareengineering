/* eslint-disable react/prop-types, react/jsx-props-no-spreading */

import "../styles/globals.css";
import Head from "next/head";
import Page from "../components/page";

export default function App({ Component, pageProps }) {
  return (
    <Page>
      <Head>
        <link
          href="/favicon/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          href="/favicon/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <script
          async
          defer
          data-dnt="false"
          data-host="https://microanalytics.io"
          id="ZwSg9rf6GA"
          src="https://microanalytics.io/js/script.js"
        />
      </Head>
      <Component {...pageProps} />
    </Page>
  );
}
