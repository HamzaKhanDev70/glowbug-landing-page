import TravelCompanion from "@/components/sections/TravelCompanion";
import EntertainmentFeatures from "@/components/sections/EntertainmentFeatures";
import AccessDevice from "@/components/sections/AccessDevice";
import SectionSeparator from '../components/sections/SectionSeperator';
import AboutUs from './../components/sections/AboutUs';
import ContactUs from './../components/sections/ContactUS';
import Services from './../components/sections/Services';
import Entertainment from "@/components/sections/Entertainment";
import TravelTypes from "@/components/sections/TravelTypes";
import TravelSlider from "@/components/sections/TravelSlider";
export default function Home() {
  return (
    <main className="min-h-screen bg-black ">
      <TravelCompanion />
       <TravelTypes />
      <TravelSlider />
      <EntertainmentFeatures />
      <Entertainment />
      <Services/>
      <AccessDevice />
      <AboutUs/>
      <ContactUs/>
    </main>
  );
}
