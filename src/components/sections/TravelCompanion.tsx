import TravelHero from "./TravelHero";
import TravelIllustration from "./TravelIllustration";
import TravelFeatures from "./TravelFeatures";
import EntertainmentCTA from "./EntertainmentCTA";
import TravelSlider from "./TravelSlider";
import TravelTypes from "./TravelTypes";
import Entertainment from "./Entertainment";

export default function TravelCompanion() {
  return (
    <div className="overflow-x-hidden w-full">
      <div className="px-5 md:px-20 mt-10 md:mt-22">
        <div 
          className="relative bg-cover bg-center rounded-[64px] overflow-hidden"
          style={{ 
            backgroundImage: "url('/images/MainHeader.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <section
            className="w-full py-30 flex items-center justify-center bg-dark-900/50 text-white"
          >
            <div className="w-full flex flex-col items-center">
              <TravelHero />
              <TravelIllustration />
              <TravelFeatures />
              <EntertainmentCTA />
            </div>
          </section>

          <div className="relative h-[650px]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
          </div>
        </div>
      </div>

      <div className="relative -mt-[650px]">
        <TravelSlider />
        <TravelTypes />
        <Entertainment />
      </div>
    </div>
  );
}
