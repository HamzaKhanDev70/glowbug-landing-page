import TravelCompanion from "@/components/sections/TravelCompanion";
import EntertainmentFeatures from '@/components/sections/EntertainmentFeatures';
import AccessDevice from '@/components/sections/AccessDevice';
import ListenMusic from '@/components/sections/ListenMusic';
import HowItWorks from '@/components/sections/HowItWorks';
import PlayVideo from '@/components/sections/PlayVideo';
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <TravelCompanion />
      <EntertainmentFeatures />
      <AccessDevice />
      <ListenMusic />
      <HowItWorks />
      {/* <PlayVideo /> */}
      <Footer />
    </main>
  );
}