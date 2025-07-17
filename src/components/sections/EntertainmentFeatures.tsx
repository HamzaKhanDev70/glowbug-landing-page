const features = [
  {
    icon: (
      <svg width="80" height="80" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36 12H12C9.79086 12 8 13.7909 8 16V32C8 34.2091 9.79086 36 12 36H36C38.2091 36 40 34.2091 40 32V16C40 13.7909 38.2091 12 36 12ZM12 32V16H36V32H12Z" fill="#FFD700"/>
        <path d="M22 20L28 24L22 28V20Z" fill="#FFD700"/>
      </svg>
    ),
    title: "Watch",
    items: ["Movies", "TV", "Live", "Video Podcasts"]
  },
  {
    icon: (
      <svg width="80" height="80" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36 12H12C10.4087 12 8.88258 12.6321 7.75736 13.7574C6.63214 14.8826 6 16.4087 6 18V30C6 31.5913 6.63214 33.1174 7.75736 34.2426C8.88258 35.3679 10.4087 36 12 36H36C37.5913 36 39.1174 35.3679 40.2426 34.2426C41.3679 33.1174 42 31.5913 42 30V18C42 16.4087 41.3679 14.8826 40.2426 13.7574C39.1174 12.6321 37.5913 12 36 12Z" stroke="#FFD700" strokeWidth="2"/>
        <path d="M12 20H36M12 28H36" stroke="#FFD700" strokeWidth="2"/>
      </svg>
    ),
    title: "Listen",
    items: ["Artists", "Playlists", "Featured", "Podcasts"]
  },
  {
    icon: (
      <svg width="80" height="80" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36 14H12C10.8954 14 10 14.8954 10 16V32C10 33.1046 10.8954 34 12 34H36C37.1046 34 38 33.1046 38 32V16C38 14.8954 37.1046 14 36 14Z" stroke="#FFD700" strokeWidth="2"/>
        <path d="M20 21L28 24L20 27V21Z" fill="#FFD700"/>
      </svg>
    ),
    title: "Play",
    items: ["Action adventure", "Roleplay & strategy", "Sports", "Puzzles"]
  },
  {
    icon: (
      <svg width="80" height="80" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12L28 20.5L37 22L30.5 28.5L32 37L24 33L16 37L17.5 28.5L11 22L20 20.5L24 12Z" fill="#FFD700"/>
      </svg>
    ),
    title: "Devotion",
    items: ["Meditations", "Prayers", "Recitations"]
  },
  {
    icon: (
      <svg width="80" height="80" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35 16H13C11.8954 16 11 16.8954 11 18V30C11 31.1046 11.8954 32 13 32H35C36.1046 32 37 31.1046 37 30V18C37 16.8954 36.1046 16 35 16Z" stroke="#FFD700" strokeWidth="2"/>
        <circle cx="24" cy="24" r="6" stroke="#FFD700" strokeWidth="2"/>
      </svg>
    ),
    title: "Read",
    items: ["News", "Magazines", "E-books"]
  },
  {
    icon: (
      <svg width="80" height="80" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 24L24 12L8 24M35 22V36H13V22" stroke="#FFD700" strokeWidth="2"/>
      </svg>
    ),
    title: "Destination",
    items: ["Arrival time", "Location highlights", "Things to do"]
  }
];

export default function EntertainmentFeatures() {
  return (
    <section className="relative w-full pt-16 md:pt-20">
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between mb-12 md:mb-20 gap-8 text-center lg:text-left">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <div className="block w-full overflow-hidden leading-[1.05]">
              <span className="block text-[#FFD700] heading-m md:heading-l lg:heading-xl  font-normal leading-[1.05] tracking-[-0.04em] whitespace-wrap hei ">
                ONBOARD & IN LOUNGE
              </span>
              <span className="block text-white heading-m md:heading-l lg:heading-xl font-normal leading-[1.05] mt-2 sm:tracking-[0.12em] ">
                ENTERTAINMENT
              </span>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex items-start">
            <p className="body-normal pt-4 lg:mx-0 lg:max-w-full" >
              Dream Stream is the only engagement platform that's ubiquitously available
              without download or the internet, for travellers across the World who want
              freedom, choice, and control of the.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="rounded-[24px] sm:rounded-[32px] p-4 sm:p-6 md:p-8 flex flex-col items-center text-center w-full"
              style={{
                background: 'linear-gradient(180deg, #4A1D00 0%, #2A1100 100%)'
              }}
            >
              <div className="mb-4 sm:mb-6 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <span className="w-full h-full block">{feature.icon}</span>
              </div>
              <h3 className="heading-m lg:heading-l text-white font-bold mb-2 sm:mb-4">{feature.title}</h3>
              <div className="flex flex-col gap-1 sm:gap-2">
                {feature.items.map((item, idx) => (
                  <p key={idx} className="text-[#FFD700] body-normal">{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 