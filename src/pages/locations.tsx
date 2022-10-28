import Head from "next/head";
import Locations from "../components/Locations";

const LocationsPage = () => {
  return (
    <>
      <Head>
        <title>Designo - Locations</title>
        <meta name="description" content="The about page of Designo." />
      </Head>
      <Locations />
    </>
  );
};

export default LocationsPage;
