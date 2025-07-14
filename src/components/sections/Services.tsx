import React from "react";
import Image from "next/image";
import Experience from "./Experience";
import Link from "next/link";
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
    title: "DreamCrew - Redefining Onboard Communication",
    description:
      "Whether on a flight, a bus, or a train, our BYOD platform ensures that you get the same entertainment experience anywhere. Amplify your travel experience with DreamStream and unlock a world of infinite entertainment possibilities.",
    image: "/images/byod.png",
  },
];
const Services = () => {
  return (
    <section
      id="services"
      className="relative w-full"

      style={{
        border:'1px solid red',
        margin:'0 50px'
      }}
    >
      {/* 🔹 Background Image */}
      {/* <div className="absolute inset-0 z-0">
        <Image
          src="/images/vector-1.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div> */}

      {/* <div className="relative w-[80%] h-[60%] z-30 pointer-events-none border border-yellow-500">
        <Image
          src="/images/side-view-woman.png"
          alt="Woman overlay"
      height={400}
      width={800}
          className="object-contain"
          style={{ objectPosition: "top center" }}
          priority
        />
      </div> */}

      {/* 🔹 Main Section with Rectangle + Content */}
      {/* <div className="relative z-20 pt-[30vh] md:pt-[50vh] pb-10 md:pb-20  border border-red-500 h">
        <div className="absolute -top-20 md:-top-10 lg:top-0 left-1/2 border border-red-500  md:left-1.5/3 lg:left-1/2 transform -translate-x-1/2 -translate-y-1/3 mx-auto w-[70%] md:w-4/5 h-[60%] sm:h-[80%] md:h-[90%] z-20 ">
        
          <Image
            src="/images/rectangle-38.png"
            alt="Main feature"
            fill
            className="object-contain md:object-left"
            priority
          />

   
          <div className="absolute top-1/2 left-4 sm:left-12 md:left-20 transform -translate-y-1/2 z-30 text-white max-w-md px-4">
            <h3 className="text-[#FFD300] heading-s md:heading-m font-normal mb-4 sm:mb-6 capitalize tracking-wider wrap">
              <span className="text-white">Our</span>
              <span className="text-[#FFD300]"> Services</span>
            </h3>
            <p className="body-normal text-white mb-4 hidden md:block">
              Illo maxime aperiam ducimus blanditiis, natus modi sint totam
              mollitia quos nam deleniti velit reprehenderit.
            </p>
            <button className="body-normal w-auto bg-blue-500 px-4 py-2 sm:px-6 sm:py-2 rounded-full hover:bg-blue-600 transition-colors text-sm sm:text-base">
              <Link href="/experience" aria-label="Experience ">
                Experience
              </Link>
            </button>
          </div>
        </div>
      </div> */}

      {/* content */}
      {/* <div className="relative z-30 mt-20 px-4 md:px-20 max-w-7xl mx-auto space-y-24">
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row gap-6 ${
                isEven ? "md:flex-row-reverse" : ""
              } items-center md:items-start`}
            >
              <div className="w-full md:w-1/2 min-h-[320px] flex items-center">
                <div>
                  <h4 className="text-[#FFD300] heading-m mb-4">
                    {service.title}
                  </h4>
                  <p className="body-normal text-gray-300">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="w-full md:w-4/5 h-[420px] relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={`object-contain ${
                    isEven ? "object-left" : "object-right"
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div> */}
    </section>
  );
};

export default Services;
