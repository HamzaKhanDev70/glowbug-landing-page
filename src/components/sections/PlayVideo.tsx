import Image from 'next/image';

export default function PlayVideo() {
  return (
    <section className=" py-10 sm:py-24 md:py-32">
      <div className="relative w-full max-w-4xl mx-auto aspect-[16/9]">

        <div
          className="absolute inset-0"
        >
          <Image
            src="/images/playVideo.png"
            alt="Play Video"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </div>
    </section>
  );
} 