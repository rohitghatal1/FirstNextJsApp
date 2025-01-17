// import Image from "next/image"; // Optional for optimized images

const Banner: React.FC = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url(/assets/images/ecoFriendlyhome.webp)",
      }}
    >
      <div className="absolute inset-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-white h-full">
        <h1 className="text-5xl font-bold mb-4">Discover your place to live</h1>
        <p className="text-lg mb-6 max-w-2xl text-center">
          We have made our quality development a hallmark by incorporating the
          latest in contemporary architecture to suit your tastes and budget.
        </p>
      </div>
    </div>
  );
};

export default Banner;
