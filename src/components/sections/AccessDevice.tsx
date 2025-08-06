"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import MobileAppShowcase from "./FlashMobile";
import HowItWorks from "./HowItWorks";
export default function AccessDevice() {
  const features = [
    {
      icon: (
        <Image
          src="/images/icon1.png"
          alt="Bring your own device"
          width={45}
          height={45}
        />
      ),
      title: "Bring your own device",
      description:
        "For travellers across the World who want freedom, choice, and control of their entertainment.",
    },
    {
      icon: (
        <Image
          src="/images/icon2.png"
          alt="No wifi or download"
          width={45}
          height={45}
        />
      ),
      title: "No wifi or download",
      description:
        "For travellers across the World who want freedom, choice, and control of their entertainment.",
    },
    {
      icon: (
        <Image
          src="/images/icon3.png"
          alt="Free access during travel"
          width={45}
          height={45}
        />
      ),
      title: "Free access during travel",
      description:
        "For travellers across the World who want freedom, choice, and control of their entertainment.",
    },
  ];
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

const x = useTransform(
  scrollYProgress,
  [0.2, 0.5],
  ["60%", "-10%"],
  { clamp: true }
);
  return (
    <section className="relative  ">
      <div
        ref={ref}
        className="w-full bg-black bg-no-repeat bg-center bg-contain aspect-[1920/1950] flex items-center relative -top-3"
        style={{ backgroundImage: "url('/images/rectangle-20.png')" }}
      >
        <div className="h-auto w-full grid grid-cols-1 md:grid-cols-2  mb-10 sm:mb-0">
          {/* Animated Image */}
          <motion.div style={{ x }} className="relative z-1 overflow-x-visible">
            <div className="w-[200%] -ml-[100%] ">
              <a
                href="https://dspk-sandbox.airfi.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/Group-35-3.png"
                  alt="Visual"
                  className="w-full  cursor-pointer"
                />
              </a>
            </div>
          </motion.div>

          <div className="relative w-full flex items-center justify-center px-4 py-8 sm:py-12 lg:py-0 z-0">
            <div className="w-full text-center md:text-left">
              <h2
                className="uppercase grotesk-light-narrow text-[72px]"
                style={{ fontFamily: '"Right Grotesk Narrow", sans-serif' }}
              >
                Access on your own device:
              </h2>
              <h2 className="uppercase font-inter heading-l sm:heading-s md:heading-m lg:heading-xl">
                <span className="block text-[#00A3FF] font-bold">
                  ANYWHERE. ANY TIME.
                </span>
              </h2>
              <p className="text-white body-normal font-normal mb-4 sm:mb-8">
                Here the experience for DreamStream should be embedded that by
                clicking the “Tablet” the user shall be redirected to the DSPK
                sandbox experience. Insertion of Motion Reel created through
                different screens and use cases combining web portal and web
                app.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex-1 flex flex-col items-center md:items-start text-left"
                  >
                    <div className="mb-2 sm:mb-4">{feature.icon}</div>
                    <h3
                      className="heading-s sm:heading-xs md:heading-s mb-1 sm:mb-2 leading-tight"
                      style={{
                        fontFamily: '"Right Grotesk Medium", sans-serif',
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-white body-normal text-center md:text-left">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative z-1 w-full -mt-4"
        style={{
          backgroundImage: "url('/images/rectangle-20.png')",
          backgroundSize: "cover",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
          // right: "13rem",
          // left: "2rem",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="px-8 relative lg:-top-35 ">
          <MobileAppShowcase />
        </div>
        <div className="flex items-center justify-center  ">
          <HowItWorks />
        </div>
      </div>
    </section>
  );
}
