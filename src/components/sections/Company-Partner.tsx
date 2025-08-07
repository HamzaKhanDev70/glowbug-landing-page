'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from 'framer-motion'
import Image from 'next/image'
import "swiper/css";


const partners = [
  { name: "Google", logo: "/images/pia.png" },
  { name: "Facebook", logo: "/images/pia.png" },
  { name: "Amazon", logo: "/images/pia.png" },
  // { name: "Netflix", logo: "/images/pia.png" },
  // { name: "Apple", logo: "/images/pia.png" },
  // { name: "Spotify", logo: "/images/pia.png" },
  // { name: "Google", logo: "/images/pia.png" },
  // { name: "Facebook", logo: "/images/pia.png" },
  // { name: "Amazon", logo: "/images/pia.png" },
  // { name: "Netflix", logo: "/images/pia.png" },
  // { name: "Apple", logo: "/images/pia.png" },
  // { name: "Spotify", logo: "/images/pia.png" },
];
interface CompanyPartnerProp{
  heading?:string
}
const  CompanyPartner:React.FC<CompanyPartnerProp>=({heading})=> {

  return (
    <section className={`w-full py-16 px-4 ${heading?"bg-black":"bg-transparent opacity-50"} text-white`}>
      <div className="max-w-9xl mx-auto text-center">
        <h2 className="text-[#FEE300] heading-s md:heading-m mb-8" style={{ fontFamily: '"Right Grotesk Medium", sans-serif' }}>
  {heading}
        </h2>

        {/* Horizontal Line */}
        {heading &&<div className="border-t border-gray-600 mb-6" />}

        {/* Swiper Logo Slider */}
        {/* <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          loop={true}
          speed={3000}
          slidesPerView={7}
          spaceBetween={8}
          className="w-full"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index} className="flex justify-center ">
              <div className={`flex items-center px-1 ${heading?"":" border"}`}>
                <div className="w-24 h-24 relative mb-2">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm font-medium text-white">
                 {heading?"":partner.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
         <div className="overflow-hidden w-full bg-black ">
      <motion.div
        className="flex w-[100%]"
        animate={{ x: ['100%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: 'linear',
        }}
      >
        {/* Image repeated twice for seamless loop */}
        {[...Array(1)].map((_, index) => (
          <div key={index} className="flex items-center px-4">
            <div className="w-24 h-24 relative">
              <Image
                src="/images/pia.png" // ✅ Replace with your actual image path
                alt="Partner Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>

        {/* Horizontal Line */}
        {heading &&<div className="border-t border-gray-600 mb-6" />}
      </div>
    </section>
  );
}
export default CompanyPartner