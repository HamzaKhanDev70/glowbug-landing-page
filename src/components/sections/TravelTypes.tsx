interface TravelTypeProps {
  title: string;
  type: string;
  image: string;
  description: string;
}

function TravelType({ title, type, image, description }: TravelTypeProps) {
  return (
    <div className="flex gap-24 items-center mb-40 last:mb-0">
      <div className="relative w-[420px] h-[420px] flex-shrink-0">
        <div className="absolute inset-0 overflow-hidden rounded-[32px] transform rotate-6">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="flex flex-col mb-6">
          <span className="text-[64px] font-grotesk leading-none text-white">{title}</span>
          <span className="text-2xl font-grotesk text-gray-400 mt-2">{type}</span>
        </h3>
        <p className="text-gray-200 text-lg leading-relaxed max-w-[600px]">{description}</p>
      </div>
    </div>
  );
}

export default function TravelTypes() {
  const travelTypes = [
    {
      title: "PLANE",
      type: "TRAVEL",
      image: "/images/plane.png",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      title: "BUS",
      type: "TRAVEL",
      image: "/images/buss.png",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      title: "BOAT",
      type: "TRAVEL",
      image: "/images/ship.png",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      title: "TRAIN",
      type: "TRAVEL",
      image: "/images/train.png",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      title: "HOTEL",
      type: "",
      image: "/images/hotel.png",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }
  ];

  return (
    <section className="relative -mt-40">
      <div className="absolute top-0 left-5 right-5 md:left-20 md:right-20 h-full">
        <div 
          className="absolute top-0 left-0 right-0 h-[150%] bg-gradient-to-b from-[#4A1D00] to-black"
          style={{
            clipPath: 'polygon(120px 0, 100% 0, 100% 100%, 0 100%, 0 120px)'
          }}
        />
      </div>
      
      <div className="relative pt-72 pb-32">
        <div className="max-w-[1400px] mx-auto px-5 md:px-20">
          {travelTypes.map((type, index) => (
            <TravelType key={index} {...type} />
          ))}
        </div>
      </div>
    </section>
  );
} 