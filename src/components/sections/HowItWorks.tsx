import { FaArrowRight } from "react-icons/fa";
import PlayVideo from "./PlayVideo";
import { url } from "inspector";

const WebSteps = [
  {
    number: "01",
    title: `Step 1: Once onboard select the network “DreamStream” from your device’s WIFI settings menu.`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus felis, hendrerit et viverra ac, mattis luctus nisl. Nulla eu bibendum enim. Proin lorem dapibus turpis ornare suscipit.",
  },
  {
    number: "02",
    title: `Step 2: If not redirected automatically, type “dreamstream.aero” in your Chrome or Safari web browser to get started.`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus felis, hendrerit et viverra ac, mattis luctus nisl. Nulla eu bibendum enim. Proin lorem dapibus turpis ornare suscipit.",
  },
  {
    number: "03",
    title: "Step 3: Relax & Enjoy DreamStream",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus felis, hendrerit et viverra ac, mattis luctus nisl. Nulla eu bibendum enim. Proin lorem dapibus turpis ornare suscipit.",
  },
];
const MblSteps = [
  {
    number: "01",
    title: `Step 1: Visit Web URL.`,
    // title: `Step 1: Once onboard select the network “DreamStream” from your device’s WIFI settings menu.`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus felis, hendrerit et viverra ac, mattis luctus nisl. Nulla eu bibendum enim. Proin lorem dapibus turpis ornare suscipit.",
  },
  {
    number: "02",
    title: `Step 2: Download App.`,
    // title: `Step 2: If not redirected automatically, type “dreamstream.aero” in your Chrome or Safari web browser to get started.`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus felis, hendrerit et viverra ac, mattis luctus nisl. Nulla eu bibendum enim. Proin lorem dapibus turpis ornare suscipit.",
  },
  {
    number: "03",
    title: "Step 3: Relax & Enjoy DreamStream",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus felis, hendrerit et viverra ac, mattis luctus nisl. Nulla eu bibendum enim. Proin lorem dapibus turpis ornare suscipit.",
  },
  {
    number: "04",
    title: "Step 4: Relax & Enjoy DreamStream",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus felis, hendrerit et viverra ac, mattis luctus nisl. Nulla eu bibendum enim. Proin lorem dapibus turpis ornare suscipit.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full ">
      <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="absolute inset-0 z-0" />

        <div className="relative z-10 mt-18 lg:mt-18">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 md:mb-16  ">
            <div className="whitespace-nowrap">
              <h2
                className=" text-[4rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] text-[#FFE300] leading-[1.1]"
                style={{ fontFamily: '"Right Grotesk Tight", sans-serif' }}
              >
                HOW IT WORKS IN
              </h2>
              <div
                className=" text-[2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1]"
                style={{ fontFamily: '"Right Grotesk Light", sans-serif' }}
              >
                3 SIMPLE STEPS
              </div>
            </div>
            <div className="max-w-sm heading-s">
              DreamStream is the only engagement platform that's ubiquitously
              available without download or the internet.
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 ">
            <div className="left">
              <div
                className=" pb-4 text-[2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1]"
                style={{ fontFamily: '"Right Grotesk Light", sans-serif' }}
              >
                Web Experience
              </div>
              <div className="flex flex-col gap-8  pb-12 md:pb-16">
                {WebSteps.map((step) => (
                  <div
                    key={step.number}
                    className="relative flex flex-col sm:flex-row border border-[#FFE300] rounded-[16px] p-6 md:p-8 gap-4  bg-transparent"
                  >
                    <div
                      className="text-[#FFE300] heading-l sm:heading-s md:heading-l lg:heading-xl flex-shrink-0 leading-none"
                      style={{
                        fontFamily: '"Right Grotesk Narrow", sans-serif',
                      }}
                    >
                      {step.number}
                    </div>
                    <div className=" flex flex-col md:flex-row items-left text-center md:text-start md:items-stretch">
                      <div className="flex-1 flex flex-col gap-2 text-start p-2">
                        <div className=" body-normal-ques text-[30px]  tracking-[-0.01em] mb-1">
                          {step.title}
                        </div>
                        {/* <div className="body-normal-d">{step.description}</div> */}
                      </div>
                      <div className="absolute top-4 right-4 transform -rotate-45">
                        <FaArrowRight className="text-[#FFE300] text-2xl md:text-3xl" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="right">
              <div
                className="pb-4 text-[2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1]"
                style={{ fontFamily: '"Right Grotesk Light", sans-serif' }}
              >
                Mobile Experience
              </div>
              <div className="flex flex-col gap-8  pb-12 md:pb-16">
                {MblSteps.map((step) => (
                  <div
                    key={step.number}
                    className="relative flex flex-col sm:flex-row border border-[#FFE300] rounded-[16px] p-6 md:p-8 gap-4  bg-transparent"
                  >
                    <div
                      className="text-[#FFE300] heading-l sm:heading-s md:heading-l lg:heading-xl flex-shrink-0 leading-none"
                      style={{
                        fontFamily: '"Right Grotesk Narrow", sans-serif',
                      }}
                    >
                      {step.number}
                    </div>
                    <div className=" flex flex-col md:flex-row items-left text-center md:text-start md:items-stretch">
                      <div className="flex-1 flex flex-col gap-2 text-start p-2">
                        <div className=" body-normal-ques text-[30px] tracking-[-0.01em] mb-1">
                          {step.title}
                        </div>
                        {/* <div className="body-normal-d">{step.description}</div> */}
                      </div>
                      <div className="absolute top-4 right-4 transform -rotate-45">
                        <FaArrowRight className="text-[#FFE300] text-2xl md:text-3xl" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full px-4 md:px-8 bg-transparent pt-5 ">
        <div className="max-w-[1600px] mx-auto">
          <PlayVideo />
        </div>
      </div>
    </section>
  );
}
