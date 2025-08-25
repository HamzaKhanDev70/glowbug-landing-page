import { useState } from "react";
import InfoModal from "./InfoModal";
import { motion } from "framer-motion";
import SectionSeparator from "./SectionSeperator";

// Reusable for the data
interface TravelTypeData {
  title: string;
  type: string;
  image: string;
  description: string;
  brief: string;
}

// Props for the TravelType component
interface TravelTypeProps extends TravelTypeData {
  onClick: () => void;
}

function TravelType({
  title,
  type,
  image,
  description,
  brief,
  onClick,
}: TravelTypeProps) {
  return (
    <div
  className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24 last:mb-0 items-center cursor-pointer hover:opacity-90 transition-opacity "
  onClick={onClick}
>
  <motion.div
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: false }}
    className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] flex-shrink-0"
  >
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <clipPath id="roundedTopLeft" clipPathUnits="objectBoundingBox">
          <path d="M0.1,0 Q0,0 0,0.1 V1 H1 V0 H0.1 Z" />
        </clipPath>
      </defs>
      <foreignObject width="100%" height="100%" clipPath="url(#roundedTopLeft)">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </foreignObject>
    </svg>
  </motion.div>

  <motion.div
    initial={{ x: 100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
    viewport={{ once: false }}
    className="flex-1 text-center lg:text-left mx-4 "
  >
    <h3 className="flex items-center justify-center lg:justify-start mb-3 gap-2 leading-tight md:leading-none text-words whitespace-normal text-wrap break-words">
      <span
        className="heading-s sm:heading-l lg:heading-xl"
        style={{ fontFamily: '"Right Grotesk Medium", sans-serif' }}
      >
        {title}
      </span>
      {type && (
        <>
          <br />
          <span
            className="heading-s sm:heading-l lg:heading-xl font-light"
            style={{ fontFamily: '"Right Grotesk Narrow", sans-serif' }}
          >
            {type}
          </span>
        </>
      )}
    </h3>
    <span
      className="block heading-m  mb-6"
      style={{ fontFamily: '"Right Grotesk Narrow", sans-serif' }}
    >
      {brief}
    </span>
    <p className="body-normal leading-relaxed max-w-[600px] mx-auto lg:mx-0 ">
      {description}
    </p>
  </motion.div>
</div>

  );
}

export default function TravelTypes() {
  const [selectedType, setSelectedType] = useState<TravelTypeData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const travelTypes = [
    {
      title: "PLANE",
      type: "TRAVEL",
      image: "/images/aeroplane0.png",
      brief: "Where magic boards early.",
      description:
        "From gate lounge to cruising altitude, DreamStream keeps passengers immersed in entertainment without relying on inflight connectivity. One scan on single login, and their journey lifts off long before take-off.",
    },
    {
      title: "BUS",
      type: "TRAVEL",
      image: "/images/bus-travel.png",
      brief: "Big-screen stories on every road.",
      description:
        "Even on the longest highways and remote stretches, DreamStream transforms daily commutes into cinematic escapes. BYOD access makes every seat feel personal—and every mile more meaningful.",
    },
        {
      title: "TRAIN",
      type: "TRAVEL",
      image: "/images/train.png",

      brief: " Journeys with rhythm, powered by story.",
      description:
        "Whether it’s a daily route or a scenic ride, DreamStream turns train time into screen time. Passengers scan, stream, and settle in, no apps, no waiting, just moments that move with them.",
    },
    {
      title: "FERRIES",
      type: "& CRUISES",
      image: "/images/ship.png",

      brief: "Journeys with rhythm, powered by story.",
      description:
        "Ferries, cruises, or island-hoppers, DreamStream fills the offline silence with choice and comfort. Passengers sail with music, films, and travel tips; all without touching open waters of the internet.",
    },

    {
      title: "HOTEL",
      type: "",
      image: "/images/hotel.png",

      brief: "  A companion that checks in with you.",
      description:
        "After the ride, DreamStream stays close. In-room access extends the journey, letting guests unwind, pick up where they left off, or discover something new; all from the comfort of their own device.",
    },
  ];

  const handleTypeClick = (type: TravelTypeData) => {
    setSelectedType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedType(null);
  };

  return (
    // <section className="relative -mt-24 md:-mt-40 " >
    <section className="relative " id="where-is">
      {/* Your existing background gradient */}
      <div className="absolute top-0 w-full h-full">
        <div
          className="absolute top-0 left-0 right-0 h-[150%] bg-gradient-to-b from-[#4A1D00] to-black"
          style={{
            clipPath: "polygon(100px 0, 100% 0, 100% 100%, 0 100%, 0 0px)",
          }}
        />
      </div>

      <div className="relative pt-38 md:pt-17 pb-24 md:pb-32">
        <div className="w-full flex flex-col items-center justify-between px-5 md:px-20 ">
          {travelTypes.map((type, index) => (
            <TravelType
              key={index}
              {...type}
              onClick={() => handleTypeClick(type)}
            />
          ))}
        </div>
      </div>

      <InfoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        data={selectedType}
      />
  
    </section>
  );
}
