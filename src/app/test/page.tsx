import ComingSoon from "@/components/sections/ComingSoon";
import Image from "next/image"; // ✅ use next/image, not lucide-react Image

export default function HowItWorksPage() {
  return (
//     <main className="relative pt-25 p-10">
//       {/* <ComingSoon /> */}

// <>
//   {/* SVG filter definition */}
//   <svg
//     style={{ visibility: 'hidden', position: 'absolute' }}
//     width="0"
//     height="0"
//     xmlns="http://www.w3.org/2000/svg"
//     version="1.1"
//   >
//     <defs>
//       <filter id="goo">
//         <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
//         <feColorMatrix
//           in="blur"
//           mode="matrix"
//           values="1 0 0 0 0  
//                   0 1 0 0 0  
//                   0 0 1 0 0  
//                   0 0 0 19 -9"
//           result="goo"
//         />
//         <feComposite in="SourceGraphic" in2="goo" operator="atop" />
//       </filter>
//     </defs>
//   </svg>

//   {/* Filtered section */}
//   <div className="overflow-hidden rounded-2xl" style={{ filter: 'url(#goo)' }}>
//     <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] [clip-path:polygon(0_21%,100%_0,100%_100%,0_79%)]">
//       <img
//         src="/images/mbl.png"
//         alt="Clipped"
//         className="absolute inset-0 w-full h-full object-fit"
//       />
//     </div>
//   </div>
// </>



//     </main>

<div className="relative w-full overflow-visible  flex flex-col items-center justify-center p-0 m-0">
  {/* First Div - Coming Soon */}
  <div
    className="overflow-hidden w-full h-[900px]"
    style={{
      // clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
    }}
  >
    <div
      className="w-full h-[900px] bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('/images/coming-soon.png')",
      }}
    ></div>
  </div>

  {/* Second Div - Vector 1 */}
  <div
    className="overflow-hidden w-full -mt-[1px] h-[900px]" 
    style={{
      // clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 90%)", 
    }}
  >
    <div
      className="w-full h-[900px] bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('/images/vector-1.png')",
      }}
    ></div>
  </div>
</div>

  );
}
