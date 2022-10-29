import Image from "next/image";

const Home = () => {
  return (
    <>
      <section className="mb-[7.5rem] h-[52.6875rem] overflow-hidden bg-peach bg-[url('/home/desktop/bg-pattern-hero-home.svg')] bg-left bg-no-repeat">
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

      <section className="mb-[7.5rem] flex flex-col gap-6">
        <div
          className="mx-auto flex h-[15.625rem] w-container cursor-pointer flex-col items-center justify-center gap-3 rounded-[0.9375rem] bg-cover bg-blend-overlay md:gap-6"
          style={{
            backgroundImage:
              "url('/home/mobile/image-web-design.jpg'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))",
          }}
        >
          <h2 className="text-h2 font-medium uppercase tracking-[0.0875rem] text-white">
            WEB DESIGN
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-[0.9375rem] font-medium uppercase tracking-[0.3125rem] text-white">
              VIEW PROJECTS
            </span>
            <div className="relative h-3 w-1.5">
              <Image
                src="/shared/desktop/icon-right-arrow.svg"
                alt=""
                layout="fill"
              />
            </div>
          </div>
        </div>
        <div
          className="mx-auto flex h-[15.625rem] w-container cursor-pointer flex-col items-center justify-center gap-3 rounded-[0.9375rem] bg-cover bg-blend-overlay md:gap-6"
          style={{
            backgroundImage:
              "url('/home/mobile/image-app-design.jpg'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))",
          }}
        >
          <h2 className="text-h2 font-medium uppercase tracking-[0.0875rem] text-white">
            APP DESIGN
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-[0.9375rem] font-medium uppercase tracking-[0.3125rem] text-white">
              VIEW PROJECTS
            </span>
            <div className="relative h-3 w-1.5">
              <Image
                src="/shared/desktop/icon-right-arrow.svg"
                alt=""
                layout="fill"
              />
            </div>
          </div>
        </div>
        <div
          className="mx-auto flex h-[15.625rem] w-container cursor-pointer flex-col items-center justify-center gap-3 rounded-[0.9375rem] bg-cover bg-blend-overlay md:gap-6"
          style={{
            backgroundImage:
              "url('/home/mobile/image-graphic-design.jpg'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))",
          }}
        >
          <h2 className="text-h2 font-medium uppercase tracking-[0.0875rem] text-white">
            GRAPHIC DESIGN
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-[0.9375rem] font-medium uppercase tracking-[0.3125rem] text-white">
              VIEW PROJECTS
            </span>
            <div className="relative h-3 w-1.5">
              <Image
                src="/shared/desktop/icon-right-arrow.svg"
                alt=""
                layout="fill"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
