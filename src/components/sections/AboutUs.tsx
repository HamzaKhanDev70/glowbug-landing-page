import React from "react";
import Image from "next/image";
import TeamSection from "./TeamSection";
import CompanyPartner from "./Company-Partner";
import Link from "next/link";
const AboutUs = () => {
  return (
    <section className="w-full px-2">
      <div className="flex justify-center ">
        <div className="relative w-[95vw] aspect-[21/9]">
          <Image
            src="/images/about-us.png"
            alt="About Us"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 90vw, 90vw"
          />

          <div className="absolute -top-[1%] left-[4%] w-[60vw] max-w-[1600px] aspect-[9/6] z-30">
            <Image
              src="/images/rectangle-38.png"
              alt="Overlay"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 80vw, 40vw"
            />
            {/* Text Overlay on second image */}
            <div className="absolute top-1/2 -left-1  md:left-4  -translate-y-1/2 z-40 text-white max-w-md px-4">
              <h3 className="text-[#FFD300] text-2xl font-bold sm:text-4xl md:text-6xl mb-0 sm:mb-6 tracking-wider">
                <span className="text-white">ABOUT</span>
                <span className="text-[#FFD300]"> US</span>
              </h3>
              <div className="flex flex-end md:flex-start">
                <p className="text-white mb-4 text-xs sm:text-base md:text-lg lg:text-2xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  maxime aperiam ducimus blanditiis.
                </p>
              </div>
              <button className="text-s md:text-2xl w-auto bg-blue-500 px-2 py-1 sm:px-6 sm:py-2 rounded-full hover:bg-blue-600 transition-colors text-sm sm:text-base hidden sm:block">
                <Link href="/experience" aria-label="Experience">
                  EXPERIENCE
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center  max-w-5xl mx-auto p-[3%]">
        <h1 className="text-[#FEE300] heading-s md:heading-m lg:heading-xl mb-6">
          OUR STORY
        </h1>
        <p className="body-normal sm:text-2xl text-gray-300 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
          Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text. Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard.
        </p>
      </div>
      <TeamSection />
      <CompanyPartner heading="OUR CARRIER PARTNERS " />
    </section>
  );
};

export default AboutUs;
