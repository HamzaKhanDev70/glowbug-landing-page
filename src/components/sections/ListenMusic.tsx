import Image from 'next/image';

export default function ListenMusic() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden">
      <div
        className="max-w-[1400px] mx-auto px-8 w-full justify-center items-center"
        style={{
          background: 'linear-gradient(90deg, #002127 0%, #000D11 100%)',
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 120px 100%, 0 calc(100% - 120px))'
        }}
      >
        <div className="w-full max-w-6xl pt-40 pb--30 overflow-hidden">
          <div className="relative" style={{ paddingBottom: '50%' }}> 
            <Image
              src="/images/ListenMusic.png"
              alt="Listen to Music"
              width={1600}
              height={900}
              className="absolute top-0 left-0 w-full h-full object-cover drop-shadow-2xl"
              priority
              style={{ objectPosition: 'center top' }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}