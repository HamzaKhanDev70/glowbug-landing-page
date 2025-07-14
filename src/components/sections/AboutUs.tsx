import React from "react";
import Image from "next/image";
import TeamSection from "./TeamSection";
import CompanyPartner from "./Company-Partner";
const AboutUs = () => {
  return (
    <section className="relative w-full bg-black overflow-visible " id="about-us">
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-[100%] h-[60vh] sm:h-[70vh] md:h-[80vh] z-10 pointer-events-none">
        <Image
          src="/images/about-us.png"
          alt="Woman overlay"
          fill
          className="object-contain"
          style={{ objectPosition: "top center" }}
          priority
        />
      </div>

      {/* 🔹 Main Section with Rectangle + Content */}
      <div className="relative z-20 pt-[30vh] md:pt-[50vh] pb-10 md:pb-20">
        <div className="absolute -top-8 md:-top-10 lg:top-0 left-1/2  md:left-1/2 lg:left-1/2 transform -translate-x-1/2 -translate-y-1/3 mx-auto w-[70%] md:w-1/2 h-[40vh] sm:h-[50vh] md:h-[60vh] z-20 ">
          {/* Rectangle 38 Image */}
          <Image
            src="/images/rectangle-38.png"
            alt="Main feature"
            fill
            className="object-contain md:object-left"
            priority
          />

          {/* Content on Top of Rectangle */}
          <div className="absolute top-1/2 left-4 sm:left-12 md:left-20 transform -translate-y-1/2 z-30 text-white max-w-md px-4">
            <h3 className="text-[#FFD300] heading-s md:heading-l font-normal mb-4 sm:mb-6 tracking-wider">
              <span className="text-white capitalize">ABOUT</span>
              <br className="md:hidden" />
              <span className="text-[#FFD300]"> US</span>
            </h3>
            <p className="body-normal text-white mb-4 hidden md:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              maxime aperiam ducimus blanditiis, natus modi sint totam mollitia
              quos nam deleniti velit reprehenderit.
            </p>
            {/* <button className="body-normal w-auto bg-blue-500 px-4 py-2 sm:px-6 sm:py-2 rounded-full hover:bg-blue-600 transition-colors text-sm sm:text-base">
          EXPERIENCE
        </button> */}
          </div>
        </div>
      </div>

      <div className="text-center px-4 md:p-8 lg:px-20 max-w-5xl mx-auto">
        <h1 className="text-[#FEE300] heading-s md:heading-m lg:heading-l mb-6">
          OUR STORY
        </h1>
        <p className="body-normal text-gray-300 leading-relaxed">
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
