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
      description: "For travellers across the World who want freedom, choice, and control of their entertainment."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4C19.713 4 23.274 5.475 25.8995 8.1005C28.525 10.726 30 14.287 30 18C30 21.713 28.525 25.274 25.8995 27.8995C23.274 30.525 19.713 32 16 32" stroke="#00A3FF" strokeWidth="2"/>
          <path d="M16 28C12.287 28 8.726 26.525 6.1005 23.8995C3.475 21.274 2 17.713 2 14C2 10.287 3.475 6.726 6.1005 4.1005C8.726 1.475 12.287 0 16 0" stroke="#00A3FF" strokeWidth="2" strokeDasharray="2 2"/>
        </svg>
      ),
      title: "No wifi or download",
      description: "For travellers across the World who want freedom, choice, and control of their entertainment."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="#00A3FF" strokeWidth="2"/>
          <path d="M16 10V16L20 20" stroke="#00A3FF" strokeWidth="2"/>
        </svg>
      ),
      title: "Free access during travel",
      description: "For travellers across the World who want freedom, choice, and control of their entertainment."
    }
  ];

  return (
    <section className="relative w-full min-h-[600px] bg-black overflow-hidden flex flex-col lg:flex-row">
      <div className="relative w-full lg:w-1/2 flex items-center justify-center bg-black">
        <div className="relative w-full lg:w-[60%] h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <Image
            src="/images/flash.png"
            alt="Entertainment Interface"
            fill
            className="object-cover object-right"
            priority
          />
        </div>
      </div>

      <div className="relative w-full lg:w-[40%] flex items-center justify-center px-4 py-12 lg:py-0" style={{background: 'linear-gradient(120deg, #002127 60%, #000D11 100%)', clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0 100%)'}}>
        <div className="max-w-xl w-full text-left">
          <div className="w-full overflow-x-auto">
            <h2 className="uppercase font-grotesk text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal  mb-4" style={{ letterSpacing: '0.04em', fontWeight:"500" }}>
              <span className="whitespace-nowrap">Access on your own device:</span>
            </h2>
            <h2 className="uppercase font-grotesk text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal  mb-4" style={{ letterSpacing: '0.29em', fontWeight:"500" }}>
              <span className="block text-[#00A3FF] font-bold">ANYWHERE. ANY TIME.</span>
            </h2>
          </div>
          <p className="text-white text-base sm:text-lg md:text-xl mb-8 max-w-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
            Dream Stream is the only engagement platform that's ubiquitously available without download or the internet, for travellers across the World who want freedom, choice, and control of the.
          </p>
          <div className="flex flex-col sm:flex-row gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex-1 flex flex-col items-start text-left">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-white text-lg font-semibold mb-2 leading-tight" style={{ fontFamily: 'Right-grostek', fontWeight:"800" }}>{feature.title}</h3>
                <p className="text-white/60 text-sm leading-snug" style={{ fontFamily: 'Inter, sans-serif' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 