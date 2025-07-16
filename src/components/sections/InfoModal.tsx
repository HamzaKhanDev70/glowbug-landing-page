import React from "react";
import Link from "next/link";
import Button from "../ui/Button";

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    image: string;
    title: string;
    type?: string;
    description: string;
  } | null;
  link?: string;
  buttonLabel?: string;
}
const InfoModal:React.FC<InfoModalProps> = ({ isOpen, onClose, data, link = "/contact-us", buttonLabel = "Contact Us" }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="relative w-[90%] max-w-5xl h-[75%]">
        {/* SVG Background */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full z-0"
        >
          <polygon
            points="0,9 100,2 100,98 0,90"
            fill="#040404B2"
            stroke="#4B1D00"
            strokeWidth="0.8"
          />
        </svg>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-[1%] z-30 w-8 h-8 hover:bg-black/70 text-white hover:text-gray-500 flex items-center justify-center text-lg"
        >
          ✕
        </button>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center px-6 py-4 gap:4 sm:gap-14 z-10">
          {/* Left Image */}
          <div className="w-full sm:w-1/4 h-[30%] sm:h-[60%] flex items-center justify-center overflow-hidden border-2 border-red-800" style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"}}>
            <img
              src={data.image}
              alt={data.title}
              // height={"1892rem"}
              // width={"1782px"}
              className="max-h-full max-w-full object-cover "
            />
          </div>

          {/* Right Text */}
          <div className="w-full sm:w-1/2 text-center sm:text-left">
            <h2 className="text-xl md:text-2xl font-bold sm:mb-2 text-yellow-300 tracking-[.25rem]">
              {data.title}
              <span className=" text-xl md:text-2xl font-light mb-4">
                {data.type}
              </span>
            </h2>
            <p className="text-sm md:text-base">{data.description}</p>

            {link && (
              <div className="pt-4 hidden sm:block">
                <Link href={link} aria-label={buttonLabel}>
                  <Button variant="primary" className="md:text-xs lg:text-sm">
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
