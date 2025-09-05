// "use client";

// import React, { useRef, useEffect, useState } from "react";
// import SectionSeparator from "./SectionSeperator";
// import SectionDivider from "./SectionSeperator";
// import { motion, useInView } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination,Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const servicesData = [
//   {
//     title: "Entertainment Superhighway",
//     description:
//       "Indulge into the largest entertainment portfolio offering personalized experience, catering to your tastes and desires. With genre categories and ratings from IMDb and Rotten Tomatoes, hold the best of entertainment in the palm of your hand. No internet restrictions, just endless entertainment. Start your journey right after you check-in!",
//     image: "/images/service-1-1.png",
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
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: false, amount: 0.4 });
//   const [firstAnimationDone, setFirstAnimationDone] = useState(false);
//   const [showSlider, setShowSlider] = useState(false);
//   const firstService = servicesData[0];

//   // Reset when section comes into view
//   useEffect(() => {
//     if (isInView) {
//       setFirstAnimationDone(false);
//       setShowSlider(false);
//     }
//   }, [isInView]);

//   return (
//     <section ref={ref} id="services" className="relative py-12">
//       <SectionSeparator keyword="Why US?" />
//       <div
//         className="relative z-10 mx-auto flex flex-col items-center justify-between overflow-x-hidden"
//         style={{
//           background: "linear-gradient(to bottom, #301400 0%, #000000 100%)",
//         }}
//       >
//         <div className="h-[120px]" />
//         <div className="w-full min-h-[700px] relative">
//           {/* First service row */}
//           <motion.div
//             key="first-service"
//             initial={{ opacity: 1 }}
//             animate={{ opacity: firstAnimationDone ? 0 : 1 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             onAnimationComplete={() => {
//               if (firstAnimationDone) setShowSlider(true);
//               else setFirstAnimationDone(true);
//             }}
//             className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-4 items-center px-8"
//           >
//             {/* Text Side */}
//             <motion.div
//               initial={{ x: -280, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="flex justify-center"
//             >
//               <div className="max-w-[700px]">
//                 <h4 className="text-[#FFE300] text-xl font-semibold mb-4">
//                   {firstService.title}
//                 </h4>
//                 <p className="text-gray-300">{firstService.description}</p>
//               </div>
//             </motion.div>

//             {/* Image Side */}
//             <motion.div
//               initial={{ x: 280, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="flex justify-center"
//             >
//               <img
//                 src={firstService.image}
//                 alt={firstService.title}
//                 className="w-90 h-90 object-contain"
//               />
//             </motion.div>
//           </motion.div>

//           {/* Slider with fixed layout */}
//           {showSlider && (
//             <motion.div
//               key="slider"
//               initial={{ x: 580, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 1.2, ease: "easeOut" }}
//               className="absolute inset-0 w-full h-full px-8"
//             >
//               <Swiper
//                 spaceBetween={30}
//                 slidesPerView={1}
//                 modules={[Pagination, Autoplay]}
//                 autoplay={{
//                   delay: 1000,
//                   disableOnInteraction: false,
//                   pauseOnMouseEnter: true,
//                 }}
//                 loop={true}
//                 pagination={{ 
//                   clickable: true,
//                   bulletClass: 'swiper-pagination-bullet',
//                   bulletActiveClass: 'swiper-pagination-bullet-active'
//                 }}
//                 className="h-full w-full !overflow-hidden"
//                 style={{ width: '100%' }}
//               >
//                 {servicesData.map((service, index) => (
//                   <SwiperSlide key={index}>
//                     <div className="w-full h-full flex items-center justify-center">
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-6xl">
//                         {/* Text Side */}
//                         <div className="flex flex-col justify-center">
//                           <div className="max-w-[600px]">
//                             <h4 
//                               className="text-[#FFE300] text-2xl lg:text-3xl mb-6" 
//                               style={{ fontFamily: '"Right Grotesk Medium", sans-serif' }}
//                             >
//                               {service.title}
//                             </h4>
//                             <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
//                               {service.description}
//                             </p>
//                           </div>
//                         </div>

