import TravelHero from "./TravelHero";
import TravelIllustration from "./TravelIllustration";
import TravelFeatures from "./TravelFeatures";
import EntertainmentCTA from "./EntertainmentCTA";

export default function TravelCompanion() {
  return (
    <section
      className="py-30 flex items-center justify-center bg-dark-900 text-white m-22 bg-cover bg-position-center rounded-xl overflow-hidden"
      style={{ backgroundImage: "url('/images/MainHeader.png')" }}
    >
      <div className="w-full flex flex-col items-center">
        <TravelHero />
        <TravelIllustration />
        <TravelFeatures />
        <EntertainmentCTA />
      </div>
    </section>
  );
}
