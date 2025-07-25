const features = [
  {
    image: "/images/watch.png",
    title: "Watch",
    items: ["Movies", "TV", "Live", "Video Podcasts"],
  },
  {
    image: "/images/headphones.png",
    title: "Listen",
    items: ["Artists", "Playlists", "Featured", "Podcasts"],
  },
  {
    image: "/images/game.png",
    title: "Play",
    items: ["Action adventure", "Roleplay & strategy", "Sports", "Puzzles"],
  },
  {
    image: "/images/devotion.png",
    title: "Devotion",
    items: ["Meditations", "Prayers", "Recitations"],
  },
  {
    image: "/images/read.png",
    title: "Read",
    items: ["News", "Magazines", "E-books"],
  },
  {
    image: "/images/destination.png",
    title: "Destination",
    items: ["Arrival time", "Location highlights", "Things to do"],
  },
];

export default function EntertainmentFeatures() {
  return (
    <section className="relative w-full pt-16 md:pt-20">
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12 md:mb-20 gap-8 text-center lg:text-left mx-12 ">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <div className="block w-full overflow-hidden leading-none " >
              <span className="block text-[#FFD700]  grotesk-tight text-[36px] sm:text-[82px] lg:text-[88px] whitespace-nowrap"  style={{ fontFamily: '"Right Grotesk Tight", sans-serif' }}>
                ONBOARD & IN LOUNGE
              </span>
              <span className="block grotesk-light text-[22px] sm:text-[50px] " style={{ fontFamily: '"Right Grotesk Light", sans-serif' }}>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-[24px] sm:rounded-[32px] p-4 sm:p-6 md:p-8 flex flex-col items-center text-center w-full"
              style={{
                background: "linear-gradient(180deg, #4A1D00 0%, #2A1100 100%)",
              }}
            >
              <div className="mb-4 sm:mb-6 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="heading-m  text-white  mb-2 sm:mb-4">
                {feature.title}
              </h3>
              <div className="flex flex-col gap-1 sm:gap-2">
                {feature.items.map((item, idx) => (
                  <p key={idx} className="text-[#FFD700] body-normal">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
