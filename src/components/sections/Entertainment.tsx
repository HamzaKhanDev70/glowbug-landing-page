export default function Entertainment() {
  const informationList = [
    "Information goes here",
    "Information goes here",
    "Information goes here",
    "Information goes here",
    "Information goes here",
    "Information goes here",
    "Information goes here",
    "Information goes here",
    "Information goes here",
    "Information goes here",
  ];

  return (
    <>
      <section className="relative w-full pt-20 md:pt-40 lg:pt-80">
        <img
          src="/images/bluebg.png"
          alt="Blue background"
          className="w-full h-[1800px] sm:h-[1600px] md:h-[1200px] lg:h-[1000px] object-fill"
        />
        <div className="absolute w-full inset-0 flex items-center justify-center px-4 md:px-8 lg:px-20 xl:px-40 2xl:px-60">
          <div className="relative w-full">
            <img
              src="/images/yellowbg.png"
              alt="Yellow background"
              className="w-full h-auto max-h-[1400px] object-fill"
            />
            <div className="absolute top-5 sm:top-20 left-0 right-0 px-18">
              {/* <div 
                className="rounded-[10px] mt-2 md:mt-20 lg:mt-40 overflow-hidden shadow-xl max-w-[1100px] mx-auto"
                style={{
                  transform: 'perspective(2450px) rotateY(-45deg) rotateZ(-1deg) skewY(1deg)',
                  transformOrigin: 'left center',
                  boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.3)',
                  maxWidth: '90%',
                  maxHeight: '60%',
                }}
              >
                <img
                  src="/images/passenger.png"
                  alt="Entertainment Interface"
                  className="w-full h-auto object-cover scale-[1.15]"
                  style={{
                    maxHeight: 'calc(100vh - 500px)',
                    maxWidth: '100%',
                  }}
                />
              </div> */}
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
                  className="overflow-hidden rounded-2xl"
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

              <div className="mt-3 text-center max-w-[900px] mx-auto text-black">
                <h2 className="heading-m md:heading-l lg:heading-xl font-bold leading-[1] mb-0 text-black">
                  ONBOARD & IN LOUNGE
                </h2>
                <h3 className="heading-s md:heading-m font-normal leading-[1] mb-8 lg:mb-16 text-black sm:tracking-[.38em]">
                  ENTERTAINMENT
                </h3>

                <p className="body-normal mb-8 lg:mb-16 max-w-[800px] mx-auto text-black">
                  Dream Stream is the only engagement platform that's
                  ubiquitously available without download or the internet, for
                  travellers across the World who want freedom, choice, and
                  control of the.
                </p>

                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-24 gap-y-4 text-left max-w-[800px] mx-auto text-black"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {informationList.map((info, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mr-3" />
                      <span className="heading-xs text-bold text-black">
                        {info}
                      </span>
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
