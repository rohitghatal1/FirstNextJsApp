// import Image from "next/image"; // Optional for optimized images
import banner from "../../assets/images/ecoFriendlyhome.webp";

const Banner: React.FC = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${banner.src})`, // Use `.src` to get the image path
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
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
