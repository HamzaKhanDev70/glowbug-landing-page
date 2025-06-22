import { FaArrowRight } from 'react-icons/fa';
import PlayVideo from './PlayVideo';

const steps = [
  {
    number: '01',
    title: 'Step 1: Scan the DreamStream QR Code on your ticket',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus felis, hendrerit et viverra ac, mattis luctus nisl. Nulla eu bibendum enim. Proin lorem dapibus turpis ornare suscipit.',
  },
  {
    number: '02',
    title: 'Step 2: Login & Connect to DreamStream',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus felis, hendrerit et viverra ac, mattis luctus nisl. Nulla eu bibendum enim. Proin lorem dapibus turpis ornare suscipit.',
  },
  {
    number: '03',
    title: 'Step 3: Relax & Enjoy DreamStream',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus felis, hendrerit et viverra ac, mattis luctus nisl. Nulla eu bibendum enim. Proin lorem dapibus turpis ornare suscipit.',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full" id="how-it-works">
      <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-8">
x        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(to bottom, #002127 0%, #000D11 100%)',
            clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 120px), 80% calc(100% - 60px), 0 100%)',
            paddingBottom: '200px'
          }}
        />
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-8 pt-40">
            <div>
              <h2 className="text-4xl md:text-[56px] font-grotesk font-bold text-[#FFD700] leading-tight">
                HOW IT WORKS IN
              </h2>
              <div className="text-2xl md:text-[40px] font-grotesk text-white tracking-wide">
                3 SIMPLE STEPS
              </div>
            </div>
            <div className="max-w-xl text-white text-lg md:text-2xl font-inter">
              DreamStream is the only engagement platform that's ubiquitously
              available
              <br />
              without download or the internet.
            </div>
          </div>

          <div className="flex flex-col gap-8 md:gap-10 pb-12 md:pb-16">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative flex flex-col md:flex-row items-center text-center md:text-left md:items-stretch border border-[#FFD700] rounded-[16px] p-6 md:p-8 gap-6 md:gap-10 bg-transparent"
              >
                <div className="text-[#FFD700] text-5xl md:text-[56px] font-grotesk font-bold flex-shrink-0 leading-none">
                  {step.number}
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <div className="text-white text-xl md:text-2xl font-bold font-grotesk mb-1">
                    {step.title}
                  </div>
                  <div className="text-white/80 text-base md:text-lg font-inter">
                    {step.description}
                  </div>
                </div>
                <div className="absolute top-4 right-4 transform -rotate-45">
                  <FaArrowRight className="text-[#FFD700] text-2xl md:text-3xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="relative w-full mt-[-60px] z-20 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <PlayVideo />
        </div>
      </div>
    </section>
  );
}