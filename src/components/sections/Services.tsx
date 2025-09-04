'use client';

import React,{useEffect,useRef} from "react";
import SectionSeparator from "./SectionSeperator";


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
   const [showModal, setShowModal] = React.useState(false);
  const firstService = servicesData[0];
  const otherServices = servicesData.slice(1);
    const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  return (
    <section id="services" className="relative py-12" style={{ position: "relative" }}>
       <SectionSeparator keyword="Why US?" />
      <div
        className="relative z-10 mx-auto flex flex-col items-center justify-between overflow-x-hidden"
        style={{
          background: "linear-gradient(to bottom, #301400 0%, #000000 100%)",
        }}
      >
        <div className="h-[120px] sm:h-[150px]"></div>
        {/* First service row only */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 md:space-y-8 items-center px-8">
          {/* Text Side */}
          <div className="md:order-1 md:justify-start flex justify-center">
            <div className="w-full max-w-[500px]">
              <h4 className="text-[#FFE300] heading-s xl:heading-m mb-4" style={{ fontFamily: '"Right Grotesk Medium", sans-serif' }}>{firstService.title}</h4>
              <p className="body-normal ">{firstService.description} <span className="text-[#FFE300] cursor-pointer underline ml-2" onClick={() => setShowModal(true)}>see more...</span></p>
            </div>
          </div>
          {/* Image Side */}
          <div className="md:order-2 md:justify-end flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[410px] lg:h-[470px] overflow-hidden">
              <img src={firstService.image} alt={firstService.title} className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
        {/* Custom Modal for other services */}
        {showModal && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50 overflow-auto p-4" onClick={() => setShowModal(false)}>
            <div className="relative w-[90%] max-w-5xl h-[88%] " onClick={e => e.stopPropagation()}  ref={modalRef}>
                {/* SVG Background */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full z-0"
        >
          <polygon
            points="0,9 100,2 100,98 0,90"
            fill="#040404B2"
            // stroke="red-500"
            stroke="#FFE300"
            strokeWidth="0.8"
          />
        </svg>
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-5 right-[1%] z-60 w-8 h-8 hover:bg-black/70 text-white hover:text-gray-500 flex items-center justify-center text-lg"
              >
                ✕
              </button>
              <div className="absolute inset-0 flex flex-row gap-8 px-6 py-28 sm:py-18 clip-polygon-modal" style={{clipPath: 'polygon(0% 9%, 100% 2%, 100% 98%, 0% 90%)'}}>
                {/* Left: Static Image */}
                <div className="flex-shrink-0 flex items-center justify-center w-72 h-72 mt-28">
                  <img src="/images/crew.png" alt="Static Service" className="w-full h-full object-contain rounded-xl" />
                </div>
                {/* Right: Dynamic Content (scrollable) */}
                <div className="flex flex-col flex-1 gap-4 overflow-y-auto thin-scrollbar h-full">
                  <h2 className="heading-m text-[#FFE300] text-center mb-6" style={{ fontFamily: '"Right Grotesk Medium", sans-serif' }}>More Services</h2>
                  {otherServices.map((service, index) => (
                    <div key={index} className="mb-2">
                      <h4 className="text-[#FFE300] heading-s xl:heading-s mb-2" style={{ fontFamily: '"Right Grotesk Medium", sans-serif' }}>{service.title}</h4>
                      <p className="body-normal ">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
     
    </section>
  );
};

export default Services;



// 'use client';

// import React from "react";
// import Image from "next/image";
// import Experience from "./Experience";
// import Link from "next/link";
// import { motion } from "framer-motion";

// import ClippedSection from "./Clipped-Section";
// const servicesData = [
//   {
//     title: "Entertainment Superhighway",
//     description:
//       "Indulge into the largest entertainment portfolio offering personalized experience, catering to your tastes and desires. With genre categories and ratings from IMDb and Rotten Tomatoes, hold the best of entertainment in the palm of your hand. No internet restrictions, just endless entertainment. Start your journey right after you check-in!",
//     image: "/images/come-true.png",
//   },
//   {
//     title: "Seamless Integration with Your Travel Journey - DreamPay",
//     description:
//       "Enrich your travel experience with DreamPay. Smoothly incorporating across every touchpoint, we simplify your journey from booking to in-flight lounges amenities onboard purchases. Experience convenience and efficiency like never before. Bring the future of travel today!",
//     image: "/images/seamless.png",
//   },
//   {
//     title:
//       "DreamComeTrue Loyalty Program A Never-Ending Journey of Perks and Privileges",
//     description:
//       "Indulge into the largest entertainment portfolio offering personalized experience, catering to your tastes and desires. With genre categories and ratings from IMDb and Rotten Tomatoes, hold the best of entertainment in the palm of your hand. No internet restrictions, just endless entertainment. Start your journey right after you check-in!",
//     image: "/images/super-highway.png",
//   },
//   {
//     title: "DreamCrew - Redefining Onboard Communication",
//     description:
//       "Purge the communication barriers onboard with DreamCrew. Effortlessly interact with the crew through text-based communication for personalized and functional service. Experience a smoother journey with our innovative approach. Welcome to the future of onboard communication!",
//     image: "/images/crew.png",
//   },
//   {
//     title: "BYOD Compatible Platform",
//     description:
//       "Whether on a flight, a bus, or a train, our BYOD platform ensures that you get the same entertainment experience anywhere. Amplify your travel experience with DreamStream and unlock a world of infinite entertainment possibilities.",
//     image: "/images/byod.png",
//   },
// ];
// const Services = () => {
//   return (
//     <section
//       id="services"
//       className="relative py-12"
//       style={{
//         position: "relative",
//       }}
//     >
//       {/* <div>
//         <div
//           style={{ backgroundColor: "black" }}
//           className="h-[70px] sm:h-[150px] md:h-[150px] lg:h-[300px] xl:h-[400px]  overflow-visible"
//         >
//           <div className="flex justify-center ">
//             <div className="relative w-full aspect-[21/9] z-20">
//               <ClippedSection
//                 backgroundImage="/images/cloud.png"
//                 headingWhite="our"
//                 headingYellow="services"
//                 paragraph="We are on a journey to empower creators and delight streamers around the globe."
//                 buttonLabel="Experience"
//                 buttonLink="https://dspk-sandbox.airfi.io/"
//               />
//             </div>
//           </div>
//         </div>
//       </div> */}

//       <div
//         className="
//     relative z-10 mx-auto   flex flex-col items-center justify-between overflow-x-hidden
//   "
//         style={{
//           backgroundImage: "url('/images/vector-1.png')",
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           backgroundPosition: "top center",
//         }}
//       >
//         <div className=" h-[120px] sm:h-[150px]"></div>
//      {servicesData.map((service, index) => {
//   const isEven = index % 2 === 1;

//   return (
//     <div
//       key={index}
//       className={`
//         grid grid-cols-1 md:grid-cols-2 md:gap-20 md:space-y-8 items-center px-8 
//       `}
//     >
//       {/* Text Side */}
//        <motion.div
//         initial={{ x: isEven ? 200 : -200, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         viewport={{ once: false, amount: 0.3 }}
//         className={`${
//           isEven
//             ? "md:order-2 md:justify-end text-right items-end"
//             : "md:order-1 md:justify-start"
//         } flex justify-center`}
//       >
//         <div className="w-full max-w-[500px]">
//           <h4
//             className="text-[#FFD300] heading-s xl:heading-m mb-4"
//             style={{ fontFamily: '"Right Grotesk Medium", sans-serif' }}
//           >
//             {service.title}
//           </h4>
//           <p className="body-normal text-gray-300">{service.description}</p>
//         </div>
//       </motion.div>

//       {/* Image Side with Animation */}
//       <motion.div
//         initial={{ x: isEven ? 200 : -200, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         viewport={{ once: false, amount: 0.3 }}
//         className={`${
//           isEven
//             ? "md:order-1 md:justify-start"
//             : "md:order-2 md:justify-end"
//         } flex justify-center`}
//       >
//         <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[410px] lg:h-[470px] overflow-hidden">
//           <img
//             src={service.image}
//             alt={service.title}
//             className="w-full h-full object-contain"
//           />
//         </div>
//       </motion.div>
//     </div>
//   );
// })}

//       </div>
//     </section>
//   );
// };

// export default Services;