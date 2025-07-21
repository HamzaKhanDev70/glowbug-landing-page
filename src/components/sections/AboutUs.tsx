import React from "react";
import Image from "next/image";
import TeamSection from "./TeamSection";
import CompanyPartner from "./Company-Partner";
import Link from "next/link";
const AboutUs = () => {
  return (
    <section className="w-full px-2">
      <div className="flex justify-center ">
        <div className="relative w-[95vw] aspect-[21/9]">
          <Image
            src="/images/about-us.png"
            alt="About Us"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 90vw, 90vw"
          />

          <div className="absolute -top-[1%] left-[4%] w-[60vw] max-w-[1600px] aspect-[9/6] z-30">
            <Image
              src="/images/rectangle-38.png"
              alt="Overlay"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 80vw, 40vw"
            />
            {/* Text Overlay on second image */}
            <div className="absolute top-1/2 -left-1  md:left-4  -translate-y-1/2 z-40 text-white max-w-md px-4">
              <h3 className="text-[#FFD300] text-2xl font-bold sm:text-4xl md:text-6xl mb-0 sm:mb-6 tracking-wider">
                <span className="text-white">ABOUT</span>
                <span className="text-[#FFD300]"> US</span>
              </h3>
              <div className="flex flex-end md:flex-start">
                <p className="text-white mb-4 text-xs sm:text-base md:text-lg lg:text-2xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  maxime aperiam ducimus blanditiis.
                </p>
              </div>
              <button className="text-s md:text-2xl w-auto bg-blue-500 px-2 py-1 sm:px-6 sm:py-2 rounded-full hover:bg-blue-600 transition-colors text-sm sm:text-base hidden sm:block">
                <Link href="/experience" aria-label="Experience">
                  EXPERIENCE
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="text-center  max-w-5xl mx-auto p-[3%]">
        <h1 className="text-[#FEE300] heading-s md:heading-m lg:heading-xl mb-6">
          OUR STORY
        </h1>
        <p className="body-normal sm:text-2xl text-gray-300 leading-relaxed">
        Our Story

It started with silence.

Not the peaceful kind but, the kind you feel mid-journey, when the Wi-Fi doesn't connect, your screen goes dark, and you're left watching the world pass by without being part of it. We saw that moment everywhere; families on buses with restless kids, business travellers on planes staring at blank screens, commuters on trains scrolling through offline photo galleries just to pass the ride. 

In a world bursting with content, the journey remained disconnected—not just from the internet, but from experience. And we thought: What if that pause became a moment of presence, of possibility? So we asked:

What if the journey itself became the destination?

That question became a mission. Not to build just another streaming app, but to design a platform that follows the passenger, not the infrastructure. A platform that’s inclusive and works without internet. One that respects the limitations of fleets, the rhythms of operators, and the attention of travellers.

It didn’t come easy. It meant solving for inconsistent power supplies, syncing content without live connectivity, building interfaces so simple they need no explanation, and forming partnerships with operators across road, rail, sea, and air.

But we kept going because, we believed in a different kind of magic. Not the kind that happens on a screen, but the kind that happens when technology fades quietly into the background, and the journey becomes yours again.

Today, DreamStream runs on aircraft at 35,000 feet, on buses crossing borders, on ferries between islands, and on trains rolling through the heart of cities. It rides with you; not to impress, but to belong.

That’s why people resonate with DreamStream. Not because it was the easy thing to build but, because it was the right thing to build.

Built with perseverance.

Shaped by teamwork.

Driven by the belief that travel time doesn’t have to be lost time.

DreamStream is more than a product. It’s a promise: Wherever you go, your world moves with you.

Magic in motion.

Purpose

To enable travelers across the world to find moments of magic in motion
Mission

DreamStream reimagines the way in which travelers are entertained and engaged through a powerful platform that provides captivating content on any device on any mode of travel.
Vision

A world in which travelers are free to engage, delight and dream regardless of context or connectivity.
Core Values – The 6E’s
Envision	Empower	Explore
Engage	Exhilarate 	Ethical

        </p>
      </div> */}
      <div className="text-center max-w-5xl mx-auto px-4 py-16">
  <h1 className="text-[#FEE300] text-3xl md:text-4xl lg:text-5xl font-semibold mb-10 tracking-tight">
    OUR STORY
  </h1>

  <div className="text-left space-y-8 text-gray-300 text-base sm:text-lg leading-relaxed">
    <p>
      <strong className="text-white">Our Story</strong><br />
      It started with silence. Not the peaceful kind but the kind you feel mid-journey, when the Wi-Fi doesn't connect, your screen goes dark, and you're left watching the world pass by without being part of it.
    </p>

    <p>
      We saw that moment everywhere; families on buses with restless kids, business travellers on planes staring at blank screens, commuters on trains scrolling through offline photo galleries just to pass the ride.
    </p>

    <p>
      In a world bursting with content, the journey remained disconnected—not just from the internet, but from experience. And we thought:
    </p>

    <blockquote className="italic text-white border-l-4 border-[#FEE300] pl-4">
      What if the journey itself became the destination?
    </blockquote>

    <p>
      That question became a mission. Not to build just another streaming app, but to design a platform that follows the passenger, not the infrastructure. A platform that’s inclusive and works without internet—one that respects the limitations of fleets, the rhythms of operators, and the attention of travellers.
    </p>

    <p>
      It didn’t come easy. It meant solving for inconsistent power supplies, syncing content without live connectivity, building interfaces so simple they need no explanation, and forming partnerships with operators across road, rail, sea, and air.
    </p>

    <p>
      But we kept going because we believed in a different kind of magic—not the kind that happens on a screen, but the kind that happens when technology fades quietly into the background, and the journey becomes yours again.
    </p>

    <p>
      Today, DreamStream runs on aircraft at 35,000 feet, on buses crossing borders, on ferries between islands, and on trains rolling through the heart of cities. It rides with you; not to impress, but to belong.
    </p>

    <p>
      That’s why people resonate with DreamStream. Not because it was the easy thing to build but because it was the right thing to build.
    </p>

    <ul className="list-disc list-inside text-white space-y-1">
      <li>Built with perseverance.</li>
      <li>Shaped by teamwork.</li>
      <li>Driven by the belief that travel time doesn’t have to be lost time.</li>
    </ul>

    <p className="font-semibold text-white">
      DreamStream is more than a product. It’s a promise: Wherever you go, your world moves with you.
    </p>

    <p className="italic text-[#FEE300] text-xl">Magic in motion.</p>

    <div className="pt-8 space-y-4">
      <div>
        <h3 className="text-white text-xl font-semibold">Purpose</h3>
        <p>To enable travelers across the world to find moments of magic in motion</p>
      </div>
      <div>
        <h3 className="text-white text-xl font-semibold">Mission</h3>
        <p>DreamStream reimagines the way in which travelers are entertained and engaged through a powerful platform that provides captivating content on any device on any mode of travel.</p>
      </div>
      <div>
        <h3 className="text-white text-xl font-semibold">Vision</h3>
        <p>A world in which travelers are free to engage, delight and dream regardless of context or connectivity.</p>
      </div>
      <div>
        <h3 className="text-white text-xl font-semibold">Core Values – The 6E’s</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[#FEE300] font-medium pt-2">
          <span>Envision</span>
          <span>Empower</span>
          <span>Explore</span>
          <span>Engage</span>
          <span>Exhilarate</span>
          <span>Ethical</span>
        </div>
      </div>
    </div>
  </div>
</div>

      <TeamSection />
      <CompanyPartner heading="OUR CARRIER PARTNERS " />
    </section>
  );
};

export default AboutUs;
