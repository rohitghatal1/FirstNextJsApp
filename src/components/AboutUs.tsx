import homeDesing from "../../../public/images/aboutUsImages/home-construction.jpg";
import constructingHome from "../../../public/images/aboutUsImages/constructionDesign.jpg";
import finalHomeDesing from "../../../public/images/aboutUsImages/finalHome.jpg";
import { useEffect, useState } from "react";
import Image from "next/image";

const AboutUs: React.FC = () => {
  const homePhotos = [homeDesing, constructingHome, finalHomeDesing];
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);
  const [prevPhotoIndex, setPrevPhotoIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevPhotoIndex(currentPhotoIndex); // Save the previous image
      setCurrentPhotoIndex((prev) => (prev + 1) % homePhotos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentPhotoIndex]);

  return (
    <div className="mt-4 w-[90%] mx-auto">
      <h2 className="font-semibold text-green-600 py-4 text-center text-2xl sm:text-3xl">
        About Us
      </h2>

      <div className="flex flex-col sm:flex-row p-4 gap-6 items-start">
        <div className="relative w-full sm:w-1/2 h-60 sm:h-[28rem] overflow-hidden rounded-xl">
          {/* Previous Image (Fade Out) */}
          {prevPhotoIndex !== null && (
            <Image
              key={`prev - ${prevPhotoIndex}`}
              src={homePhotos[prevPhotoIndex]}
              alt={`Slide ${prevPhotoIndex + 1}`}
              className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100"
            />
          )}

          {/* Current Image (Fade In) */}
          <Image
            key={`current - ${currentPhotoIndex}`}
            src={homePhotos[currentPhotoIndex]}
            alt={`Slide ${currentPhotoIndex + 1}`}
            className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 opacity-0 animate-fade-in"
            priority
          />
        </div>

        <div className="w-full sm:w-1/2 text-center sm:text-left sm:mt-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            What we do
          </h2>
          <p className="mt-2 text-gray-600 leading-relaxed">
            We connect{" "}
            <span className="font-semibold text-green-500">Homeowners</span> to
            the{" "}
            <span className="font-semibold text-green-500">
              Trained and Professional MSMEs
            </span>{" "}
            who are specialized in home design, construction, and final
            finishing. Our goal is to bring your dream home to life with expert
            craftsmanship and innovative designs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
