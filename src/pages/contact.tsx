import Head from "next/head";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Designo - Contact</title>
        <meta name="description" content="The about page of Designo." />
      </Head>
      <Contact />
    </>
  );
};

export default ContactPage;