//                         {/* Image Side */}
//                         <div className="flex justify-center items-center">
//                           <div className="w-full max-w-[450px]">
//                             <img 
//                               src={service.image} 
//                               alt={service.title} 
//                               className="w-full h-auto object-contain max-h-[400px]" 
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </motion.div>
//           )}
//         </div>
//       </div>

//       <SectionDivider keyword="Know Us" />
//     </section>
//   );
// };

// export default Services;


// "use client";

// import React, { useRef, useEffect, useState } from "react";
// import SectionSeparator from "./SectionSeperator";
// import SectionDivider from "./SectionSeperator";
// import { motion, useInView } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

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
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: false, amount: 0.4 });
//   const [firstAnimationDone, setFirstAnimationDone] = useState(false);
//   const [showSlider, setShowSlider] = useState(false);
//   const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
//   const firstService = servicesData[0];
//   const currentService = servicesData[currentServiceIndex];

//   // Reset when section comes into view
//   useEffect(() => {
//     if (isInView) {
//       setFirstAnimationDone(false);
//       setShowSlider(false);
//     }
//   }, [isInView]);

//   // Auto-slide logic
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentServiceIndex((i) => (i + 1) % servicesData.length);
//     }, 3500); // Change slide every 3.5 seconds
//     return () => clearInterval(interval);
//   }, [servicesData.length]);

//   return (
//     <section ref={ref} id="services" className="relative py-12">
//       <SectionSeparator keyword="Why US?" />
//       <div
//         className="relative z-10 mx-auto flex flex-col items-center justify-between overflow-x-hidden"
//         style={{
//           background: "linear-gradient(to bottom, #301400 0%, #000000 100%)",
//         }}
//       >
//         <div className="h-[120px]" />
//         <div className="w-full min-h-[700px] relative">
//           {/* Only show one service at a time inside the red border */}
//           <div className="grid grid-cols-1 md:grid-cols-2 items-center px-8 border-2 border-red-500 ">
//             {/* Text Side with animation */}
//             <motion.div
//               key={currentServiceIndex + '-text'}
//               initial={{ x: -280, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               exit={{ x: -280, opacity: 0 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="flex justify-center"
//             >
//               <div className="w-full max-w-[700px] border-2">
//                 <h4 className="text-[#FFE300] heading-s xl:heading-m mb-4" style={{ fontFamily: '"Right Grotesk Medium", sans-serif' }}>{currentService.title}</h4>
//                 <p className="body-normal leading-relaxed lg:leading-loose">{currentService.description}</p>
//               </div>
//             </motion.div>
//             {/* Image Side with animation */}
//             <motion.div
//               key={currentServiceIndex + '-image'}
//               initial={{ x: 280, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               exit={{ x: 280, opacity: 0 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="flex justify-center"
//             >
//               <div className="relative w-80 h-80 sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[580px] overflow-hidden border-2">
//                 <img src={currentService.image} alt={currentService.title} className="w-full h-full object-contain" />
//               </div>
//             </motion.div>
//           </div>
//           {/* Slider Dots */}
//           <div className="flex justify-center items-center gap-2 mt-6">
//             {servicesData.map((_, idx) => (
//               <span
//                 key={idx}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentServiceIndex ? 'bg-[#FFE300] scale-125' : 'bg-gray-500 opacity-50'}`}
//                 style={{ display: 'inline-block' }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       <SectionDivider keyword="Know Us" />
//     </section>
//   );
// };

// export default Services;

// slider simple

"use client";

