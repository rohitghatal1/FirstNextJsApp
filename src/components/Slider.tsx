"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Banner from "../../../public/images/Eco-Friendly_Home.jpg";
import Banner1 from "../../../public/images/homeImage1.jpg";
import Banner2 from "../../../public/images/homeImage2.jpeg";

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [Banner, Banner1, Banner2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white px-4 py-12 md:py-20 h-[80vh]">
      <div className="w-[90%] mx-auto h-full flex items-center justify-between">
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-green-600 uppercase font-semibold tracking-wide">
            Why Compromise?
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Build Sustainable. <br />
            Live Eco-Friendly.
          </h1>
          <p className="text-lg text-gray-600">
            Discover a new way to build your dream home while preserving nature.
            Join us in creating a greener tomorrow, one eco-friendly home at a
            time.
          </p>

          <p className="text-green-600 font-semibold text-sm">
            AVAILABLE IN YOUR CITY
          </p>

          <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
            Book Advisor for FREE
          </button>
        </div>

        <div className="relative md:w-1/2 mt-8 md:mt-0 flex items-center justify-center">
          <div className="w-11/12 h-96 overflow-hidden rounded-md">
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-fill"
            />
          </div>

          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-100 text-gray-600 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-200"
            onClick={prevSlide}
          >
            &#8592;
          </button>

          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-100 text-gray-600 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-200"
            onClick={nextSlide}
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
