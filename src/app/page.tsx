import TravelCompanion from "@/components/sections/TravelCompanion";
import EntertainmentFeatures from '@/components/sections/EntertainmentFeatures';
import AccessDevice from '@/components/sections/AccessDevice';

export default function Home() {
  return (
    <main className="min-h-screen">
      <TravelCompanion />
      <EntertainmentFeatures />
      <AccessDevice />
    </main>
  );
}