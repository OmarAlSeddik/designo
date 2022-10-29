import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="relative mt-[19.5rem] bg-black pt-[15.75rem] pb-16">
        <div className="absolute top-0 left-[50%] mx-auto flex w-container translate-x-[-50%] translate-y-[-50%] flex-col items-center rounded-[0.9375rem] bg-peach bg-[url('/shared/desktop/bg-pattern-call-to-action.svg')] py-16 px-4">
          <h2 className="mb-1.5 text-center text-h1 text-white">
            Let’s talk about your project
          </h2>
          <p className="mb-8 text-center text-body text-white">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
          <button className="h-14 w-[9.5rem] cursor-pointer rounded-[0.5rem] bg-white text-[0.9375rem] font-medium uppercase leading-[1.375rem] tracking-[0.0625rem] text-darkGrey">
            Get in touch
          </button>
        </div>
        <div className="mx-auto flex w-container flex-col items-center">
          <div className="relative mx-auto mb-8 h-[1.6875rem] w-[12.625rem]">
            <Image
              src="/shared/desktop/logo-light.png"
              alt="logo"
              layout="fill"
            />
          </div>
          <hr className="mb-8 w-full opacity-10" />
          <div className="mb-10 flex flex-col items-center gap-8">
            <span className="cursor-pointer text-[0.875rem] uppercase leading-[0.875rem] tracking-[0.125rem] text-white">
              OUR COMPANY
            </span>
            <span className="cursor-pointer text-[0.875rem] uppercase leading-[0.875rem] tracking-[0.125rem] text-white">
              LOCATIONS
            </span>
            <span className="cursor-pointer text-[0.875rem] uppercase leading-[0.875rem] tracking-[0.125rem] text-white">
              CONTACT
            </span>
          </div>
        </div>

        <div className="mb-10 flex flex-col items-center">
          <span className="font-bold leading-[1.625rem] text-white opacity-50">
            Designo Central Office
          </span>
          <span className="leading-[1.625rem] text-white opacity-50">
            3886 Wellington Street
          </span>
          <span className="leading-[1.625rem] text-white opacity-50">
            Toronto, Ontario M9C 3J5
          </span>
        </div>

        <div className="mb-10 flex flex-col items-center">
          <span className="font-bold leading-[1.625rem] text-white opacity-50">
            Contact Us (Central Office)
          </span>
          <span className="leading-[1.625rem] text-white opacity-50">
            P : +1 253-863-8967
          </span>
          <span className="leading-[1.625rem] text-white opacity-50">
            M : contact@designo.co
          </span>
        </div>

        <div className="flex justify-center gap-4">
          <div className="relative h-6 w-6 cursor-pointer">
            <Image
              src="/shared/desktop/icon-facebook.svg"
              alt="facebook"
              layout="fill"
            />
          </div>
          <div className="relative h-6 w-6 cursor-pointer">
            <Image
              src="/shared/desktop/icon-youtube.svg"
              alt="youtube"
              layout="fill"
            />
          </div>
          <div className="relative h-6 w-6 cursor-pointer">
            <Image
              src="/shared/desktop/icon-twitter.svg"
              alt="twitter"
              layout="fill"
            />
          </div>
          <div className="relative h-6 w-6 cursor-pointer">
            <Image
              src="/shared/desktop/icon-pinterest.svg"
              alt="pinterest"
              layout="fill"
            />
          </div>
          <div className="relative h-6 w-6 cursor-pointer">
            <Image
              src="/shared/desktop/icon-instagram.svg"
              alt="instagram"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
