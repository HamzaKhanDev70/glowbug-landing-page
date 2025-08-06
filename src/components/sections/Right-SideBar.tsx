import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RightSidebar() {
  return (
    <div className="fixed right-4 top-0 h-screen w-[120px] flex flex-col justify-between items-end py-6 z-50 pointer-events-none">
      {/* Centered Social Icons */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-4 pointer-events-auto">
        {socialLinks.map((icon, index) => (
          <motion.div
            key={icon.href}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
              // viewport={{ once: false }}
            transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.2 }}
          >
            <Link href={icon.href} target="_blank">
              <Image
                src={icon.src}
                alt={icon.alt}
                width={22}
                height={16}
                className="hover:brightness-125 transition"
              />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Download Buttons at Bottom */}
      <div className="flex flex-col items-center gap-2 pointer-events-auto">
        {downloadButtons.map((btn, index) => (
          <motion.div
            key={btn.alt}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
              // viewport={{ once: false }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link href={btn.href}>
              <Image src={btn.src} alt={btn.alt} width={120} height={40} />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const socialLinks = [
  {
    href: "https://x.com/Dream_Stream_23",
    src: "/images/Vector.png",
    alt: "X",
  },
  {
    href: "https://www.tiktok.com/@dreamstream_magic",
    src: "/images/fi_3046120.png",
    alt: "TikTok",
  },
  {
    href: "https://www.threads.net",
    src: "/images/thread.png",
    alt: "Threads",
  },
  {
    href: "https://www.instagram.com/dreamstream_magic_in_motion/",
    src: "/images/Group 60.png",
    alt: "Instagram",
  },
];

const downloadButtons = [
  {
    href: "#",
    src: "/images/playStore.png",
    alt: "Get it on Google Play",
  },
  {
    href: "#",
    src: "/images/appStore.png",
    alt: "Download on the App Store",
  },
];
