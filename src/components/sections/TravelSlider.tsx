"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState, useEffect } from "react";
import InfoModal from "./InfoModal";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionSeparator from "./SectionSeperator";
import SectionDivider from "./SectionSeperator";

interface SlideData {
  title: string;
  image: string;
  description: string;
  briefd?: string;
  promo?: string;
}

export default function TravelSlider() {
  const slides: SlideData[] = [
    {
      title: "Passengers",
      image: "/images/slide1.png",
      promo: "A moment of magic.",
      briefd:
        "You’re relaxing in the quiet lounge, flight still an hour away, but airport mobile internet is patchy and public Wi-Fi is scrappy. Then you spot a small sign: ",
      description: `“Connect to DreamStream.” One tap or a quick scan of the QR code on your boarding pass, brings the offline network to life. A login screen appears; you choose a simple manual sign-in or let the QR code fill your details. Instantly, a full library of films, playlists, podcasts, and destination guides opens on your device. When boarding is called, you slip your phone into your pocket, stroll down the jet bridge, take your seat, and reconnect to the same DreamStream network aboard. No buffering, no searching—your movie continues exactly where you paused, a live map traces the route, and the soundtrack you queued hums softly through your headphones. From lounge to landing, DreamStream feels like magic: one invisible thread of entertainment that never asks for internet and never breaks the spell.
`,
    },
    {
      title: "Operators",
      image: "/images/slide2.png",
      promo: "Customer Satisfaction with Zero Drag",
      briefd:"DreamStream unlocks a new frontier in onboard experience, one where passengers are delighted, and operators don’t lift a finger. With a lightweight, plug-and-play appliance.",
      description: `With a lightweight, plug-and-play appliance that fits seamlessly into aircraft, trains, coaches, ferries, and cruise fleets, DreamStream installs quickly, no capex, no structural changes, no content licensing burden. It switches on as part of your existing flow, offering instant access to entertainment and curated services with minimal setup and zero disruption.Behind the scenes, the platform quietly generates value, sharing in high-margin revenue streams from advertising, premium content, and ancillary services like F&B or mobility partnerships, all without adding crew or straining bandwidth.
And as passengers explore, DreamStream captures rich behavioural insights, helping you refine service, drive smarter cross-sells, and build a fleet-wide experience that’s consistent, modern, and effortlessly scalable.
This isn’t just another system, it’s your fast lane to satisfaction, loyalty, and long-term impact, with none of the drag.
`,
    },
    {
      title: "Advertisers",
      image: "/images/slide3.png",
      promo: "Captive Audiences, Clutter-Free Canvas",
      briefd: `A traveller leans back mid-journey, phone in hand, headphones on, immersed. There are no pop-ups. No endless tabs. No doomscrolling distractions. Just focus and time.
`,
      description: `This is where DreamStream delivers its magic for brands. In a calm, captive setting where travellers are most receptive, your story lands exactly where it should, before a film, between playlists, on splash screens or subtle banners. Every placement is curated, validated with carriers, and delivered in a low-clutter environment that studies show can drive 30–50% higher recall and conversion. You’re in full control. The self-serve VAST portal allows precise targeting, frequency capping, and transparent reporting, so your campaigns don’t just run, they perform. And in markets where cookies break down and policy fragments attention, DreamStream offers a clean, privacy-respecting lane to reach verified, geo-mapped audiences. All of this, at competitive RPMs that outpace crowded ground-based digital. In a world full of noise, DreamStream gives your brand a rare gift: a moment that travels further and lands deeper.
`,
    },
    {
      title: "Content Partners",
      image: "/images/slide4.png",
      promo: "A New Stage for Stories",
      briefd: `A short film, an indie doc, or a local-language drama, ready to be seen, but buried under the noise of crowded OTT platforms.`,
      description: `Now imagine that same story finding its way to a traveller on a train winding through the Alps, or a family settling into a ferry ride across the Aegean. No search bar, no algorithm walls; just your content, front and centre, in the quiet space where people are ready to watch.DreamStream is opening a new stage, one that travels. With a single ingest, your titles are distributed across subscribed carriers worldwide, reaching passengers in aircraft, buses, trains, cruises, and lounges where traditional OTTs often don’t go.The platform is built with creators in mind: DRM-secure, windowing-respectful, and designed to surface metadata and ratings that drive discovery and long-tail viewership. Each view counts, each stream generates revenue, and you stay in control.No reformatting for every operator. No extra licensing friction. Just your stories, streamed seamlessly to an audience that’s ready to engage whether it’s for 20 minutes or an entire journey. This isn’t about replacing the old stage, it’s about extending it. DreamStream invites you to travel further, without losing your creative footprint.
`,
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState<SlideData | null>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "0px 0px -100px 0px" });
  const openModal = (slide: SlideData) => {
    // console.log('')
    setSelectedSlide(slide);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSlide(null);
  };
  return (
    // without slider
    <motion.section
      id="what-we-offer"
      
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative "
    >
      <div className="relative z-20 w-full py-16 md:py-20">
        <div className="relative  right-0 top-0 w-full bottom-0 bg-black rounded-l-3xl lg:rounded-l-[64px] " />
        <div className="max-w-[2300px] mx-auto relative">
          <div className="overflow-x-hidden md:mx-12">
            <div className="mx-auto max-w-[1500px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 px-6 md:px-1">
              {/* {slides.map((slide, index) => (
            <div
              key={index}
              className="relative rounded-[32px] overflow-hidden bg-dark-800 h-[500px] group w-full cursor-pointer"
              onClick={() => openModal(slide)}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3
                  className="heading-m sm:heading-s md:heading-m mb-3"
                  style={{ fontFamily: '"Right Grotesk Medium", sans-serif' }}
                >
                  {slide.title}
                </h3>
                <p className="body-normal leading-relaxed max-w-[90%]">
                  {slide.briefd}
                </p>
              </div>
            </div>
          ))} */}

              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="relative rounded-[32px] overflow-hidden bg-dark-800 h-[500px] group w-full cursor-pointer"
                  onClick={() => openModal(slide)}
                >
                  {/* Image */}
                  <motion.img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    initial={
                      isMobile ? { x: -100, opacity: 0 } : { y: 80, opacity: 0 }
                    }
                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
                  {/* Text */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-4"
                    initial={
                      isMobile ? { x: 100, opacity: 0 } : { y: 80, opacity: 0 }
                    }
                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    <h3
                      className="heading-m sm:heading-s md:heading-m mb-3"
                      style={{
                        fontFamily: '"Right Grotesk Medium", sans-serif',
                      }}
                    >
                      {slide.title}
                    </h3>
                    <p className="body-normal leading-relaxed max-w-[90%]">
                      {slide.briefd}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <InfoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        data={selectedSlide}
      />
      {/* <SectionDivider keyword="Where is" /> */}
    </motion.section>
  );
}

function useMediaQuery(query: any) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
}
