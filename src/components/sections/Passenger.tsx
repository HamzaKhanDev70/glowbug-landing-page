import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

const Passenger = () => {
  return (
    <section className="relative w-full ">
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <Image
          src="/images/vector-1.png" 
          alt="Background"
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </div>
      {/* Main brown background container */}
      <div className="relative  pt-[30vh] md:pt-[50vh] pb-10 md:pb-20">
        {/* First overlay image */}
        <div className="absolute -top-[10vh] sm:-top-[15vh] md:-top-[35vh] left-1/2 transform -translate-x-1/2 w-full h-[40vh] sm:h-[50vh] md:h-[70%] z-10">
          <div className="relative w-full h-full">
            <Image
              src="/images/side-view-woman.png"
              alt="Top overlay"
              fill
              className="object-contain"
              style={{ objectPosition: "center" }}
              priority
            />
          </div>
        </div>

        {/* Second overlay image with centered content */}
        <div className=" absolute top-[-10vh] sm:top-[-17vh] md:-top-[14%] left-1/2 md:left-1/4 transform md:-translate-x-3/18 -translate-x-1/2 w-[70%] md:w-[90%]  max-w-16xl h-[40vh] sm:h-[50vh] md:h-[60vh] z-20">
          <div className="relative w-full h-full">
            <Image
              src="/images/rectangle-38.png"
              alt="Main feature"
              fill
              className="object-contain md:object-left"
              priority
            />

            {/* Content block centered on second image */}
            <div className="absolute top-1/2 left-1/4 md:left-2 lg:left-4 transform -translate-x-1/2 md:-translate-x-3/10 lg:-translate-x-3/8 -translate-y-1/2 text-center text-white w-full px-4">
              <h3 className="text-[#FFD300] heading-xs sm:heading-s md:heading-m font-bold mb-4 sm:mb-6">
                PASSENGERS
              </h3>
              <button className="body-normal w-auto bg-blue-500 px-2 py-2 sm:px-6 sm:py-2 rounded-full hover:bg-blue-600 transition-colors text-sm sm:text-base">
                EXPERIENCE
              </button>
            </div>
          </div>
        </div>

        {/* Content area below */}
        <div className="relative z-30 mx-auto px-4 sm:px-6 mt-[5vh] sm:mt-[30vh] md:mt-[15vh]">
          <div className="max-w-4xl mx-auto text-white">
            <div className="md:text-left flex flex-col justify-center text-center items-center md:justify-items-start  md:flex-row gap-2 md:gap-8 lg:gap-12">
              <div className="w-full md:w-1/2">
                <h3 className="text-[#FFD300] text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                  PASSENGERS
                </h3>
                <p className="text-base sm:text-lg mb-6 sm:mb-8">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                </p>
                <Button className="px-6 py-2 sm:px-8 sm:py-3 font-bold transition-colors text-sm sm:text-base">
                  CONTACT US
                </Button>
              </div>

              <div className="w-full md:w-1/2 relative h-48 sm:h-64 md:h-80 lg:h-96">
                <Image
                  src="/images/low-view-female.png"
                  alt="Content image"
                  fill
                  className="object-contain border rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Passenger;