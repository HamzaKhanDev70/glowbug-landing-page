import Link from "next/link";

export default function EntertainmentCTA() {
  return (
    <div className="w-full flex flex-col items-center py-12 md:py-20 text-center">
      <h1 className="grotesk-tight text-[50px] sm:text-[83px] md:text-[94px] lg:text-[128px] mb-12 md:mb-20 whitespace-nowrap" style={{ fontFamily: '"Right Grotesk Tight", sans-serif' }}>
        <span className="text-white">ELEVATE</span>{" "}
        <br className="sm:hidden" />
        <span className="text-pink-500">YOUR ENTERTAINMENT</span>
      </h1>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 mt-16">
        <div className="w-full md:w-auto bg-blue-500  px-8 py-3 md:px-12 md:py-4 rounded-full body-normal hover:bg-blue-600 transition-colors">
        
          <Link href="/experience" aria-label="Experience">
          EXPERIENCE
            </Link>
        </div>
        <div className="w-full md:w-auto bg-blue-500  px-8 py-3 md:px-12 md:py-4 rounded-full body-normal hover:bg-blue-600 transition-colors mt-8 md:mt-0 md:ml-12">
         
          <Link href="#footer" aria-label="Footer">
          DOWNLOAD
            </Link>
        </div>
      </div>
    </div>
  );
} 