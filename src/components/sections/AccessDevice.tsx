import Image from 'next/image';

export default function AccessDevice() {
  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26 4H6C4.89543 4 4 4.89543 4 6V26C4 27.1046 4.89543 28 6 28H26C27.1046 28 28 27.1046 28 26V6C28 4.89543 27.1046 4 26 4Z" stroke="#00A3FF" strokeWidth="2"/>
          <path d="M10 12H22M10 16H22M10 20H16" stroke="#00A3FF" strokeWidth="2"/>
        </svg>
      ),
      title: "Bring your own device",
      description: "For travelers across the World who want freedom, choice, and control of their entertainment."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4C19.713 4 23.274 5.475 25.8995 8.1005C28.525 10.726 30 14.287 30 18C30 21.713 28.525 25.274 25.8995 27.8995C23.274 30.525 19.713 32 16 32" stroke="#00A3FF" strokeWidth="2"/>
          <path d="M16 28C12.287 28 8.726 26.525 6.1005 23.8995C3.475 21.274 2 17.713 2 14C2 10.287 3.475 6.726 6.1005 4.1005C8.726 1.475 12.287 0 16 0" stroke="#00A3FF" strokeWidth="2" strokeDasharray="2 2"/>
        </svg>
      ),
      title: "No wifi or download",
      description: "For travelers across the World who want freedom, choice, and control of their entertainment."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="#00A3FF" strokeWidth="2"/>
          <path d="M16 10V16L20 20" stroke="#00A3FF" strokeWidth="2"/>
        </svg>
      ),
      title: "Free access during travel",
      description: "For travelers across the World who want freedom, choice, and control of their entertainment."
    }
  ];

  return (
    <section className="relative w-full bg-black overflow-hidden py-16 lg:py-0 lg:min-h-screen lg:flex lg:items-center">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative w-full max-w-lg mx-auto aspect-square">
          <div className="absolute inset-0 rounded-3xl lg:rounded-[48px] bg-[#003366]">
            <Image
              src="/images/flash.png"
              alt="Entertainment Interface"
              fill
              className="object-cover rounded-[18px]"
              priority
            />
      
            <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 items-center">
              <div className="text-white text-sm">KHI</div>
              <div className="h-24 md:h-32 w-0.5 bg-yellow-400"></div>
              <div className="text-white text-sm">ISB</div>
            </div>
          </div>
        </div>

        <div className="text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-grotesk leading-none mb-4 text-white">
            ACCESS ON YOUR OWN DEVICE:
            <span className="block text-[#00A3FF]">ANYWHERE. ANY TIME.</span>
          </h2>
          <p className="text-white text-lg mb-8 lg:mb-16 max-w-md lg:max-w-[600px] mx-auto lg:mx-0">
            Dream Stream is the only engagement platform that's ubiquitously available without download or
            the internet, for travellers across the World who want freedom, choice, and control of the.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-white text-xl font-medium mb-4">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 