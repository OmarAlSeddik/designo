import type { AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
