import Head from "next/head";
import About from "../components/About";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Designo - About</title>
        <meta name="description" content="The about page of Designo." />
      </Head>
      <About />
    </>
  );
};

export default AboutPage;
