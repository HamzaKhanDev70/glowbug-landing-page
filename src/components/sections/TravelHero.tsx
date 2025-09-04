
interface TravelHeroProps {
  heading?: string;
  description?: string;
 
}

const TravelHero:React.FC<TravelHeroProps>=({heading,description})=> {
  return (
    <div
      className="z-10 w-full max-w-4xl flex flex-col items-center px-4 md:px-0 py-20  min-h-[220px] "
    >
      <h1 className="heading-s md:heading-xl font-bold mb-2 text-center leading-none wrap-break-word uppercase" >
        Your ulitmate 
      </h1>
     
      <h1 className=" text-[#FFE300] heading-m md:heading-l lg:heading-xl font-normal mb-2 text-center leading-none">
        TRAVEL COMPANION
      </h1>
      <h1 className="heading-s md:heading-xl font-bold mb-4 text-center leading-none wrap-break-word" >
        {heading}
      </h1>
      <p className="body-normal text-base md:text-xl text-gray-300 text-center max-w-4xl">
        {description}
      </p>
    </div>
  );
} 
export default TravelHero