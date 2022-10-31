import Card from "../Shared/Card";
import HomeHero from "./HomeHero";
import WhyUs from "./WhyUs";

const Home = () => {
  return (
    <>
      <HomeHero />
      <section className="mb-[7.5rem] flex flex-col gap-6">
        <Card name="web design" />
        <Card name="app design" />
        <Card name="graphic design" />
      </section>
      <section className="mx-auto flex w-container flex-col items-center gap-20">
        <WhyUs name="passionate" />
        <WhyUs name="resourceful" />
        <WhyUs name="friendly" />
      </section>
    </>
  );
};

export default Home;
