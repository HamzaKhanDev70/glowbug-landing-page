"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import CompanyPartner from './Company-Partner';
import ExperienceGallery from './ExperienceGallery';

const slides = [
  {
    bg: "/images/exp-group.png",
    overlay1: "/images/exp-rectangle.png",
    overlay2: "/images/exp-overlay.png",
  },
  {
    bg: "/images/playVideo.png",
    overlay1: "/images/exp-rectangle.png",
    overlay2: "/images/exp-overlay.png",
  },
  {
    bg: "/images/seamless.png",
    overlay1: "/images/exp-rectangle.png",
    overlay2: "/images/exp-overlay.png",
  },
  {
    bg: "/images/byod.png",
    overlay1: "/images/exp-rectangle.png",
    overlay2: "/images/exp-overlay.png",
  },
];

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden relative bg-[#00548985] " id="experience">
      <div className="relative min-h-screen w-full">
        {/* 🔹 Background Image Transition */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute right-60 inset-10 transition-opacity duration-1000 ease-in-out w-[90%]  ${
              index === currentIndex ? "opacity-100 z-20" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${slide.bg}')`,
              backgroundSize: "contain",
              backgroundPosition: "right",
              backgroundRepeat: "no-repeat",
            }}
          />
          
        ))}
  {/* Dark blue overlay */}
  {/* <div className="absolute inset-0 bg-blue-900 bg-opacity-70 mix-blend-multiply" /> */}
        {/* 🔸 Preload next background images */}
        {slides.map(
          (slide, index) =>
            index !== currentIndex && (
              <link key={index} rel="preload" as="image" href={slide.bg} />
            )
        )}

        {/* 🔹 Overlays for active slide */}
        <div className="relative w-full h-screen">
          {/* Image 2 overlay */}
          <div className="absolute z-0 top-[5%] left-[10%] w-[60%] h-[100%]">
            <Image
              src={slides[currentIndex].overlay1}
              alt="Overlay 1"
              fill
              className="object-contain"
            />
          </div>

          {/* Image 3 overlay */}
          <div className="absolute z-30 -bottom-5 w-[50%] h-[80%] opacity-90">
            <Image
              src={slides[currentIndex].overlay2}
              alt="Overlay 2"
              fill
              className="object-contain"
            />
          </div>

          {/* 🔸 Pagination Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-yellow-400"
                    : "bg-white opacity-40 hover:opacity-70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
<CompanyPartner/>
<ExperienceGallery/>
    
    </div>
  );
}
