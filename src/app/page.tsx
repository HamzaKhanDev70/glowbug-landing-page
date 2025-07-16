import TravelCompanion from "@/components/sections/TravelCompanion";
import EntertainmentFeatures from "@/components/sections/EntertainmentFeatures";
import AccessDevice from "@/components/sections/AccessDevice";
import Footer from "@/components/sections/Footer";
import Passenger from "./../components/sections/Passenger";
import Services from "@/components/sections/Services";
import AboutUs from "./../components/sections/AboutUs";
import Experience from './../components/sections/Experience';
import ContactUs from "@/components/sections/ContactUS";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <TravelCompanion />
      <EntertainmentFeatures />
      <AccessDevice />
      {/* <Passenger/> */}
      {/* <Services/> */}
      {/* <AboutUs /> */}
      {/* <Experience/> */}
      {/* <ContactUs/> */}
      <Footer />
    </main>
  );
}
