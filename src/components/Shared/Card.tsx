import Image from "next/image";

const Card = (props: { name: string }) => {
  let imageUrl = "";
  if (props.name === "web design") {
    imageUrl = "/home/mobile/image-web-design.jpg";
  }
  if (props.name === "app design") {
    imageUrl = "/home/mobile/image-app-design.jpg";
  }
  if (props.name === "graphic design") {
    imageUrl = "/home/mobile/image-graphic-design.jpg";
  }

  return (
    <div
      className="mx-auto flex h-[15.625rem] w-container cursor-pointer flex-col items-center justify-center gap-3 rounded-[0.9375rem] bg-cover bg-blend-overlay md:gap-6"
      style={{
        backgroundImage: `url('${imageUrl}'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))`,
      }}
    >
      <h2 className="text-h2 font-medium uppercase tracking-[0.0875rem] text-white">
        {props.name}
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
  );
};

export default Card;
