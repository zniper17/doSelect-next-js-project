import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* <script src="https://assets.doselect.com/embed/v3/doselect-embed.min.js"></script> */}
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
