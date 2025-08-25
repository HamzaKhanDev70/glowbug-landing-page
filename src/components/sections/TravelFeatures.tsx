export default function TravelFeatures() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between px-4 sm:px-8 md:px-12 lg:px-24 py-8 md:py-12 lg:py-16 gap-12 md:gap-10 ">
      {/* Left Section */}
      <div className="flex-1 text-center md:text-right">
        <h2 className="heading-l md:heading-l lg:heading-xl mb-4 whitespace-normal text-balance break-words" style={{ fontFamily: '"Right Grotesk Medium", sans-serif' }}>
          Elevate your
          <br />
          entertainment
        </h2>
        <p className="body-normal text-sm max-w-md md:ml-auto md:text-right">
          DreamStream is the only engagement platform that’s ubiquitously available without download or the internet for travellers across the world who want freedom, choice and control of their entertainment where there’s no other service available.
        </p>
      </div>
      {/* Right Section */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="heading-l md:heading-l lg:heading-xl mb-4" style={{ fontFamily: '"Right Grotesk Medium", sans-serif' }}>
          Experience
          <br />
          magic in motion
        </h2>
        <p className="body-normal text-sm max-w-md md:mr-auto md:text-left">
          DreamStream offers a compelling experience across different travel mediums such as aircrafts, buses, trains, and ferries/cruises with a ubiquitous content catalogue for travellers to enjoy the latest and most popular content using BYOD over web portal and/or mobile app just by connecting to DreamStream Wi-Fi in-lounge and onboard to let the magic begin.
        </p>
      </div>
    </div>
  );
}
