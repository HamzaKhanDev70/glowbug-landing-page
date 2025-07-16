import Image from "next/image";

const teamMembers = [
  { name: "Alice Smith", title: "CEO", image: "/images/team1.png" },
  { name: "John Doe", title: "CTO", image: "/images/team2.png" },
  { name: "Emily White", title: "Designer", image: "/images/team3.png" },
  { name: "Michael Lee", title: "Developer", image: "/images/team4.png" },
  { name: "Sarah Brown", title: "Marketing", image: "/images/team5.png" },
  { name: "David Kim", title: "Engineer", image: "/images/team6.png" },
];

export default function TeamSection() {
  return (
    <section className="relative w-full py-24 px-4  ">
      {/* 🔹 Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/v1.png" 
          alt="Team Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-70" />
      </div>

      {/* 🔸 Content */}
      <div className="relative z-10 max-w-8xl mx-auto">
        <h2 className="text-[#FEE300] heading-s md:heading-m lg:heading-l text-center mb-12">
          OUR TEAM
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 justify-items-center">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="w-[280px] flex flex-col    bg-opacity-5 rounded-xl shadow-lg hover:bg-opacity-10 transition"
            >
              {/* Image */}
              <div className="w-full h-[250px] relative overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Text - aligned left */}
              <div className="p-4 text-left">
                <p className="text-sm uppercase tracking-wide text-gray-300 mb-1">
                  {member.title}
                </p>
                <h4 className="font-semibold text-white">{member.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
