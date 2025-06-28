import Image from 'next/image';

export default function AccessDevice() {
  const features = [
    {
      icon: (
        <Image src="/images/icon1.png" alt="Bring your own device" width={32} height={32} />
      ),
      title: "Bring your own device",
      description: "For travellers across the World who want freedom, choice, and control of their entertainment."
    },
    {
      icon: (
        <Image src="/images/icon2.png" alt="No wifi or download" width={32} height={32} />
      ),
      title: "No wifi or download",
      description: "For travellers across the World who want freedom, choice, and control of their entertainment."
    },
    {
      icon: (
        <Image src="/images/icon3.png" alt="Free access during travel" width={32} height={32} />
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

      <div className="relative w-full lg:w-[40%] flex items-center justify-center px-4 sm:px-12 py-8 sm:py-12 lg:py-0" style={{background: 'linear-gradient(200deg, #002127 15%, #000D11 100%)', clipPath: 'polygon(2% 0, 100% 0, 100% 100%, 0 100%)', overflow: 'visible'}}>
        <div className="w-auto md:w-full max-w-none md:max-w-full text-left" style={{overflow: 'visible'}}>
          <div className="w-full">
            <h2 className="uppercase font-grotesk text-white text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-normal mb-2 sm:mb-4" style={{ letterSpacing: '0.04em', fontWeight: 500 }}>
              <span className="whitespace-normal md:whitespace-nowrap" style={{ textWrap: 'balance' }}>Access on your own device:</span>
            </h2>
            <h2 className="uppercase font-grotesk text-white text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-normal mb-2 sm:mb-4" style={{ letterSpacing: '0.29em', fontWeight: 500 }}>
              <span className="block text-[#00A3FF] font-bold ">ANYWHERE. ANY TIME.</span>
            </h2>
          </div>
          <p className="text-white text-xs sm:text-base md:text-lg mb-4 sm:mb-8 max-w-full" style={{ fontFamily: 'Inter, sans-serif', wordBreak: 'break-word' }}>
            Dream Stream is the only engagement platform that's ubiquitously available without download or the internet, for travellers across the World who want freedom, choice, and control of the.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex-1 flex flex-col items-start text-left min-w-0">
                <div className="mb-2 sm:mb-4">{feature.icon}</div>
                <h3 className="text-white text-sm sm:text-lg font-semibold mb-1 sm:mb-2 leading-tight" style={{ fontFamily: 'Right-grostek', fontWeight: 800 }}>{feature.title}</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-snug" style={{ fontFamily: 'Inter, sans-serif', wordBreak: 'break-word' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 