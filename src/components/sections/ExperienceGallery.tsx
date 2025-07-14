import Image from "next/image";
const cardData = [
    {
      image: "/images/Experience-Gallery/304x384 CARD-1.png",
      title: "Innovation Lab",
      description: "Explore cutting-edge solutions shaping the future.",
    },
    {
      image: "/images/Experience-Gallery/304x384 CARD-2.png",
      title: "Creative Studio",
      description: "Where imagination meets technology.",
    },
    {
      image: "/images/Experience-Gallery/304x384 CARD-3.png",
      title: "Global Outreach",
      description: "Connecting ideas across continents.",
    },
    {
      image: "/images/Experience-Gallery/304x384 CARD.png",
      title: "Design Excellence",
      description: "Crafting visual experiences with purpose.",
    },
    {
      image: "/images/Experience-Gallery/304x440g.png",
      title: "Sustainability",
      description: "Solutions for a greener tomorrow.",
    },
    {
      image: "/images/Experience-Gallery/304x440 CARDf.png",
      title: "Smart Technology",
      description: "Intelligent systems enhancing everyday life.",
    },
    {
      image: "/images/Experience-Gallery/304x440 CARD-3c.png",
      title: "Team Collaboration",
      description: "Together we build better ideas.",
    },
    {
      image: "/images/Experience-Gallery/304x440 CARD-3 1.png",
      title: "User Experience",
      description: "Designing with empathy at every step.",
    },
    {
      image: "/images/Experience-Gallery/304x440 CARD-2d.png",
      title: "Security First",
      description: "Protecting data and privacy always.",
    },
    {
      image: "/images/Experience-Gallery/304x440 CARD-2b.png",
      title: "Mobile Innovation",
      description: "Powering experiences on the go.",
    },
    {
      image: "/images/Experience-Gallery/304x440 CARD-2d.png",
      title: "AI Integration",
      description: "Bringing intelligence into everyday tasks.",
    },
    {
      image: "/images/Experience-Gallery/304x440 CARD-1e.png",
      title: "Analytics Hub",
      description: "Data-driven decisions made simple.",
    },
    {
      image: "/images/Experience-Gallery/304x440 CARD-1a.png",
      title: "Virtual Reality",
      description: "Immersive worlds beyond the screen.",
    },
    {
      image: "/images/Experience-Gallery/304x440 CARD-2.png",
      title: "Cloud Systems",
      description: "Scalable infrastructure for modern needs.",
    },
    {
      image: "/images/Experience-Gallery/304x440 CARD-3.png",
      title: "E-Commerce",
      description: "Frictionless shopping redefined.",
    },
    {
      image: "/images/Experience-Gallery/304x384 CARD.png",
      title: "Community Projects",
      description: "Empowering change at the grassroots.",
    },
  ];
  
export default function ExperienceGallery() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12  text-gray-800 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* <h2 className="text-3xl font-bold text-center mb-4">Explore Our Gallery</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover the collection of our featured images, showcasing our work and experiences across various domains.
        </p> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className=" shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative w-full h-58">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-contain"
                />
              </div>
              {/* <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.description}</p>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
