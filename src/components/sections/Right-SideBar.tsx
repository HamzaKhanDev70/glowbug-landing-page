import Image from "next/image";
import Link from "next/link";

export default function RightSidebar() {
  return (
    <div className="fixed right-4 top-0 h-screen w-[120px] flex flex-col justify-between items-end py-6 z-50 pointer-events-none">
      {/* Centered Social Icons */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-4 pointer-events-auto">
        <Link href="https://x.com/Dream_Stream_23" target="_blank">
          <Image
            src="/images/Vector.png"
            alt="X"
            width={22}
            height={18}
            className="hover:brightness-125 transition"
          />
        </Link>
        <Link href="https://www.tiktok.com/@dreamstream_magic" target="_blank">
          <Image
            src="/images/fi_3046120.png"
            alt="TikTok"
            width={22}
            height={16}
            className="hover:brightness-125 transition"
          />
        </Link>
        <Link href="https://www.threads.net" target="_blank">
          <Image
            src="/images/thread.png"
            alt="Threads"
            width={22}
            height={16}
            className="hover:brightness-125 transition"
          />
        </Link>
        <Link href="https://www.instagram.com/dreamstream_magic_in_motion/" target="_blank">
          <Image
            src="/images/Group 60.png"
            alt="Instagram"
            width={22}
            height={16}
            className="hover:brightness-125 transition"
          />
        </Link>
      </div>

      {/* Download Buttons at Bottom */}
      <div className="flex flex-col items-center gap-2 pointer-events-auto">
        <Link href="#">
          <Image
            src="/images/playStore.png"
            alt="Get it on Google Play"
            width={120}
            height={40}
          />
        </Link>
        <Link href="#">
          <Image
            src="/images/appStore.png"
            alt="Download on the App Store"
             width={120}
            height={40}
          />
        </Link>
      </div>
    </div>
  );
}
