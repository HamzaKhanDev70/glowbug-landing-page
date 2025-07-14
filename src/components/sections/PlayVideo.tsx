"use client";

import Image from "next/image";
import { useState } from "react";
import VideoModal from "./Video-modal";

export default function PlayVideo() {
  const [isOpen, setIsOpen] = useState(false);

  const openVideo = () => setIsOpen(true);
  const closeVideo = () => setIsOpen(false);

  return (
    <section className="py-10 sm:py-24 md:py-32">
      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-8">
        <div
          className="relative aspect-[16/9] w-full cursor-pointer"
          onClick={openVideo}
        >
          <Image
            src="/images/playVideo.png"
            alt="Play Video"
            fill
            className="object-contain"
            priority
          />
        </div>

        {isOpen && (
         <VideoModal isOpen={isOpen} onClose={closeVideo} videoURL="/videos/music.mp4"/>
        )}
      </div>
    </section>
  );
}
