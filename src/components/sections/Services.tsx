'use client';

import React from "react";
import Image from "next/image";
import Experience from "./Experience";
import Link from "next/link";
import { motion } from "framer-motion";

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
        grid grid-cols-1 md:grid-cols-2 md:gap-20 md:space-y-8 items-center px-8
      `}
    >
      {/* Text Side */}
       <motion.div
        initial={{ x: isEven ? 200 : -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className={`${
          isEven
            ? "md:order-2 md:justify-end text-right items-end"
            : "md:order-1 md:justify-start"
        } flex justify-center`}
      >
        <div className="w-full max-w-[500px]">
          <h4
            className="text-[#FFD300] heading-s xl:heading-m mb-4"
            style={{ fontFamily: '"Right Grotesk Medium", sans-serif' }}
          >
            {service.title}
          </h4>
          <p className="body-normal text-gray-300">{service.description}</p>
        </div>
      </motion.div>

      {/* Image Side with Animation */}
      <motion.div
        initial={{ x: isEven ? 200 : -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className={`${
          isEven
            ? "md:order-1 md:justify-start"
            : "md:order-2 md:justify-end"
        } flex justify-center`}
      >
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[410px] lg:h-[470px] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
})}

      </div>
    </section>
  );
};

export default Services;
