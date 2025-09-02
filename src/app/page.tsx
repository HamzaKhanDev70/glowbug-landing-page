import TravelCompanion from "@/components/sections/TravelCompanion";
import EntertainmentFeatures from "@/components/sections/EntertainmentFeatures";
import AccessDevice from "@/components/sections/AccessDevice";
import SectionSeparator from '../components/sections/SectionSeperator';
import AboutUs from './../components/sections/AboutUs';
import ContactUs from './../components/sections/ContactUS';
import Services from './../components/sections/Services';
export default function Home() {
  return (
    <main className="min-h-screen bg-black ">
      <TravelCompanion />
      {/* <EntertainmentFeatures /> */}
      <Services/>
      <AccessDevice />
      <AboutUs/>
      {/* <SectionSeparator keyword="What we offer" /> */}
      <ContactUs/>
    </main>
  );
}
