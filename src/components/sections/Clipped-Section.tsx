"use client";
import Link from "next/link";

type ClippedSectionProps = {
  backgroundImage?: string;
  headingWhite?: string;
  headingYellow?: string;
  paragraph?: string;
  buttonLabel?: string;
  buttonLink?: string;
};

const ClippedSection: React.FC<ClippedSectionProps> = ({
  backgroundImage = "/images/about-us.png",
  headingWhite = "About",
  headingYellow = "US",
  paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maxime aperiam ducimus blanditiis.",
  buttonLabel ,
  buttonLink="/"
}) => {
  return (
    <div
      className="relative p-10 sm:pr-[40%]"
      style={{
        width: "100%",
        // width: "95%",
        // left: "2.5%",
        zIndex: 40,
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative px-9 py-40 text-white overflow-hidden rounded-[10px] custom-clip bg-gradient">
        <div className="max-w-4xl mx-auto text-left space-y-16 ">
          <h3 className="text-[#FFD300] heading-s font-bold sm:heading-l mb-0 sm:mb-6 tracking-wider uppercase" style={{ fontFamily: '"Right Grotesk WideMedium", sans-serif' }}>
            <span className="text-white">{headingWhite}</span>{" "}
            <span className="text-[#FFD300]">{headingYellow}</span>
          </h3>
          <p className="text-white mb-4 body-normal">{paragraph}</p>
         {buttonLabel?( <button className="body-normal md:text-2xl w-auto bg-blue-500 px-2 py-1 sm:px-6 sm:py-2 rounded-full hover:bg-blue-600 transition-colors text-sm sm:text-base ">
            <Link href={buttonLink} aria-label={buttonLabel}>
              {buttonLabel}
            </Link>
          </button>):""}
        </div>
      </div>
    </div>
  );
};

export default ClippedSection;
