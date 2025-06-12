
export default function EntertainmentCTA() {
  return (
    <div className="w-full flex flex-col items-center py-20 text-center">
      <h1 className="text-7xl font-bold mb-16">
        <span className="text-white">ELEVATE</span>
        <span className="text-pink-500">YOUR ENTERTAINMENT</span>
      </h1>

      <div className="flex gap-8">
        <button className="bg-blue-500 text-white px-12 py-4 rounded-full text-xl hover:bg-blue-600 transition-colors">
          EXPERIENCE
        </button>
        <button className="bg-blue-500 text-white px-12 py-4 rounded-full text-xl hover:bg-blue-600 transition-colors">
          DOWNLOAD
        </button>
      </div>
    </div>
  );
} 