import Image from "next/image";

import { Mail } from "lucide-react";
import React from "react";

const ComingSoon = () => {
  return (
    <main className="relative">
      <div className="relative">
        <div className="absolute top-[20%] left-[15%] w-[70vw] max-w-[1600px] aspect-[3/3] z-80 pointer-events-none">
          <div className="relative w-full h-full">
            <Image
              src="/images/yellow-rect.png"
              alt="Yellow background"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 80vw, 40vw"
              priority
            />
          </div>
          <div className="absolute top-1/2 left-[6%] -translate-y-1/2 z-90 w-[80%] max-w-[1200px] aspect-[3/2]">
            <div className="relative w-full h-full">
              <Image
                src="/images/soon-listen.png"
                alt="Coming soon text"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 60vw, 30vw"
              />
            </div>
          </div>
        </div>

        <div
          className="w-full h-[1000px] bg-cover bg-top bg-no-repeat relative -z-1 "
          style={{
            backgroundImage: "url('/images/coming-soon.png')",
            clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)",
          }}
        >
          <div className="flex  items-center justify-between w-full px-18 py-6">
            {/* Left: Logo */}
            <div className="mb-4 md:mb-0">
              <Image
                src="/images/soon-logo.png"
                alt="Logo"
                width={80}
                height={60}
                className="object-contain"
              />
            </div>
            {/* Right: Image */}
            <div className="mb-4 md:mb-0">
              <Image
                src="/images/soon-social.png"
                alt="Count Down"
                width={200}
                height={80}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full bg-cover bg-no-repeat -mt-[330px] relative z-1"
        style={{
          backgroundImage: "url('/images/vector-1.png')",
          backgroundPosition: "top center",
            clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0% 100%)"
        }}
      >
        {/* Content Section */}

        <div className=" w-full pt-[21%] pb-10 px-4  ">
          <div className="max-w-7xl mx-auto p-8 md:p-12 flex flex-col items-center justify-center">
            <h1 className="heading-m md:heading-l font-bold mb-6 md:mb-10 uppercase">
              <span className="text-[#FEE300]">coming soon</span>
              <br className="md:hidden" />
              <span className="text-pink-500"> exclusively for you.</span>
            </h1>
            <p className="body-normal mb-8 leading-relaxed">
              Welcome to DreamStream{" "}
              <span className="text-blue-700 ">Magic in Motion</span>
            </p>
            <p className="body-normal mb-8 leading-relaxed">
              Get ready to experience seamless entertainment and essential
              services like never before. DreamStream is a next-generation
              platform designed for passengers across various modes of
              transport. Whether you're traveling by bus, train, ferry, or
              plane, DreamStream offers easy access to entertainment, real-time
              information, and essential services.
            </p>
            <p className="text-[#FEE300] body-normal mb-8 leading-relaxed">
              Stay connected and enjoy a passenger-centric experience that puts
              freedom of choice at your fingertips – even when you’re offline.
            </p>

            <div className="w-full h-[122px] relative mb-4">
              <Image
                src="/images/count-down.png"
                alt="Count Down"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 px-4 py-2">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white" />
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="bg-gray-700 outline-none pl-10 pr-4 py-3 text-sm text-white placeholder-gray-400 w-64 rounded-lg "
                />
              </div>

              <button className="bg-blue-600 text-white px-4 py-3 text-sm  hover:bg-blue-700 transition rounded-lg">
                Keep me updated
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </main>
  );
};

export default ComingSoon;
