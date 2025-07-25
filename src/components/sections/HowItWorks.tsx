import { FaArrowRight } from "react-icons/fa";
import PlayVideo from "./PlayVideo";
import { url } from "inspector";

const steps = [
  {
    number: "01",
    title: "Step 1: Scan the DreamStream QR Code on your ticket",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus felis, hendrerit et viverra ac, mattis luctus nisl. Nulla eu bibendum enim. Proin lorem dapibus turpis ornare suscipit.",
  },
  {
    number: "02",
    title: "Step 2: Login & Connect to DreamStream",
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

export default function HowItWorks() {
  return (
    <section className="relative w-full lg:my-14 border-4 border-amber-400 " id="how-it-works">
      <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-8">
        <div
          className="absolute inset-0 z-0"
        />
        
        <div className="relative z-10 mt-12 sm:pt-30 lg:mt-18">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 md:mb-16 border-4 border-amber-400 ">
            <div className="whitespace-nowrap">
              <h2 className="grotesk-tight text-[52px] md:text-[82px] text-[#FFD700] "  style={{ fontFamily: '"Right Grotesk Tight", sans-serif' }}>
                HOW IT WORKS IN
              </h2>
              <div className="grotesk-light-narrow text-[26px] md:text-[43px]"  style={{ fontFamily: '"Right Grotesk Light", sans-serif' }}>
                3 SIMPLE STEPS
              </div>
            </div>
            <div className="max-w-sm heading-s">
              DreamStream is the only engagement platform that's ubiquitously
              available without download or the internet.
            </div>
          </div>

          <div className="flex flex-col gap-8 md:gap-10 pb-12 md:pb-16">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative flex border border-[#FFD700] rounded-[16px] p-6 md:p-8 gap-6 md:gap-35 bg-transparent"
              >
                <div className="text-[#FFD700] heading-l sm:heading-s md:heading-l lg:heading-xl flex-shrink-0 leading-none">
                  {step.number}
                </div>
               <div className=" flex flex-col md:flex-row items-center text-center md:text-left md:items-stretch">
                 <div className="flex-1 flex flex-col gap-2">
                  <div className=" body-normal-ques tracking-[-0.01em] mb-1">
                    {step.title}
                  </div>
                  <div className="body-normal-d">{step.description}</div>
                </div>
                <div className="absolute top-4 right-4 transform -rotate-45">
                  <FaArrowRight className="text-[#FFD700] text-2xl md:text-3xl" />
                </div>
               </div>
              </div>
            ))}
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
