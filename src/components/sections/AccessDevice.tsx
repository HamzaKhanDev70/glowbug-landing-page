
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

  return (
 <section className="relative">
  
    <div
      className="w-full bg-black bg-no-repeat bg-center bg-contain aspect-[1920/1850] flex items-center relative -top-3"
      style={{
        backgroundImage: "url('/images/rectangle-20.png')",
      }}
    >
      <div className=" h-auto  w-full grid grid-cols-1 md:grid-cols-2  items-center">
       <div>
  <a
    href="https://dspk-sandbox.airfi.io/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/images/Group 35.png"
      alt="Visual"
      className="w-full mx-auto cursor-pointer"
    />
  </a>
</div>


        <div
          className="relative w-[90%] flex items-center justify-center px-4  py-8 sm:py-12 lg:py-0 "
          style={{ overflow: "visible" }}
        >
          <div
            className="w-full text-center md:text-left"
            style={{ overflow: "visible" }}
          >
            <div className="w-full text-center md:text-start">
              <h2
                className="uppercase grotesk-light-narrow text-[72px] text-wrap "
                style={{ fontFamily: '"Right Grotesk Narrow", sans-serif' }}
              >
                <span className="">Access on your own device:</span>
              </h2>
              <h2 className="uppercase font-inter heading-l sm:heading-s md:heading-m lg:heading-xl">
                <span className="block text-[#00A3FF] font-bold">
                  ANYWHERE. ANY TIME.
                </span>
              </h2>
            </div>

            <p className="text-white body-normal font-normal mb-4 sm:mb-8 break-words whitespace-normal">
              Here the experience for DreamStream should be embedded that by
              clicking the “Tablet” the user shall be redirected to the DSPK
              sandbox experience. Insertion of Motion Reel created through
              different screens and use cases combining web portal and web app.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 ">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex-1 flex flex-col items-start  text-left min-w-0"
                >
                  <div className="mb-2 sm:mb-4 ">{feature.icon}</div>
                  <h3 className="heading-s sm:heading-xs md:heading-s  mb-1 sm:mb-2 leading-tight" style={{ fontFamily: '"Right Grotesk Medium", sans-serif' }}>
                    {feature.title}
                  </h3>
                  <p className="text-[#FFFFFF] body-normal break-words whitespace-normal text-left">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>

      {/* <div className="pl-8">
          <MobileAppShowcase />
        </div> */}

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
        <div className="px-8 relative lg:-top-40 ">
          <MobileAppShowcase />
        </div>
        <div className="flex items-center justify-center  ">
          <HowItWorks />
        </div>
      </div>
 </section>
  );
}


