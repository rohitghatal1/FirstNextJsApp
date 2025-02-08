import Slider from "@/components/Slider";
import Testimonial from "@/components/Testimonials";
import { FaLeaf } from "react-icons/fa";
import { SiCodefresh } from "react-icons/si";
import { TbBulb } from "react-icons/tb";

const Home: React.FC = () => {
  return (
    <div className="relative">
      <Slider />

      <div className="bg-blue-100 px-4 py-6 min-h-40">
        <div className="w-full sm:w-[90%] h-full mx-0 sm:mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="min-h-14 min-w-14 sm:h-14 sm:w-16 rounded-full px-4 sm:p-2 sm:px-4 bg-green-600 flex items-center justify-center">
              <FaLeaf color="white" className="w-full h-full" />
            </div>
            <div>
              <h3 className="text-green-600 uppercase font-semibold text-xl tracking-wide">
                Sustainable Materials
              </h3>
              <p className="text-sm sm:text-lg text-gray-700 text-justify">
                We prioritize eco-friendly and renewable building materials
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="min-h-14 min-w-14 sm:h-14 sm:w-16 rounded-full px-4 sm:p-2 sm:px-4 bg-green-600 flex items-center justify-center">
              <TbBulb color="white" className="h-full w-full" />
            </div>
            <div>
              <h3 className="text-green-600 uppercase font-semibold text-xl tracking-wide">
                Energy-Efficient Solutions
              </h3>
              <p className="text-sm sm:text-lg text-gray-700 text-justify">
                Our designs focus on reducing energy consumption and maximizing
                efficiency.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="min-h-14 min-w-14 sm:h-14 sm:w-16 rounded-full px-4 sm:p-2 sm:px-4 bg-green-600 flex items-center justify-center">
              <SiCodefresh color="white" className="h-full w-full" />
            </div>
            <div>
              <h3 className="text-green-600 uppercase font-semibold text-xl tracking-wide">
                Healthier Homes
              </h3>
              <p className="text-sm sm:text-lg text-gray-700 text-justify">
                Using eco-friendly paints and materials ensures cleaner indoor
                air quality
              </p>
            </div>
          </div>
        </div>
      </div>

      <Testimonial />
    </div>
  );
};

export default Home;
