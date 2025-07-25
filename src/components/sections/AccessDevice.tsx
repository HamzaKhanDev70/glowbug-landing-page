// import Image from "next/image";
// import MobileAppShowcase from "./FlashMobile";
// import HowItWorks from "./HowItWorks";

// export default function AccessDevice() {
//   const features = [
//     {
//       icon: (
//         <Image
//           src="/images/icon1.png"
//           alt="Bring your own device"
//           width={32}
//           height={32}
//         />
//       ),
//       title: "Bring your own device",
//       description:
//         "For travellers across the World who want freedom, choice, and control of their entertainment.",
//     },
//     {
//       icon: (
//         <Image
//           src="/images/icon2.png"
//           alt="No wifi or download"
//           width={32}
//           height={32}
//         />
//       ),
//       title: "No wifi or download",
//       description:
//         "For travellers across the World who want freedom, choice, and control of their entertainment.",
//     },
//     {
//       icon: (
//         <Image
//           src="/images/icon3.png"
//           alt="Free access during travel"
//           width={32}
//           height={32}
//         />
//       ),
//       title: "Free access during travel",
//       description:
//         "For travellers across the World who want freedom, choice, and control of their entertainment.",
//     },
//   ];

//   return (
//     <section className="relative w-full min-h-screen bg-black lg:-mt-13 z-2">
//       <div className="relative w-full max-w-[1751px] mx-auto  overflow-x-hidden">
//         {/* Background shape (behind everything) */}
//         <div
//           className="absolute inset-0 z-0 rounded-[21px] h-[60%]" 
//           style={{
//             background: "linear-gradient(90deg, #002127 0%, #000D11 100%)",
//             clipPath: "polygon(0 18%, 100% 0, 100% 100%, 0 75%)",
//           }}
//         ></div>

//         {/* Foreground content (not clipped, not restricted) */}
//         <div className="relative z-10 flex flex-col lg:flex-row items-center py-20">
//           {/* Left: Image (can overflow height freely) */}
//           <div className="w-full  h-auto  relative">
//             <img
//               src="/images/Group 35.png"
//               alt="Taller Image"
//               className="w-full max-w-md object-contain object-right"
//             />
//           </div>

//           {/* Right: Text */}
//           <div className="w-full lg:w-1/2 text-white flex flex-col justify-center p-4">
//             <div
//               className="w-full text-left"
//               style={{ overflow: "visible" }}
//             >
//               <div className="w-full text-center md:text-start">
//                 <h2 className="uppercase heading-m lg:heading-l xl:heading-xl font-normal ">
//                   <span
//                     className="whitespace-normal md:whitespace-nowrap"
//                     // style={{ textWrap: "balance" }}
//                   >
//                     Access on your own device:
//                   </span>
//                 </h2>
//                 <h2 className="uppercase heading-l sm:heading-s md:heading-m lg:heading-xl">
//                   <span className="block text-[#00A3FF] font-bold">
//                     ANYWHERE. ANY TIME.
//                   </span>
//                 </h2>
//               </div>

//               <p className="text-white body-normal lg:heading-xs font-normal mb-4 sm:mb-8 break-words whitespace-normal">
//                 Here the experience for DreamStream should be embedded that by
//                 clicking the “Tablet” the user shall be redirected to the DSPK
//                 sandbox experience. Insertion of Motion Reel created through
//                 different screens and use cases combining web portal and web
//                 app.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 ">
//                 {features.map((feature, index) => (
//                   <div
//                     key={index}
//                     className="flex-1 flex flex-col items-center  text-left min-w-0"
//                   >
//                     <div className="mb-2 sm:mb-4">{feature.icon}</div>
//                     <h3 className="heading-s sm:heading-xs md:heading-s  mb-1 sm:mb-2 leading-tight">
//                       {feature.title}
//                     </h3>
//                     <p className="text-white/60 body-normal break-words whitespace-normal text-center">
//                       {feature.description}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="pl-8">
//           <MobileAppShowcase />
//         </div>
//       </div>

//       <div
//         className="relative z-1 w-full -mt-4 "
//         style={{
//           backgroundImage: "url('/images/rectangle-20.png')",
//           backgroundSize: "cover",
//           backgroundPosition: "top right",
//           backgroundRepeat: "no-repeat",
//           // right: "13rem",
//           left: "2rem",
//           width: "95%",
//           height: "100%",
//         }}
//       >
//         <div className="flex items-center justify-center lg:pt-50 ">
//           <HowItWorks />
//         </div>
//       </div>
//     </section>
//   );
// }



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
          width={32}
          height={32}
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
          width={32}
          height={32}
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
          width={32}
          height={32}
        />
      ),
      title: "Free access during travel",
      description:
        "For travellers across the World who want freedom, choice, and control of their entertainment.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-black lg:-mt-13 z-2">
      <div
        className="relative z-10 w-full  lg:h-[1250px] "
        style={{
          backgroundImage: "url('/images/rectangle-20.png')",
          backgroundSize: "contain",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
          width: "97%",
          // height: "100%",
          // height: "1100px",
          // width: "1474px",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-center pt-10 sm:pt-16 md:pt-24 lg:pt-[96px]   ">
            <div className="relative w-full  h-[300px] sm:h-[400px] md:h-[500px] lg:h-[779px]  lg:mt-[5%] xl:mt-[8%]  overflow-visible ">
              <Image
                src="/images/Group 35.png"
                alt="Entertainment Interface"
                fill
                className=" object-cover object-top "
                priority
              />
            </div>
          <div
            className="relative w-full lg:w-[55%] flex items-center justify-center px-4  py-8 sm:py-12 lg:py-0"
            style={{ overflow: "visible" }}
          >
            <div
              className="w-full text-center md:text-left"
              style={{ overflow: "visible" }}
            >
              <div className="w-full text-center md:text-start">
                <h2 className="uppercase heading-m lg:heading-l whitespace-normal md:whitespace-nowrap font-normal ">
                  <span
                    className="whitespace-normal md:whitespace-nowrap"
                  >
                    Access on your own device:
                  </span>
                </h2>
                <h2 className="uppercase heading-l sm:heading-s md:heading-m lg:heading-xl">
                  <span className="block text-[#00A3FF] font-bold">
                    ANYWHERE. ANY TIME.
                  </span>
                </h2>
              </div>

              <p className="text-white body-normal lg:heading-xs font-normal mb-4 sm:mb-8 break-words whitespace-normal">
                Here the experience for DreamStream should be embedded that by
                clicking the “Tablet” the user shall be redirected to the DSPK
                sandbox experience. Insertion of Motion Reel created through
                different screens and use cases combining web portal and web
                app.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 ">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex-1 flex flex-col items-center  text-left min-w-0"
                  >
                    <div className="mb-2 sm:mb-4">{feature.icon}</div>
                    <h3 className="heading-s sm:heading-xs md:heading-s font-bold  mb-1 sm:mb-2 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-[#FFFFFF] body-normal break-words whitespace-normal text-center">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pl-8">
          <MobileAppShowcase />
        </div>
      </div>

      <div
        className="relative z-1 w-full -mt-4 "
        style={{
          backgroundImage: "url('/images/rectangle-20.png')",
          backgroundSize: "cover",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
          // right: "13rem",
          left: "2rem",
          width: "95%",
          height: "100%",
        }}
      >
        <div className="flex items-center justify-center lg:pt-50 ">
          <HowItWorks />
        </div>
      </div>
    </section>
  );
}