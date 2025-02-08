import AadarshImg from "../../../public/images/Aadarsh-Chauhan.jpg";
import AshishImg from "../../../public/images/Aashish-Bade.jpg";
import AbhishekImg from "../../../public/images/Abhishek-Karn_Design-MSME.jpg";
import AaryaImg from "../../../public/images/Aarya-Pradhan.jpg";
import PlaceholderImg from "../../../public/images/Placeholder-Image.jpg";
import { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Rohit Ghatal",
    role: "Co-Founder at xyz",
    image: AadarshImg,
    message:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolorum totam, illum cumque sapiente quisquam!",
  },
  {
    name: "Birendra Dhami",
    role: "Manager at xyz",
    image: AshishImg,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolorum totam, illum cumque sapiente quisquam!",
  },
  {
    name: "Tilak Joshi",
    role: "Founder / CEO at xyz",
    image: AbhishekImg,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolorum totam, illum cumque sapiente quisquam!",
  },
  {
    name: "Aarya Pradhan",
    role: "Marketing Head",
    image: AaryaImg,
    message: "🚀 Great service! I'm very satisfied with the results...",
  },
  {
    name: "Rahul Risal",
    role: "Software Engineer",
    image: PlaceholderImg,
    message:
      "💡This was a game-changer for our business. Highly recommended...",
  },
];

const Testimonial: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="mt-2 w-[90%] mx-auto">
      <h2 className="font-semibold text-green-600 py-2 text-center text-2xl">
        What Our Clients Say:
      </h2>

      <div className="relative flex items-center justify-center mt-12 mb-4">
        <button
          className="absoulut left-0 p-1 bg-gray-200 min-w-12 h-12 rounded-full hover:bg-gray-300 transition"
          onClick={prevSlide}
        >
          &#10094;
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {testimonials.slice(index, index + 3).map((testimonial, i) => (
            <div
              key={i}
              className="bg-white shadow-sm p-6 rounded-xl text-center border border-gray-200 min-h-72 hover:shadow-lg transition-shadow cursor-pointer"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="flex justify-center -mt-20">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-36 h-36 rounded-full border-4 border-white"
                />
              </div>
              <p className="mt-4 text-gray-600">{testimonial.message}</p>
              <h4 className="mt-4 font-semibold text-orange-500">
                {testimonial.name}
              </h4>
              <span className="text-gray-500 text-sm">{testimonial.role}</span>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 p-1 bg-gray-200 w-12 h-12 rounded-full hover:bg-gray-300 transition"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
