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
        className="relative z-10 w-full  lg:h-[1100px] "
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
          {/* Left: Image */}
          <div className="relative w-[100%] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[699px] lg:w-[61%] lg:mt-[4%] xl:mt-[5%]    flex items-center justify-center lg:bg-black ">
            <div className="relative w-full md:w-[60%] lg:w-[100%] xl:w-[80%] h-[100%] overflow-hidden ">
              <Image
                src="/images/flash.png"
                alt="Entertainment Interface"
                fill
                className="object-fit lg:object-cover object-right"
                priority
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div
            className="relative w-full lg:w-[60%] flex items-center justify-center px-4  py-8 sm:py-12 lg:py-0"
            style={{ overflow: "visible" }}
          >
            <div
              className="w-full text-center md:text-left"
              style={{ overflow: "visible" }}
            >
              <div className="w-full text-center md:text-start">
                <h2 className="uppercase heading-m lg:heading-l xl:heading-xl font-normal ">
                  <span
                    className="whitespace-normal md:whitespace-nowrap"
                    // style={{ textWrap: "balance" }}  
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
                Dream Stream is the only engagement platform that's ubiquitously
                available without download or the internet, for travellers
                across the World who want freedom, choice, and control of the.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 ">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex-1 flex flex-col items-center  text-left min-w-0"
                  >
                    <div className="mb-2 sm:mb-4">{feature.icon}</div>
                    <h3 className="heading-s sm:heading-xs md:heading-s  mb-1 sm:mb-2 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 body-normal break-words whitespace-normal text-center">
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
