import type { NextPage } from "next";
import Head from "next/head";
import Home from "../components/Home";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Designo</title>
        <meta name="description" content="The main page of Designo." />
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
