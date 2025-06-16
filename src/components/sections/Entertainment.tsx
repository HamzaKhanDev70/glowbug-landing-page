import EntertainmentFeatures from './EntertainmentFeatures';

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
    "Information goes here"
  ];

  return (
    <>
      <section className="relative w-full pt-80">
        <img 
          src="/images/bluebg.png"
          alt="Blue background"
          className="w-full h-[1000px] object-fill"
        />
        <div className="absolute w-full inset-0 flex items-center justify-center px-60">
          <div className="relative w-full">
            <img
              src="/images/yellowbg.png"
              alt="Yellow background"
              className="w-full h-auto max-h-[1400px] object-fill"
            />
            <div className="absolute top-8 left-0 right-0 px-8">
              <div 
                className="rounded-[10px] mt-40 overflow-hidden shadow-xl max-w-[1000px] mx-auto"
                style={{
                  transform: 'perspective(2100px) rotateY(-45deg) rotateZ(-1deg) skewY(1deg)',
                  transformOrigin: 'left center',
                  boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.3)'
                }}
              >
                <img
                  src="/images/passenger.png"
                  alt="Entertainment Interface"
                  className="w-full h-auto max-h-[400px] object-cover scale-[1.15]"
                />
              </div>

              <div className="mt-40 text-center max-w-[900px] mx-auto text-black">
                <h2 className="text-[64px] font-grotesk leading-[1] mb-0 text-black">
                  ONBOARD & IN LOUNGE
                </h2>
                <h3 className="text-[48px] font-grotesk leading-[1] mb-16 text-black">
                  ENTERTAINMENT
                </h3>

                <p className="text-lg mb-16 max-w-[800px] mx-auto text-black">
                  Dream Stream is the only engagement platform that's ubiquitously available
                  without download or the internet, for travellers across the World who want
                  freedom, choice, and control of the.
                </p>

                <div className="grid grid-cols-2 gap-x-24 gap-y-6 text-left max-w-[800px] mx-auto text-black">
                  {informationList.map((info, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mr-3" />
                      <span className="text-lg text-black">{info}</span>
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

