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
          <button className="h-14 w-[9.5rem] cursor-pointer rounded-[0.5rem] bg-white text-[0.9375rem] font-medium uppercase leading-[1.375rem] tracking-[0.0625rem] text-darkGrey">
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

      <section className="mx-auto mb-[7.5rem] flex w-container flex-col items-center gap-20">
        <div className="flex flex-col items-center">
          <div className="relative h-[12.625rem] w-[12.625rem]">
            <Image
              src="/home/desktop/bg-pattern-hero-home.svg"
              alt=""
              layout="fill"
            />
            <Image
              src="/home/desktop/illustration-passionate.svg"
              alt=""
              layout="fill"
            />
          </div>
          <h3 className="mb-8 text-h3 font-medium uppercase tracking-[0.3125rem] text-darkGrey">
            PASSIONATE
          </h3>
          <p className="text-center text-body text-darkGrey">
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative h-[12.625rem] w-[12.625rem]">
            <Image
              src="/home/desktop/bg-pattern-hero-home.svg"
              alt=""
              layout="fill"
            />
            <Image
              src="/home/desktop/illustration-resourceful.svg"
              alt=""
              layout="fill"
            />
          </div>
          <h3 className="mb-8 text-h3 font-medium uppercase tracking-[0.3125rem] text-darkGrey">
            RESOURCEFUL
          </h3>
          <p className="text-center text-body text-darkGrey">
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative h-[12.625rem] w-[12.625rem]">
            <Image
              src="/home/desktop/bg-pattern-hero-home.svg"
              alt=""
              layout="fill"
            />
            <Image
              src="/home/desktop/illustration-friendly.svg"
              alt=""
              layout="fill"
            />
          </div>
          <h3 className="mb-8 text-h3 font-medium uppercase tracking-[0.3125rem] text-darkGrey">
            FRIENDLY
          </h3>
          <p className="text-center text-body text-darkGrey">
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
