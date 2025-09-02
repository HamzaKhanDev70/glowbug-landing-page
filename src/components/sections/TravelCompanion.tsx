"use client";

import { useState, useEffect } from "react";
import TravelHero from "./TravelHero";
import TravelIllustration from "./TravelIllustration";
import TravelFeatures from "./TravelFeatures";
import EntertainmentCTA from "./EntertainmentCTA";
import TravelSlider from "./TravelSlider";
import TravelTypes from "./TravelTypes";
import Entertainment from "./Entertainment";
import SliderDots from "./Slider_Dots";
import EntertainmentFeatures from "./EntertainmentFeatures";
import SectionSeparator from "./SectionSeperator";
export default function TravelCompanion() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const slides = [
    {
      image: "/images/hero/s1-lady.png",

      heading: "DreamStream",
      description:
        "DreamStream exists to enable travellers across the world to find their moments of magic in motion.",
    },
    {
      image: "/images/hero/s4-byod.png",

      heading: "Inlounge & Onboard ",
      description:
        "Offering an unforgettable experience offline, when there is no other service available.",
    },
    {
      image: "/images/hero/s2-train-short.png",

      heading: "Carrier-Agnostic by Design",
      description:
        "DreamStream delivers the same seamless experience— whether jet or train, bus or cruise we have it covered for you.",
    },
    {
      image: "/images/s5-plane.png",

      heading: "Your Journey, Your Screen",
      description: "Watch, Listen, Read, Play and Meditate",
    },
    {
      image: "/images/hero/s3-bus.png",

      heading: "Passenger-First Entertainment Everywhere",
      description:
        "A diverse library travels with you, ready on any seat, every trip.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="overflow-x-hidden w-full overflow-y-clip ">
        <div className="relative  overflow-hidden min-h-[calc(100v-100px)] ">
          {/* <div className="relative rounded-3xl lg:rounded-[64px] overflow-hidden min-h-[calc(100v-100px)] "> */}
          <div className="absolute inset-0 w-full h-full ">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <div
                  className="w-[100%] min-h-screen h-[3021px] bg-no-repeat bg-center bg-cover"
                  style={{
                    backgroundImage: `url('${slide.image}')`,
                    backgroundPosition: "top",
                  }}
                />
              </div>
            ))}
          </div>
          {/* Arrows for Slider Navigation */}
          <div className="absolute inset-0  sm:flex hidden  items-start justify-between px-4 md:px-10  mx-9 pt-[56%]">
            {/* Left Arrow */}
            {currentImageIndex > 0 && (
              <button
                onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
                className="text-white bg-black/30 hover:bg-black/50 rounded-full p-2 transition relative z-15 cursor-pointer"
                aria-label="Previous Slide"
              >
                {/* Replace with your preferred icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}

            {/* Right Arrow */}
            {currentImageIndex < slides.length - 1 && (
              <button
                onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
                className="text-white bg-black/30 hover:bg-black/50 rounded-full p-2 transition relative z-15 cursor-pointer"
                aria-label="Next Slide"
              >
                {/* Replace with your preferred icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}
          </div>

          {slides.map(
            (image, index) =>
              index !== currentImageIndex && (
                <link key={index} rel="preload" as="image" />
              )
          )}
          <section className="w-full py-16  flex items-center justify-center bg-dark-900/50 text-white relative z-10 ">
            <div className="w-full flex flex-col items-center justify-center">
              <TravelHero
                heading={slides[currentImageIndex].heading}
                description={slides[currentImageIndex].description}
              />
              <TravelIllustration />
              <SliderDots
                currentIndex={currentImageIndex}
                total={slides.length}
                onSelect={(index) => setCurrentImageIndex(index)}
              />
              <TravelFeatures />
              <EntertainmentCTA />
              <SectionSeparator keyword="Where is" />
              <TravelTypes />
              {/* <EntertainmentCTA /> */}
            </div>
          </section>
          {/* <div className="relative h-[500px] lg:h-[650px] z-10 border-2 border-red-500">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
          </div> */}
        </div>
 

      {/* <div className="relative -mt-[500px] lg:-mt-[650px] border-2"> */}
      <div className="relative">
        <SectionSeparator keyword="What we offer" />
        <TravelSlider />
        {/* <TravelTypes /> */}
      </div>
      <EntertainmentFeatures />
      <Entertainment />
    
    </div>
  );
}
