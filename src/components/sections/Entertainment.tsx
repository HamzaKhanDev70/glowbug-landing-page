export default function  Entertainment() {
  const informationList = [
    {
      heading: "Offline, Always On",
      description: "Stream anywhere—no internet, no buffering.",
    },
    {
      heading: "Works Across All Carriers",
      description:
        "One platform for buses, trains, ferries, cruises, and aircraft.",
    },
    {
      heading: "Instant Access from Lounge to Landing",
      description: "The journey starts before boarding—and never pauses.",
    },
    {
      heading: "Passenger-Centric Design",
      description: "Curated content, intuitive access, zero learning curve.",
    },
    {
      heading: "BYOD-Ready",
      description: "No apps, no installations—just scan, connect, and play.",
    },
    {
      heading: "Scalable Across Fleets and Geographies",
      description: "One platform. Any vehicle. Any region.",
    },
    {
      heading: "No Crew Intervention Required",
      description: "Fully automated, hassle-free for operations.",
    },
    {
      heading: "Plug-and-Play Deployment",
      description: "Minimal setup. Fleet-wide rollout in days.",
    },
    {
      heading: "Quietly Maintained, Always Fresh",
      description:
        "Behind the scenes, DreamStream updates without touching your live operations.",
    },
    {
      heading: "Built for Monetization—When You’re Ready",
      description:
        "Future-ready for advertising, content partnerships, and ancillary services.",
    },
  ];

  return (
    <>
      <section className="relative w-full pt-20 md:pt-40 lg:pt-80 ">
        <img
          src="/images/bluebg.png"
          alt="Blue background"
          className="w-full h-[1800px] sm:h-[1600px] md:h-[1400px] lg:h-[1400px] object-fill "
        />
        <div className="absolute w-full h-auto inset-0 flex  justify-center px-4 md:px-8 lg:px-20 xl:px-40 2xl:px-60 top-[10%] ">
          <div className="relative w-full  ">
            <img
              src="/images/yellowbg.png"
              alt="Yellow background"
              className="w-full h-[1600px] sm:h-[1300px] lg:h-[1600px] max-h-[1900px] object-fill object-top "
            />
            <div className="absolute top-20 left-0 right-0 ">
              <>
                {/* SVG filter definition */}
                <svg
                  style={{ visibility: "hidden", position: "absolute" }}
                  width="0"
                  height="0"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                >
                  <defs>
                    <filter id="goo">
                      <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation="8"
                        result="blur"
                      />
                      <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  
                  0 1 0 0 0  
                  0 0 1 0 0  
                  0 0 0 19 -9"
                        result="goo"
                      />
                      <feComposite
                        in="SourceGraphic"
                        in2="goo"
                        operator="atop"
                      />
                    </filter>
                  </defs>
                </svg>

                {/* Filtered section */}
                <div
                  className="overflow-hidden rounded-2xl px-10 sm:px-16"
                  style={{ filter: "url(#goo)" }}
                >
                  <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] [clip-path:polygon(0_21%,100%_0,100%_100%,0_79%)]">
                    <img
                      src="/images/mbl.png"
                      alt="Clipped"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </>

              <div className="mt-3 text-center max-w-[1800px] mx-auto text-black px-2 sm:px-6">
                <h2 className="heading-m md:heading-l lg:heading-xl font-grotesk font-[500] leading-[1] mb-0 text-black">
                  ONBOARD & IN LOUNGE
                </h2>
                <h3 className="heading-s md:heading-m font-normal leading-[1] mb-4 lg:mb-8 text-black sm:tracking-[.38em]">
                  ENTERTAINMENT
                </h3>

                <p className="body-normal-d mb-8 lg:mb-13 max-w-[800px] mx-auto text-black">
                    Dream Stream is the only engagement platform that's ubiquitously
              available without download or the internet, for travellers across
              the World who want freedom, choice, and control of the.
                </p>

                <div
                  className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-8 md:gap-x-14 gap-y-2 text-left max-w-[800px] mx-auto lg:space-y-3 text-black"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {informationList.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-start  m1-4"
                    >
                      {/* Bullet */}
                      {/* <span className="w-2.5 h-2.5 mt-4 bg-black rounded-full" /> */}

                      {/* Text Content */}
                      <div>
                        <li className="text-lg font-bold ">
                          {info.heading}
                        </li>
                        <div className="text-xs ">
                          {info.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
    </>
  );
}