import React, { useRef, useEffect, useState } from "react";
import SectionSeparator from "./SectionSeperator";
import SectionDivider from "./SectionSeperator";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const servicesData = [
  {
    title: "Entertainment Superhighway ",
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });
  const [firstAnimationDone, setFirstAnimationDone] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const firstService = servicesData[0];

  // Reset each time section enters viewport
  useEffect(() => {
    if (isInView) {
      setFirstAnimationDone(false);
      setShowSlider(false);
    }
  }, [isInView]);

  // Show slider after first animation ends
  // useEffect(() => {
  //   if (firstAnimationDone) {
  //     const timer = setTimeout(() => setShowSlider(true), 600);
  //     return () => clearTimeout(timer);
  //   }
  // }, [firstAnimationDone]);

  return (
 <section ref={ref} id="services" className="relative py-12 ">
  <SectionSeparator keyword="Why US?" />
  <div
    className="relative z-10 mx-auto flex flex-col items-center justify-between overflow-x-hidden"
    style={{
      background: "linear-gradient(to bottom, #301400 0%, #000000 100%)",
    }}
  >
    <div className="h-[120px]" />
    <div className="w-full min-h-[700px] relative ">
      {/* First service row (always mounted, fades out instead of being removed) */}
      <motion.div
        key="first-service"
        initial={{ opacity: 1 }}
        animate={{ opacity: firstAnimationDone ? 0 : 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        onAnimationComplete={() => {
          if (firstAnimationDone) setShowSlider(true);
          else setFirstAnimationDone(true);
        }}
        className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-4 items-center px-18 "
      >
        {/* Text Side */}
        <motion.div
          initial={{ x: -280, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="flex justify-center"
        >
          <div className="max-w-[800px] ">
            <h4 className="text-[#FFE300] text-4xl font-semibold mb-4" >
              {firstService.title}
            </h4>
            <p className="text-lg">{firstService.description}</p>
          </div>
        </motion.div>

        {/* Image Side */}
        <motion.div
          initial={{ x: 280, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center "
        >
          <img
            src={firstService.image}
            alt={firstService.title}
            className="w-110 h-110 object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Slider with all services */}
      {showSlider && (
        <motion.div
          key="slider"
          initial={{ x: 580, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full px-8 "
        >
          <Swiper
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {servicesData.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="p-6 bg-black/40 rounded-xl text-start flex flex-col items-start justify-start shadow-lg h-full overflow-y-visible ">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-82 h-62 object-contain mb-4"
                  />
                  <h4 className="text-[#FFE300] text-lg font-semibold mb-2  ">
                    {service.title}
                  </h4>
                  <p className="text-gray-300 text-sm ">
                    {service.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      )}
    </div>
  </div>

  <SectionDivider keyword="Know Us" />
</section>

  );
};

export default Services;


// ---------------- animation and modal

// 'use client';

// import React, { useRef, useEffect, useState } from "react";
// import SectionSeparator from "./SectionSeperator";
// import SectionDivider from "./SectionSeperator";
// import { motion } from "framer-motion";

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
//    const [showModal, setShowModal] = React.useState(false);
//   const firstService = servicesData[0];
//   const otherServices = servicesData.slice(1);
//     const modalRef = useRef<HTMLDivElement>(null);
//   const textRef = useRef<HTMLDivElement>(null);
//   const imageRef = useRef<HTMLDivElement>(null);
//   const [textInView, setTextInView] = useState(false);
//   const [imageInView, setImageInView] = useState(false);
//   const [typedText, setTypedText] = useState("");
//   const [typing, setTyping] = useState(false);

// useEffect(() => {
//     const handleScroll = () => {
//       if (textRef.current) {
//         const rect = textRef.current.getBoundingClientRect();
//         setTextInView(rect.top < window.innerHeight && rect.bottom > 0);
//       }
//       if (imageRef.current) {
//         const rect = imageRef.current.getBoundingClientRect();
//         setImageInView(rect.top < window.innerHeight && rect.bottom > 0);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     if (showModal) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [showModal]);

//   useEffect(() => {
//     if (textInView) {
//       setTypedText("");
//       setTyping(true);
//       let i = 0;
//       const passage = firstService.description;
//       const interval = setInterval(() => {
//         setTypedText((prev) => prev + passage[i]);
//         i++;
//         if (i >= passage.length) {
//           clearInterval(interval);
//           setTyping(false);
//         }
//       }, 18); // Adjust speed here
//       return () => clearInterval(interval);
//     }
//   }, [textInView, firstService.description]);

//   return (
//     <section id="services" className="relative py-12" style={{ position: "relative" }}>
//        <SectionSeparator keyword="Why US?" />
//       <div
//         className="relative z-10 mx-auto flex flex-col items-center justify-between overflow-x-hidden "
//         style={{
//           background: "linear-gradient(to bottom, #301400 0%, #000000 100%)",
//         }}
//       >
//         <div className="h-[120px] "></div>
//         {/* First service row only */}
//         <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 md:space-y-8 items-center px-8">
//           {/* Text Side with scroll-based animation */}
//           <motion.div
//             ref={textRef}
//             initial={{ x: -280, opacity: 0 }}
//             animate={textInView ? { x: 0, opacity: 1 } : { x: -280, opacity: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="md:order-1 md:justify-start flex justify-center"
//           >
//             <div className="w-full max-w-[500px]">
//               <h4 className="text-[#FFE300] heading-s xl:heading-m mb-4" style={{ fontFamily: '"Right Grotesk Medium", sans-serif' }}>{firstService.title}</h4>
//               <p className="body-normal leading-relaxed lg:leading-loose">
//                 {typedText}
//                 {!typing && <span className="text-[#FFE300] cursor-pointer underline ml-2" onClick={() => setShowModal(true)}>see more...</span>}
//               </p>
//             </div>
//           </motion.div>
//           {/* Image Side with scroll-based animation */}
//           <motion.div
//             ref={imageRef}
//             initial={{ x: 280, opacity: 0 }}
//             animate={imageInView ? { x: 0, opacity: 1 } : { x: 280, opacity: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="md:order-2 md:justify-end flex justify-center"
//           >
//             <div className="relative w-80 h-80 sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[580px] overflow-hidden">
//               <img src={firstService.image} alt={firstService.title} className="w-full h-full object-contain" />
//             </div>
//           </motion.div>
//         </div>

//         {/* Custom Modal for other services */}
//         {showModal && (
//           <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50 overflow-auto p-4" onClick={() => setShowModal(false)}>
//             <div className="relative w-[90%] max-w-5xl h-[88%] " onClick={e => e.stopPropagation()}  ref={modalRef}>
//                 {/* SVG Background */}
//         <svg
//           viewBox="0 0 100 100"
//           preserveAspectRatio="none"
//           className="absolute inset-0 w-full h-full z-0"
//         >
//           <polygon
//             points="0,9 100,2 100,98 0,90"
//             fill="#040404B2"
//             // stroke="red-500"
//             stroke="#FFE300"
//             strokeWidth="0.8"
//           />
//         </svg>
//               {/* Close Button */}
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="absolute top-5 right-[1%] z-60 w-8 h-8 hover:bg-black/70 text-white hover:text-gray-500 flex items-center justify-center text-lg"
//               >
//                 ✕
//               </button>
//               <div className="absolute inset-0 flex flex-row gap-8 px-6 py-28 sm:py-18 clip-polygon-modal" style={{clipPath: 'polygon(0% 9%, 100% 2%, 100% 98%, 0% 90%)'}}>
//                 {/* Left: Static Image */}
//                 <div className="flex-shrink-0 flex items-center justify-center w-72 h-72 mt-28">
//                   <img src="/images/crew.png" alt="Static Service" className="w-full h-full object-contain rounded-xl" />
//                 </div>
//                 {/* Right: Dynamic Content (scrollable) */}
//                 <div className="flex flex-col flex-1 gap-4 overflow-y-auto thin-scrollbar h-full">
//                   <h2 className="heading-m text-[#FFE300] text-center mb-6" style={{ fontFamily: '"Right Grotesk Medium", sans-serif' }}>More Services</h2>
//                   {otherServices.map((service, index) => (
//                     <div key={index} className="mb-2">
//                       <h4 className="text-[#FFE300] heading-s xl:heading-s mb-2" style={{ fontFamily: '"Right Grotesk Medium", sans-serif' }}>{service.title}</h4>
//                       <p className="body-normal ">{service.description}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//      <SectionDivider keyword="Know Us"/>
//     </section>
//   );
// };

// export default Services;

// ----------- simple straight page with animation

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


