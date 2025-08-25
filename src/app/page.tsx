import TravelCompanion from "@/components/sections/TravelCompanion";
import EntertainmentFeatures from "@/components/sections/EntertainmentFeatures";
import AccessDevice from "@/components/sections/AccessDevice";
import AboutUs from './../components/sections/AboutUs';
import ContactUs from './../components/sections/ContactUS';
import SectionDivider from "@/components/sections/SectionSeperator";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <TravelCompanion />
      {/* <EntertainmentFeatures /> */}
      <AccessDevice />
      <AboutUs/>
       
      <ContactUs/>
    </main>
  );
}
