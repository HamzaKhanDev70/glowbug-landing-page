import React from "react";
import Image from "next/image";
import Experience from "./Experience";
import Link from "next/link";
import ClippedSection from "./Clipped-Section";
const servicesData = [
  {
    title: "Entertainment Superhighway",
    description:
      "Indulge into the largest entertainment portfolio offering personalized experience, catering to your tastes and desires. With genre categories and ratings from IMDb and Rotten Tomatoes, hold the best of entertainment in the palm of your hand. No internet restrictions, just endless entertainment. Start your journey right after you check-in!",
    image: "/images/come-true.png",
  },
  {
    title: "Seamless Integration with Your Travel Journey - DreamPay",
    description:
      "Enrich your travel experience with DreamPay. Smoothly incorporating across every touchpoint, we simplify your journey from booking to in-flight lounges amenities onboard purchases. Experience convenience and efficiency like never before. Bring the future of travel today!",
    image: "/images/seamless.png",
  },
  {
    title:
      "DreamComeTrue Loyalty Program A Never-Ending Journey of Perks and Privileges",
    description:
      "Indulge into the largest entertainment portfolio offering personalized experience, catering to your tastes and desires. With genre categories and ratings from IMDb and Rotten Tomatoes, hold the best of entertainment in the palm of your hand. No internet restrictions, just endless entertainment. Start your journey right after you check-in!",
    image: "/images/super-highway.png",
  },
  {
    title: "DreamCrew - Redefining Onboard Communication",
    description:
      "Purge the communication barriers onboard with DreamCrew. Effortlessly interact with the crew through text-based communication for personalized and functional service. Experience a smoother journey with our innovative approach. Welcome to the future of onboard communication!",
    image: "/images/crew.png",
  },
  {
    title: "BYOD Compatible Platform",
    description:
      "Whether on a flight, a bus, or a train, our BYOD platform ensures that you get the same entertainment experience anywhere. Amplify your travel experience with DreamStream and unlock a world of infinite entertainment possibilities.",
    image: "/images/byod.png",
  },
];
const Services = () => {
  return (
    <section
      id="services"
      className="relative"
      style={{
        position: "relative",
      }}
    >
      <div>
        <div
          style={{ backgroundColor: "black" }}
          className="h-[70px] sm:h-[150px] md:h-[150px] lg:h-[300px] xl:h-[400px]  overflow-visible"
        >
          <div className="flex justify-center ">
            {/* <div className="relative w-[95vw] aspect-[21/9] z-20"> */}
            <div className="relative w-full aspect-[21/9] z-20">
              <ClippedSection
                backgroundImage="/images/cloud.png"
                headingWhite="our"
                headingYellow="services"
                paragraph="We are on a journey to empower creators and delight streamers around the globe."
                buttonLabel="Experience"
                buttonLink="/experience"
              />
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------sir zeeshan */}
      {/* <div
          style={{
            // height: "200px",
            width: "95%",
            // border: "1px solid red",
            position: "absolute",
            // top: "4%",
            left: "2.5%",
            zIndex: 40,
            backgroundImage: "url('/images/side-view-woman.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="h-[282px] sm:h-[320px] md:h-[500px] lg-h-[600px] -top-[0.5%] sm:top-[2%] md:top-[4%]"
        > */}
      {/* <div style={{  padding: "3%" }}>
            <div
              style={{
                // border: "1px solid red",
                // borderRadius: "33px",
                backgroundImage: "url('/images/rectangle-38.png')",
                zIndex: 990,
                // height: "520px",
                // width: "70%",
                clipPath: "polygon(0 8%, 100% 18%, 100% 78%, 0 86%)",
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
                // backgroundSize: "contain",
                // backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="h-[200px]  sm:h-[240px] md:h-[490px] lg:h-[480px] w-[74%] "
            >
              <div className="flex flex-col justify-start items-start text-left px-4 sm:px-8">
                <h3 className="text-[#FFD300] text-sm font-normal sm:text-4xl sm:font-bold mb-1 sm:mb-2 md:mb-6 tracking-wider uppercase">
                  <span className="text-white">our</span>{" "}
                  <span className="text-[#FFD300]">services</span>
                </h3>

                <p className="text-white mb-4 text-xs sm:text-xl lg:text-4xl max-w-[800px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  maxime aperiam ducimus blanditiis.
                </p>

                <button className="text-sm md:text-2xl w-auto bg-blue-500 px-2 py-1 sm:px-6 sm:py-2 rounded-full hover:bg-blue-600 transition-colors hidden sm:block">
                <Link href="/experience" aria-label="Experience">
            EXPERIENCE
            </Link>
                </button>
              </div>
            </div>
          </div> */}

      {/* </div> */}
      {/* -------------------------------------- */}

      <div
        className="
    relative z-10 mx-auto space-y-15  flex flex-col items-center justify-between 
  "
        style={{
          backgroundImage: "url('/images/vector-1.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className=" h-[370px] sm:h-[450px]  lg:h-[250px] "></div>
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={index}
              className={`
          grid grid-cols-1 md:grid-cols-2  md:gap-20 md:space-y-8 items-center  px-8 `}
            >
              {/* Left Cell */}
              <div
                className={`${
                  isEven
                    ? "md:order-2 md:justify-end text-right items-end"
                    : "md:order-1 md:justify-start"
                } flex justify-center `}
              >
                <div className="w-full max-w-[500px]">
                  <h4
                    className="text-[#FFD300] heading-s xl:heading-m mb-4"
                    style={{ fontFamily: '"Right Grotesk Medium", sans-serif' }}
                  >
                    {service.title}
                  </h4>
                  <p className="body-normal text-gray-300">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Right Cell */}
              <div
                className={`${
                  isEven
                    ? "md:order-1 md:justify-start"
                    : "md:order-2 md:justify-end"
                } flex justify-center `}
              >
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[410px] lg:h-[470px]  overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain "
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
