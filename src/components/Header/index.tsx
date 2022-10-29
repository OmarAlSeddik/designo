import Image from "next/image";

const Header = () => {
  return (
    <div className="sticky mx-auto flex w-container items-center justify-between py-9 md:py-16">
      <div className="relative h-[1.6875rem] w-[12.625rem] cursor-pointer">
        <Image src="/shared/desktop/logo-dark.png" alt="logo" layout="fill" />
      </div>
      <div className="relative h-5 w-6 md:hidden">
        <Image
          src="/shared/mobile/icon-hamburger.svg"
          alt="hamburger menu"
          layout="fill"
        />
      </div>
      <div className="hidden gap-[2.625rem] md:flex">
        <span className="cursor-pointer text-[0.875rem] uppercase leading-[0.875rem] tracking-[0.125rem] text-darkGrey hover:underline">
          our company
        </span>
        <span className="cursor-pointer text-[0.875rem] uppercase leading-[0.875rem] tracking-[0.125rem] text-darkGrey hover:underline">
          locations
        </span>
        <span className="cursor-pointer text-[0.875rem] uppercase leading-[0.875rem] tracking-[0.125rem] text-darkGrey hover:underline">
          contact
        </span>
      </div>
    </div>
  );
};

export default Header;
