import React from "react";
import Image from "next/image";
import TeamSection from "./TeamSection";
import CompanyPartner from "./Company-Partner";
import ClippedSection from "./Clipped-Section";
import SectionDivider from './SectionSeperator';
const AboutUs = () => {
  return (
    <section className="w-full ">
      <ClippedSection
        backgroundImage="/images/about-us.png"
        headingWhite="About"
        headingYellow="us"
        paragraph="We are on a journey to empower creators and delight streamers around the globe."
      />
      <div className="text-center max-w-5xl mx-auto px-4 pt-16">
        <h1 className="text-[#FEE300] heading-m mb-10 tracking-tight">
          OUR STORY
        </h1>

        <div className="text-left space-y-8 text-gray-300 body-normal leading-relaxed">
          <p>
            <strong className="text-white">Our Story</strong>
            <br />
            <span className="italic text-white border-l-4 border-[#FEE300] pl-4">
              It started with silence.
            </span>{" "}
            Not the peaceful kind but the kind you feel mid-journey, when the
            Wi-Fi doesn't connect, your screen goes dark, and you're left
            watching the world pass by without being part of it.
          </p>

          <p>
            We saw that moment everywhere; families on buses with restless kids,
            business travellers on planes staring at blank screens, commuters on
            trains scrolling through offline photo galleries just to pass the
            ride.
          </p>

          <p>
            In a world bursting with content, the journey remained
            disconnected—not just from the internet, but from experience. And we
            thought:
          </p>

          <blockquote className="italic text-white border-l-4 border-[#FEE300] pl-4">
            What if the journey itself became the destination?
          </blockquote>

          <p>
            That question became a mission. Not to build just another streaming
            app, but to design a platform that follows the passenger, not the
            infrastructure. A platform that’s inclusive and works without
            internet—one that respects the limitations of fleets, the rhythms of
            operators, and the attention of travellers.
          </p>

          <p>
            It didn’t come easy. It meant solving for inconsistent power
            supplies, syncing content without live connectivity, building
            interfaces so simple they need no explanation, and forming
            partnerships with operators across road, rail, sea, and air.
          </p>

          <p>
            But we kept going because we believed in a different kind of
            magic—not the kind that happens on a screen, but the kind that
            happens when technology fades quietly into the background, and the
            journey becomes yours again.
          </p>

          <p>
            Today, DreamStream runs on aircraft at 35,000 feet, on buses
            crossing borders, on ferries between islands, and on trains rolling
            through the heart of cities. It rides with you; not to impress, but
            to belong.
          </p>

          <p>
            That’s why people resonate with DreamStream. Not because it was the
            easy thing to build but because it was the right thing to build.
          </p>

          <ul className="list-disc list-inside text-white space-y-1">
            <li>Built with perseverance.</li>
            <li>Shaped by teamwork.</li>
            <li>
              Driven by the belief that travel time doesn’t have to be lost
              time.
            </li>
          </ul>

          <blockquote className="italic text-white border-l-4 border-[#FEE300] pl-4">
            DreamStream is more than a product. It’s a promise: Wherever you go,
            your world moves with you.
          </blockquote>
          <blockquote className="italic text-white border-l-4 border-[#FEE300] pl-4">
            <p className="italic text-[#FEE300] text-xl">Magic in motion.</p>
          </blockquote>

          <div className="pt-8 space-y-4">
            <div>
              <h3 className="text-white body-normal font-semibold">Purpose</h3>
              <p>
                To enable travelers across the world to find moments of magic in
                motion
              </p>
            </div>
            <div>
              <h3 className="text-white body-normal font-semibold">Mission</h3>
              <p>
                DreamStream reimagines the way in which travelers are
                entertained and engaged through a powerful platform that
                provides captivating content on any device on any mode of
                travel.
              </p>
            </div>
            <div>
              <h3 className="text-white body-normal font-semibold">Vision</h3>
              <p>
                A world in which travelers are free to engage, delight and dream
                regardless of context or connectivity.
              </p>
            </div>
            <div>
              <h3 className="text-white body-normal font-semibold">
                Core Values – The 6E’s
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[#FEE300] body-normal pt-2">
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
      {/* <CompanyPartner heading="OUR CARRIER PARTNERS " /> */}
      {/* <SectionDivider/> */}
    </section>
  );
};

export default AboutUs;
