"use client";

import { useState, useEffect } from "react";
import TravelHero from "./TravelHero";
import TravelIllustration from "./TravelIllustration";
import TravelFeatures from "./TravelFeatures";
import EntertainmentCTA from "./EntertainmentCTA";
import TravelSlider from "./TravelSlider";
import TravelTypes from "./TravelTypes";
import Entertainment from "./Entertainment";

export default function TravelCompanion() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    '/images/MainHeader.png',
    '/images/MainHeader2.png',
    '/images/MainHeader3.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); 

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="overflow-x-hidden w-full">
      <div className="px-5 md:px-20 mt-10 md:mt-22">
        <div 
          className="relative rounded-3xl lg:rounded-[64px] overflow-hidden min-h-[calc(100vh-200px)]"
        >
          <div className="absolute inset-0 w-full h-full">
            {backgroundImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ 
                  backgroundImage: `url('${image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat"
                }}
              />
            ))}
          </div>

          {backgroundImages.map((image, index) => (
            index !== currentImageIndex && (
              <link key={index} rel="preload" as="image" href={image} />
            )
          ))}
          
          <section
            className="w-full py-16 lg:py-30 flex items-center justify-center bg-dark-900/50 text-white relative z-10"
          >
            <div className="w-full flex flex-col items-center">
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center gap-2 z-20">
            {backgroundImages.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2.5 h-2.5 rounded-full inline-block mx-1 cursor-pointer transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-yellow-400 opacity-100' 
                    : 'bg-purple-500 opacity-50 hover:opacity-80'
                }`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setCurrentImageIndex(index);
                  }
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
              <TravelHero />
              <TravelIllustration />
              <TravelFeatures />
              <EntertainmentCTA />
            </div>
          </section>

          <div className="relative h-[500px] lg:h-[650px] z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
          </div>       
        </div>
      </div>

      <div className="relative -mt-[500px] lg:-mt-[650px]">
        <TravelSlider />
        <TravelTypes />
        <Entertainment />
      </div>
    </div>
  );
}