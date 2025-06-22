export default function EntertainmentCTA() {
  return (
    <div className="w-full flex flex-col items-center py-12 md:py-20 text-center">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-16">
        <span className="text-white">ELEVATE</span>
        <br className="md:hidden" />
        <span className="text-pink-500">YOUR ENTERTAINMENT</span>
      </h1>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <button className="bg-blue-500 text-white px-8 py-3 md:px-12 md:py-4 rounded-full text-lg md:text-xl hover:bg-blue-600 transition-colors">
          EXPERIENCE
        </button>
        <button className="bg-blue-500 text-white px-8 py-3 md:px-12 md:py-4 rounded-full text-lg md:text-xl hover:bg-blue-600 transition-colors">
          DOWNLOAD
        </button>
      </div>
    </div>
  );
} 