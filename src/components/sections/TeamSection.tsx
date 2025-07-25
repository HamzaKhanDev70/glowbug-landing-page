"use client";
import Image from "next/image";
import { useState } from "react";
import InfoModal from "./InfoModal";
interface TeamMemberProps {
  name?: string;
  title?: string;
  image?: string;
  description?: string;
}
const teamMembers = [
  {
    name: "Zeeshan Bukhari",
    title: "CEO",
    image: "/images/team1.png",
    description: `As a seasoned intrapreneur and business executive, Mr. Zeeshan Bokhari brings 19+ years of experience and a unique portfolio spanning vast techno-commercial and strategic international cooperation. With a proven track record of over $600 million, Mr. Bokhari has led and served multinational and reputed local ICT conglomerates and public sector organizations, optimizing their business operations and transforming them into successful endeavors.Through keen assessment of needs, collation of strategic objectives, and alignment of targets, Mr. Bokhari has defined commercial goals based on identified markets, developed new products/programs and services, and delivered impressive results.
Mr. Bokhari is embarking on a new venture (DreamStream), seeking funding to bring their expertise and vision to life. With a passion for innovation and a drive for success, he is ready to lead a dynamic team toward a future of growth and prosperity. As a potential investor, one can trust that Mr. Bokhari will leverage their extensive experience, strategic mindset, and entrepreneurial spirit to deliver impressive returns on invested capital in the said startup Don't miss this opportunity to be a part of Mr. Bokhari's exciting journey toward success!
`,
  },
  {
    name: "Zeeshan Abbasi",
    title: "CTO",
    image: "/images/team2.png",
    description: `Introducing Mr Zeeshan Abbasi a distinguished technology lead and expert in hardware and software R&D with over two decades of experience. With a remarkable track record of delivering cutting-edge technology solutions, Mr. Abbasi is known for his expertise in identifying emerging technologies, driving innovation and adoption, and delivering exceptional results.As a consultant for technology at DreamStream, Mr. Abbasi leads the development of advanced  technology  solutions  that  drive  the  company's  growth  and  success.  His extensive experience in hardware and software R&D, combined with his passion for innovation and problem-solving, has allowed DreamStream to embark on its journey to revolutionize the travel industry. Zeeshan's technical expertise spans a wide range of areas, including cloud computing, artificial intelligence, machine learning, data analytics,  and  cybersecurity. He is a thought leader in the industry, known for identifying and leveraging new technologies to solve complex business problems.`,
  },
  {
    name: "Mustafa Khan",
    title: "Financial Council",
    image: "/images/team3.png",

    description: `Mustafa Khan (MK) is a strategic advisor and an entrepreneur focusing on strengthening the digital landscape and infrastructure by providing thought leadership, policy formulation, and operational support in  emerging  economies.  MK offers advisory 
services to start-up  ecosystems, entrepreneurial  ventures,  and  Small & Medium Enterprises (SMEs).MK offers consulting & mentoring services to aid them in transforming their ideas into workable business models. 
Mustafa is a Chartered Accountant from the Institute of Chartered Accountants  of Pakistan & Institute of Chartered Accountants of England and Wales. He also holds a 
Bachelor of Laws (LLB) degree.He is a CEDR Accredited mediator- from the UK and a Balance Scorecard Professional (BSP) from the USA.
`,
  },
  {
    name: "Beenish Askari",
    title: "Dir Products and Partnerships",
    image: "/images/team4.png",

    description: `Meet Ms. Beenish Askari, a dynamic business leader and the Director for Products and 
Partnerships at DreamStream. With 15 years of experience in the technology industry, 
Ms. Beenish has a proven track record of driving innovation and growth in product 
development, partnership management, and market expansion. Her expertise lies in 
identifying market trends, understanding customer needs, and delivering exceptional 
solutions that meet and exceed expectations.
As the Director for Products and Partnerships at DreamStream, Ms. Beenish leads a 
team of professionals to develop innovative products, drive strategic partnerships, and 
deliver value to customers.  Her  focus  on  customer  satisfaction  and  her  ability  to 
understand partners' needs has helped DreamStream achieve exceptional growth and 
success. With her vision and leadership, Beenish drives DreamStream toward a future of 
continued growth and
`,
  },
  {
    name: "Umar Haroon",
    title: "Dir Customer Success",
    image: "/images/team5.png",

    description:  `Meet Mr. Umer Haroon Khan, a highly experienced telecom professional with over 18 years of experience in delivering complex projects related to access and bearer networks. As the Director for Delivery & Operations on the ground, Umer is responsible for ensuring that projects are delivered on time and within budget while meeting the highest quality standards. With  his  deep  industry  knowledge  and  technical  expertise,  Mr.  Khan  has  successfully  managed  many  telecom projects, including large-scale network expansions, upgrades, and maintenance. He has a proven track record of delivering projects that meet or exceed customer expectations while optimizing operational efficiency and reducing costs.As  a  telecom  expert,  Mr.  Khan  is  highly  skilled in  managing SLA-based  operations, ensuring  that services are delivered to the highest standards of quality and reliability. He is known for his ability to develop and implement innovative  solutions  that  enhance  operational  performance  and  reduce  downtime  while  maximizing  customer satisfaction. Mr. Khan's commitment to excellence and extensive experience in the telecom sector make him an invaluable asset to any organization.`,
  },
  { name: "David Kim", title: "Legal Counsil", image: "/images/team6.png" },
];

const TeamSection: React.FC<TeamMemberProps> = () => {
  const [selectedType, setSelectedType] = useState<TeamMemberProps | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teamMember, setTeamMember] = useState(true);
  const getFirst25Words = (text = "") => {
    return (
      text.split(" ").slice(0, 25).join(" ") +
      (text.split(" ").length > 25 ? "..." : "")
    );
  };
  const handleTypeClick = (type: TeamMemberProps) => {
    setSelectedType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedType(null);
  };
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


     <div className="relative w-full pt-20 overflow-visible">
  {/* Background Gradient with Clip-Path */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      clipPath: "polygon(0 0, 100% 19%, 100% 100%, 0% 100%)",
      background: "linear-gradient(180deg, rgba(75, 29, 0, 0.35) 0%, rgba(28, 11, 2, 0) 100%)",
      // transform: "matrix(-1, 0, 0, 1, 0, 0)",
    }}
  />
    {/* 🔸 Content */}
    <div className="relative z-10 max-w-8xl mx-auto pt-35">
      <h2 className="text-[#FEE300] heading-s md:heading-m lg:heading-l text-center mb-12">
        OUR TEAM
      </h2>

   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  gap-4 justify-items-center">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="w-[400px] flex flex-col  bg-opacity-5 rounded-xl shadow-lg hover:bg-opacity-10 transition"
            >
              {/* Image */}
              <div className=" w-[400px] h-[330px] relative overflow-hidden ">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-contain "
                />
              </div>

              {/* Text - aligned left */}
              <div className="p-4 text-left">
                <p className="text-sm uppercase tracking-wide text-gray-300 mb-1">
                  {member.title}
                </p>
                <h4 className="font-semibold text-white">{member.name}</h4>
                {member.description && (
                  <p className="text-sm tracking-wide text-gray-300 text-justify">
                    {getFirst25Words(member.description)}
                    <button
                      className="text-[#FEE300] ml-2 underline text-xs"
                      onClick={() => handleTypeClick(member)}
                    >
                      See more
                    </button>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
</div>

      </div>
      <InfoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        data={selectedType}
        teamMember={teamMember}
      />
    </section>
  );
};
export default TeamSection;
