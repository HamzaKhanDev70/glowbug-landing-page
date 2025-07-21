import React from "react";
import Link from "next/link";
import Button from "../ui/Button";

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    image?: string;
    title?: string;
    type?: string;
    description?: string;
    details?:string;
    brief?:string
  } | null;
  link?: string;
  buttonLabel?: string;
  layoutColor?:"string"
  teamMember?:boolean
}
const InfoModal:React.FC<InfoModalProps> = ({ isOpen, onClose, data,teamMember,link = "/contact-us", buttonLabel = "Contact Us",layoutColor = "#4B1D00" }) => {
  if (!isOpen || !data) return null;

 {return teamMember ?  (
<div className=" fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50  overflow-auto p-4">
      <div className="relative w-[90%] max-w-5xl h-[88%]">
        {/* SVG Background */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full z-0"
        >
          <polygon
            points="0,9 100,2 100,98 0,90"
            fill="#040404B2"
            stroke={layoutColor}
            strokeWidth="0.8"
          />
        </svg>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-[1%] z-60 w-8 h-8 hover:bg-black/70 text-white hover:text-gray-500 flex items-center justify-center text-lg"
        >
          ✕
        </button>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center px-6 py-4 gap:4 sm:gap-14 z-10 ">
       
      {/* Left Image  rounded*/}
          <div className="relative w-44 h-40 sm:w-80 sm:h-80 lg:w-[280px] lg:h-[350px] flex-shrink-0  ">
            <div className="absolute inset-0 overflow-hidden ">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover rounded-xl "
              />
            </div>
          </div>
          {/* Right Text */}
          <div className="w-full sm:w-1.5/2 h-60 sm:h-80  lg:h-[350px] overflow-auto  text-center sm:text-left">
            <h2 className="text-xl md:text-2xl font-bold sm:mb-2 text-yellow-300 tracking-[.25rem] ">
              {data.title}
              <span className=" text-xl md:text-2xl font-light mb-4">
                {data.type}
              </span>
            </h2>
               <span className="block text-sm md:heading-s text-gray-300 whitespace-pre-line break-words">
            {data.brief}
          </span>
            <p className="text-sm xl:text-base text-gray-300 whitespace-pre-line break-words ">{data.description}</p>

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
  ):( <div className=" fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="relative w-[90%] max-w-5xl h-[88%]">
        {/* SVG Background */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full z-0"
        >
          <polygon
            points="0,9 100,2 100,98 0,90"
            fill="#040404B2"
            stroke={layoutColor}
            strokeWidth="0.8"
          />
        </svg>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-[1%] z-60 w-8 h-8 hover:bg-black/70 text-white hover:text-gray-500 flex items-center justify-center text-lg"
        >
          ✕
        </button>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center px-6 py-4 gap:4 sm:gap-14 z-10 ">
          {/* Left Image not rounded*/}
             {/* <div className="flex items-center justify-center h-[48%] sm:h-[400px] rounded-tl-2xl rounded-tr-2xl overflow-hidden   ">
            <img
              src={data.image}
              alt={data.title}
            //  height={"1032px"}
              width={"286px"}
              className="max-h-full max-w-full object-cover [clip-path:polygon(0_15%,100%_5%,100%_96%,0_96%)] "
            />
          </div> */}
      {/* Left Image  rounded*/}
          <div className="relative w-44 h-54 sm:w-80 sm:h-80 lg:w-[280px] lg:h-[350px] flex-shrink-0 ">
            <div className="absolute inset-0 overflow-hidden ">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover rounded-xl [clip-path:polygon(0_16%,100%_0%,100%_100%,0_100%)] "
              />
            </div>
          </div>
          {/* Right Text */}
          <div className="w-full sm:w-1.5/2 h-60 sm:h-80  lg:h-[430px] overflow-auto text-center sm:text-left ">
            <h2 className="text-xl md:text-2xl font-bold sm:mb-2 text-yellow-300 tracking-[.25rem]">
              {data.title}
              <span className=" text-xl md:text-2xl font-light mb-4">
                {data.type}
              </span>
            </h2>
               <span className="block text-sm md:heading-s text-gray-300 whitespace-pre-line break-words">
            {data.brief}
          </span>
            <p className="text-sm md:text-base text-gray-300 whitespace-pre-line break-words ">{data.description}</p>

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
    </div>)}
};

export default InfoModal;
