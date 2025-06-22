"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface SlideData {
  title: string;
  image: string;
  description: string;
}

export default function TravelSlider() {
  const slides: SlideData[] = [
    {
      title: "Passengers",
      image: "/images/slide1.png",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
      title: "Operators",
      image: "/images/slide2.png",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
      title: "Advertisers",
      image: "/images/slide3.png",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
      title: "Passengers",
      image: "/images/slide1.png",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
      title: "Operators",
      image: "/images/slide2.png",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s"
    }
  ];

  return (
    <section className="relative z-10">
      <div className="relative w-full py-16 md:py-20">
        <div className="absolute left-10 md:left-40 right-0 top-0 w-full bottom-0 bg-black/90 rounded-l-3xl lg:rounded-l-[64px]" />
        
        <div className="max-w-[1400px] mx-auto relative">
          <div className="overflow-visible pl-5 md:pl-20">
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={24}
              initialSlide={0}
              loop={true}
              grabCursor={true}
              pagination={{
                el: '.custom-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                  return '<span class="' + className + ' w-2.5 h-2.5 rounded-full inline-block mx-1 cursor-pointer opacity-50"></span>';
                },
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 24
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                }
              }}
              className="!pb-16 !overflow-visible"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="relative rounded-[32px] overflow-hidden bg-dark-800 h-[500px] group">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-3xl lg:text-[40px] font-bold text-white mb-3 font-grotesk">{slide.title}</h3>
                      <p className="text-gray-200 text-base leading-relaxed font-inter max-w-[90%]">{slide.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="custom-pagination flex justify-center gap-2 mt-8" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #D946EF !important;
        }
        .swiper-pagination-bullet-active {
          background-color: #FFD700 !important;
          opacity: 1 !important;
        }
        .swiper-wrapper {
          overflow: visible !important;
        }
      `}</style>
    </section>
  );
} 