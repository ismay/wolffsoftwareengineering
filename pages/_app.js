/* eslint-disable react/prop-types, react/jsx-props-no-spreading */

import "../styles/globals.css";
import Page from "../components/page";

export default function CustomApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
