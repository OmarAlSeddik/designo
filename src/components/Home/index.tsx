const Home = () => {
  return (
    <>
      <section className="h-[52.6875rem] overflow-hidden bg-peach bg-[url('/home/desktop/bg-pattern-hero-home.svg')]">
        <div className="mx-auto flex w-container flex-col items-center pt-20">
          <h1 className="mb-3.5 text-center text-h1 font-medium text-white">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="mb-6 text-center text-body text-white">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <button className="h-14 w-[9.5rem] rounded-[0.5rem] bg-white text-[0.9375rem] font-medium uppercase leading-[1.375rem] tracking-[0.0625rem] text-darkGrey">
            Learn More
          </button>
        </div>
        <div
          className="relative mt-[-6.6rem] h-[40rem] w-[100%] bg-top bg-no-repeat"
          style={{
            backgroundImage: "url('/home/desktop/image-hero-phone.png')",
          }}
        ></div>
      </section>
    </>
  );
};

export default Home;
