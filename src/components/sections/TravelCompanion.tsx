import Image from "next/image";

export default function TravelCompanion() {
  return (
    <section
      className="py-30 flex items-center justify-center bg-dark-900 text-white m-22 bg-cover bg-position-center rounded-xl overflow-hidden"
      style={{ backgroundImage: "url('/images/MainHeader.png')" }}
    >
      <div className="w-full flex flex-col items-center">

        <div className="z-10 w-[60%] flex flex-col items-center" style={{ padding: "100px" }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            YOUR ULTIMATE
          </h1>
          <h1 className="text-yellow-500 text-4xl md:text-6xl font-bold mb-6 leading-tight">
            TRAVEL COMPANION
          </h1>
          <p className="font-grostek text-lg md:text-xl text-dark-300 mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text of the printing.
          </p>
        </div>

        <div className="w-full flex flex-col items-center" >
          <img
            src="/images/ListenMusic.png"
            alt="Header Logo"
            className="w-[80%] mx-10 pt-60"
          />

        </div>

        <div className="w-full flex flex-col items-center p-30">
          <h2 className="text-3xl font-bold">Elevate your <br/>entertainment</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
        </div>
      </div>
    </section>
  );
}
