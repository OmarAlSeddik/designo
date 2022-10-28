import Head from "next/head";
import WebDesign from "../components/WebDesign";

const WebDesignPage = () => {
  return (
    <>
      <Head>
        <title>Designo - Web Design</title>
        <meta name="description" content="The about page of Designo." />
      </Head>
      <WebDesign />
    </>
  );
};

export default WebDesignPage;
