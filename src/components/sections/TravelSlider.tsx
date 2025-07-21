"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";
import InfoModal from "./InfoModal";

interface SlideData {
  title: string;
  image: string;
  description: string;
  brief?: string;
}

export default function TravelSlider() {
  const slides: SlideData[] = [
    {
      title: "Passengers",
      image: "/images/slide1.png",
      brief:
        "You’re relaxing in the quiet lounge, flight still an hour away, but airport mobile internet is patchy and public Wi-Fi is scrappy. Then you spot a small sign: “Connect to DreamStream.”",
      description: `One tap or a quick scan of the QR code on your boarding pass, brings the offline network to life. A login screen appears; you choose a simple manual sign-in or let the QR code fill your details. Instantly, a full library of films, playlists, podcasts, and destination guides opens on your device.
When boarding is called, you slip your phone into your pocket, stroll down the jet bridge, take your seat, and reconnect to the same DreamStream network aboard. No buffering, no searching—your movie continues exactly where you paused, a live map traces the route, and the soundtrack you queued hums softly through your headphones.
From lounge to landing, DreamStream feels like magic: one invisible thread of entertainment that never asks for internet and never breaks the spell.
`,
    },
    {
      title: "Operators",
      image: "/images/slide2.png",
      brief:
        "DreamStream unlocks a new frontier in onboard experience, one where passengers are delighted, and operators don’t lift a finger.",
      description: `With a lightweight, plug-and-play appliance that fits seamlessly into aircraft, trains, coaches, ferries, and cruise fleets, DreamStream installs quickly, no capex, no structural changes, no content licensing burden. It switches on as part of your existing flow, offering instant access to entertainment and curated services with minimal setup and zero disruption.Behind the scenes, the platform quietly generates value, sharing in high-margin revenue streams from advertising, premium content, and ancillary services like F&B or mobility partnerships, all without adding crew or straining bandwidth.
And as passengers explore, DreamStream captures rich behavioural insights, helping you refine service, drive smarter cross-sells, and build a fleet-wide experience that’s consistent, modern, and effortlessly scalable.
This isn’t just another system, it’s your fast lane to satisfaction, loyalty, and long-term impact, with none of the drag.
`,
    },
    {
      title: "Advertisers",
      image: "/images/slide3.png",
      brief:`A traveller leans back mid-journey, phone in hand, headphones on, immersed.
There are no pop-ups. No endless tabs. No doomscrolling distractions. Just focus and time.
`,
      description:
        `This is where DreamStream delivers its magic for brands. In a calm, captive setting where travellers are most receptive, your story lands exactly where it should, before a film, between playlists, on splash screens or subtle banners. Every placement is curated, validated with carriers, and delivered in a low-clutter environment that studies show can drive 30–50% higher recall and conversion.
You’re in full control. The self-serve VAST portal allows precise targeting, frequency capping, and transparent reporting, so your campaigns don’t just run, they perform. And in markets where cookies break down and policy fragments attention, DreamStream offers a clean, privacy-respecting lane to reach verified, geo-mapped audiences.
All of this, at competitive RPMs that outpace crowded ground-based digital.
In a world full of noise, DreamStream gives your brand a rare gift: a moment that travels further and lands deeper.
`,
    },
    {
      title: "Content Partners",
      image: "/images/slide1.png",
      brief: `A short film, an indie doc, or a local-language drama, ready to be seen, but buried under the noise of crowded OTT platforms.`,
      description:
        `Now imagine that same story finding its way to a traveller on a train winding through the Alps, or a family settling into a ferry ride across the Aegean. No search bar, no algorithm walls; just your content, front and centre, in the quiet space where people are ready to watch.DreamStream is opening a new stage, one that travels. With a single ingest, your titles are distributed across subscribed carriers worldwide, reaching passengers in aircraft, buses, trains, cruises, and lounges where traditional OTTs often don’t go.The platform is built with creators in mind: DRM-secure, windowing-respectful, and designed to surface metadata and ratings that drive discovery and long-tail viewership. Each view counts, each stream generates revenue, and you stay in control.No reformatting for every operator. No extra licensing friction. Just your stories, streamed seamlessly to an audience that’s ready to engage whether it’s for 20 minutes or an entire journey.

This isn’t about replacing the old stage, it’s about extending it. DreamStream invites you to travel further, without losing your creative footprint.
`,
    },
    {
      title: "Operators",
      image: "/images/slide2.png",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState<SlideData | null>(null);

  const openModal = (slide: SlideData) => {
    setSelectedSlide(slide);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSlide(null);
  };
  return (
    <section className="relative ">
      <div className="relative z-10 w-full py-16 md:py-20">
        <div className="absolute left-10 md:left-40 right-0 top-0 w-full bottom-0 bg-black/90 rounded-l-3xl lg:rounded-l-[64px]" />

        <div className="max-w-[1200px] mx-auto relative">
          <div className="overflow-visible pl-5 md:pl-20">
            <div className="mx-auto max-w-[1400px]">
              <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={100}
                loop={false}
                grabCursor={true}
                slidesPerView={3}
                pagination={{
                  el: ".custom-pagination",
                  clickable: true,
                  renderBullet: function (index, className) {
                    return (
                      '<span class="' +
                      className +
                      ' w-2.5 h-2.5 rounded-full inline-block mx-1 cursor-pointer opacity-50"></span>'
                    );
                  },
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 100,
                  },
                  1280: {
                    slidesPerView: 3,
                    spaceBetween: 100,
                  },
                  1600: {
                    slidesPerView: 3,
                    spaceBetween: 100,
                  },
                }}
                className="!pb-16 !overflow-visible"
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="relative rounded-[32px] overflow-hidden bg-dark-800 h-[500px] group w-[400px] md:w-[420px] lg:w-[450px]"
                      onClick={() => openModal(slide)}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h3 className="heading-m sm:heading-s md:heading-m lg:heading-xl font-bold text-white mb-3 ">
                          {slide.title}
                        </h3>
                        <p className="body-normal leading-relaxed max-w-[90%]">
                          {slide.brief}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="custom-pagination flex justify-center gap-2 mt-8" />
          </div>
        </div>
      </div>
      <InfoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        data={selectedSlide}
      />
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #d946ef !important;
        }
        .swiper-pagination-bullet-active {
          background-color: #ffd700 !important;
          opacity: 1 !important;
        }
        .swiper-wrapper {
          overflow: visible !important;
        }
      `}</style>
    </section>
  );
}
