import Image from "next/image";

export default function MobileAppShowcase() {
  return (
    <section className="relative w-full flex items-center justify-center bg-transparent z-20 py-16 px-4 md:px-8">
      <div className="max-w-[1200px] w-full mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10">
          
          {/* Left Block */}
          <div className="flex-1 flex justify-end">
            <div className="text-white text-center lg:text-right self-center lg:mt-22">
              <h1 className="heading-m md:heading-l lg:heading-xl font-bold mb-4">
                Elevate your entertainment
              </h1>
              <p className="body-normal leading-relaxed max-w-[500px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s.
              </p>
            </div>
          </div>
          {/* Image Block */}
          <div className="relative w-[300px] sm:w-[350px] md:w-[400px] h-[500px] sm:h-[550px] md:h-[600px] flex-shrink-0 flex items-center justify-center">
            <Image
              src="/images/group-41.png"
              alt="The Flash"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Right Block */}
          <div className="flex-1 flex justify- lg:mt-22">
            <div className="text-white text-center lg:text-left self-center ">
              <h1 className="heading-m md:heading-l lg:heading-xl font-bold mb-4">
                Experience magic in motion
              </h1>
              <p className="body-normal leading-relaxed max-w-[500px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It has survived not only five centuries but also the
                leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
