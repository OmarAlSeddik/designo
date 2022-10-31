import Image from "next/image";

const WhyUs = (props: { name: string }) => {
  let imageUrl = "";
  let text = "";
  let rotation = "";
  if (props.name === "passionate") {
    rotation = "rotate-[270deg]";
    imageUrl = "/home/desktop/illustration-passionate.svg";
    text =
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.";
  }
  if (props.name === "resourceful") {
    rotation = "rotate-180";
    imageUrl = "/home/desktop/illustration-resourceful.svg";
    text =
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.";
  }
  if (props.name === "friendly") {
    rotation = "rotate-0";
    imageUrl = "/home/desktop/illustration-friendly.svg";
    text =
      "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.";
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-[12.625rem] w-[12.625rem]">
        <Image
          src="/home/desktop/bg-pattern-hero-home.svg"
          alt=""
          layout="fill"
          className={rotation}
        />
        <Image src={imageUrl} alt="" layout="fill" />
      </div>
      <h3 className="mb-8 text-h3 font-medium uppercase tracking-[0.3125rem] text-darkGrey">
        {props.name}
      </h3>
      <p className="text-center text-body text-darkGrey">{text}</p>
    </div>
  );
};

export default WhyUs;
