import Image from "next/image";

export default function MobileAppShowcase() {
  return (
    // <section className="relative w-full flex items-center justify-center bg-transparent z-20 px-4 md:px-8 ">
    //   <div className="max-w-[1400px] w-full mx-auto">
    //     <div className="flex flex-col md:flex-row items-center lg:items-start justify-center gap-10 md:gap-0 xl:gap-10  lg:px-12">
   
    //       <div className="flex-1 flex justify-end">
    //         <div className="text-white text-center lg:text-left self-center lg:mt-22">
    //           <h1 className="heading-m  font-normal mb-4" style={{ fontFamily: '"Right Grotesk Medium", sans-serif' }}>
    //             Elevate your entertainment
    //           </h1>
    //           <p className="body-normal-a leading-relaxed max-w-[500px]">
    //             Lorem Ipsum is simply dummy text of the printing and typesetting
    //             industry. Lorem Ipsum has been the industry's standard dummy
    //             text ever since the 1500s, when an unknown printer took a galley
    //             of type and scrambled it to make a type specimen book. It has
    //             survived not only five centuries, but also the leap into
    //             electronic typesetting, remaining essentially unchanged. It was
    //             popularised in the 1960s with the release of Letraset sheets
    //             containing Lorem Ipsum passages, and more recently with desktop
    //             publishing software like Aldus PageMaker including versions of
    //             Lorem Ipsum.
    //           </p>
    //         </div>
    //       </div>

    //       <div className="relative w-[300px] sm:w-[350px] lg:w-[400px] h-[400px] sm:h-[450px] md:h-[550px] flex-shrink-0 flex items-center justify-center">
    //         <Image
    //           src="/images/group-41.png"
    //           alt="The Flash"
    //           fill
    //           className="object-cover rounded-xl"
    //         />
    //       </div>

          
    //       <div className="flex-1 flex justify- lg:mt-22">
    //         <div className="text-white text-center lg:text-left self-center ">
    //           <h1 className="heading-m  font-normal mb-4" style={{ fontFamily: '"Right Grotesk Medium", sans-serif' }}>
    //             Experience magic in motion
    //           </h1>
    //           <p className="body-normal-a leading-relaxed max-w-[500px]">
    //             Lorem Ipsum is simply dummy text of the printing and typesetting
    //             industry. Lorem Ipsum has been the industry's standard dummy
    //             text ever since the 1500s, when an unknown printer took a galley
    //             of type and scrambled it to make a type specimen book. It has
    //             survived not only five centuries, but also the leap into
    //             electronic typesetting, remaining essentially unchanged. It was
    //             popularised in the 1960s with the release of Letraset sheets
    //             containing Lorem Ipsum passages, and more recently with desktop
    //             publishing software like Aldus PageMaker including versions of
    //             Lorem Ipsum.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
 <section className="relative w-full flex items-center justify-center bg-transparent z-20 px-4 md:px-8">
  <div className="max-w-[1200px] w-full mx-auto ">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 xl:gap-16 items-center ">

      {/* Left Block */}
      <div className="text-white text-center md:text-left self-center">
        <h1
          className="heading-s sm:heading-m  font-normal mb-4" style={{ fontFamily: '"Right Grotesk Medium", sans-serif' }}
        >
          Elevate your entertainment
        </h1>
        
               <p className="body-normal-a leading-relaxed max-w-[500px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                 industry. Lorem Ipsum has been the industry's standard dummy
                 text ever since the 1500s, when an unknown printer took a galley
                 of type and scrambled it to make a type specimen book. It has
                 survived not only five centuries, but also the leap into
                 electronic typesetting, remaining essentially unchanged. It was
                 popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                 publishing software like Aldus PageMaker including versions of
               Lorem Ipsum.
               </p>
        
      </div>

      {/* Image Block */}
      <div className="relative w-full h-[400px] sm:h-[450px] md:h-[550px] flex items-center justify-center">
        <div className="relative w-[300px] sm:w-[350px] lg:w-[400px] h-full">
          <Image
            src="/images/group-41.png"
            alt="The Flash"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Right Block */}
      <div className="text-white text-center md:text-left self-center">
        <h1
          className="heading-s md:heading-m font-normal mb-4"
          style={{ fontFamily: '"Right Grotesk Medium", sans-serif' }}
        >
          Experience magic in motion
        </h1>
          <p className="body-normal-a leading-relaxed max-w-[500px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                 industry. Lorem Ipsum has been the industry's standard dummy
                 text ever since the 1500s, when an unknown printer took a galley
                 of type and scrambled it to make a type specimen book. It has
                 survived not only five centuries, but also the leap into
                 electronic typesetting, remaining essentially unchanged. It was
                 popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                 publishing software like Aldus PageMaker including versions of
               Lorem Ipsum.
               </p>
      </div>

    </div>
  </div>
</section>


  );
}
