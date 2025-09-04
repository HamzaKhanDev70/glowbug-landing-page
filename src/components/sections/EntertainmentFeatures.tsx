import SectionDivider from "./SectionSeperator";


const features = [
  {
    image: "/images/watch.png",
    title: "Watch",
    items: ["Movies", "TV", "Dreamkids", "Sports", "Documentaries"],
  },
  {
    image: "/images/headphones.png",
    title: "Listen",
    items: ["Music", "Podcasts","Audio Books"],
  },
   {
    image: "/images/read.png",
    title: "Read",
    items: [ "E-Magazines", "E-Books","E-Bookazines"],
  },
  {
    image: "/images/play.png",
    title: "Play",
    items: ["Games"],
  },
  {
    image: "/images/devotion.png",
    title: "Devotional",
    items: ["Quran Majeed", "Hamd-o-Naat", "Qawali","Hajj"],
  },
 
  {
    image: "/images/destination.png",
    title: "Destination",
    items: ["Arrival time", "Location highlights", "Things to do"],
  },
];

export default function EntertainmentFeatures() {
  return (
    <section className="relative w-full pt-16 md:pt-20 ">
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12 md:mb-20 gap-8 text-center lg:text-left mx-4 sm:mx-12 ">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <div className="block w-full overflow-hidden leading-none " >
              <span className="block text-[#FFD700]  grotesk-tight text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[5rem] whitespace-nowrap"  style={{ fontFamily: '"Right Grotesk Tight", sans-serif' }}>
                ONBOARD & IN LOUNGE
              </span>
              <span className="block grotesk-light text-[1.8rem] sm:text-[3.1rem] md:text-[4.3rem] lg:text-[3.1rem] " style={{ fontFamily: '"Right Grotesk Light", sans-serif' }}>
                ENTERTAINMENT
              </span>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex items-start">
            <p className="body-normal-d pt-4 lg:mx-0 lg:max-w-full" style={{ fontFamily: '"Right Grotesk Compact", sans-serif' }}>
              Dream Stream is the only engagement platform that's ubiquitously
              available without download or the internet, for travellers across
              the World who want freedom, choice, and control of the.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 px-8 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-[24px] sm:rounded-[32px] p-4 flex flex-col items-center text-center w-full "
              style={{
                background: "linear-gradient(to bottom, #301400 0%, #000000 100%)",
              }}
            >
              <div className="mb-4 sm:mb-6 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="heading-m text-white mb-2 sm:mb-4 break-words text-wrap whitespace-normal">
                {feature.title}
              </h3>
              <div className="flex flex-col gap-1 sm:gap-2">
                {feature.items.map((item, idx) => (
                  <p key={idx} className="text-[#FFE300] body-normal">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
       
        {/* <SectionDivider keyword="Byod"/> */}
    </section>
  );
}
