import Head from "next/head";
import AppDesign from "../components/AppDesign";

const AppDesignPage = () => {
  return (
    <>
      <Head>
        <title>Designo - App Design</title>
        <meta name="description" content="The about page of Designo." />
      </Head>
      <AppDesign />
    </>
  );
};

export default AppDesignPage;
