export default function TravelFeatures() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12 lg:py-16 gap-12 md:gap-10">
      <div className="flex-1 text-center md:text-right">
      <h2 className="font-grotesk text-3xl md:text-4xl font-bold mb-4">
      Elevate your
          <br />
          entertainment
        </h2>
        <p style={{ fontFamily: 'Inter, sans-serif' }}>
          Lorem Ipsum is simply dummy text of the printing and <br />
          typesetting industry.Lorem Ipsum has been the  <br />
          industry's standard dummy text ever since the 1500s.<br />
          When an unknown printer took a galley of type and  <br />
          scrambled it to make a type specimen book.It has<br />
          survived not only five centuries,
        </p>
      </div>

      <div className="flex-1 text-center md:text-left">
      <h2 className="font-grotesk text-3xl md:text-4xl font-bold mb-4">
      Experience
          <br />
          magic in motion
        </h2>
        <p style={{ fontFamily: 'Inter, sans-serif' }}>
        Lorem Ipsum is simply dummy text of the printing and <br />
          typesetting industry.Lorem Ipsum has been the  <br />
          industry's standard dummy text ever since the 1500s.<br />
          When an unknown printer took a galley of type and  <br />
          scrambled it to make a type specimen book.It has<br />
          survived not only five centuries,
        </p>
      </div>
    </div>
  );
} 