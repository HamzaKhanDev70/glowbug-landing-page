import ComingSoon from "@/components/sections/ComingSoon";
import Image from "next/image"; // ✅ use next/image, not lucide-react Image

export default function HowItWorksPage() {
  return (
    <main className="relative pt-25 p-10">
      {/* <ComingSoon /> */}

      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50">
        <div className="relative w-[90%] max-w-5xl h-[68%] ">
          {/* SVG with red outline */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full z-0"
          >
            <polygon
              points="0,9 100,2 100,98 0,90"
              fill="white"
              stroke="brown"
              strokeWidth="0.8"
            />
          </svg>
          <button className="absolute top-4 right-[3%] z-30 w-8 h-8   hover:bg-black/70 text-black flex items-center justify-center text-lg">
            ✕
          </button>
          {/* Content inside clipped shape */}
          <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center px-6 py-4 gap-4 z-10">
            {/* Left side image */}
            <div className="w-full sm:w-1/2 h-40 sm:h-full flex items-center justify-center">
              <img
                src="/images/train.png"
                alt="Preview"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Right side text */}
            <div className="w-full sm:w-1/2 text-center sm:text-left">
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                Modal Heading
              </h2>
              <p className="text-sm md:text-base text-gray-700">
                This is a paragraph inside a clipped shape modal with a red
                outline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
