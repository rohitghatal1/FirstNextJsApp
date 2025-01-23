import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import aaryaPradhanImg from "../../../public/images/Aarya-Pradhan.jpg";
import AadarshChauhanImg from "../../../public/images/Aadarsh-Chauhan.jpg";
import AashishBadeImg from "../../../public/images/Aashish-Bade.jpg";
import AbhishekImg from "../../../public/images/Abhishek-Karn_Design-MSME.jpg";
import Link from "next/link";

const DesignMSME: React.FC = () => {
  const designMsmeList = [
    {
      _id: 1,
      img: aaryaPradhanImg,
      name: "Ar. Aarya Pradhan",
      organization: "Wonaw & Associates",
      address: "Lalitpur MetroPolitan-15, Satdobato",
      mobile: "9861334812",
      email: "aarya@wonaw.com",
    },
    {
      _id: 2,
      img: AashishBadeImg,
      name: "Ar. Aashish Bade",
      organization: "JA: Architecture & Desion Studio",
      address: "Banepa, Kavre, Bagmati Province",
      mobile: "9818719371",
      email: "aasisbade@gmail.com",
    },
    {
      _id: 3,
      img: AbhishekImg,
      name: "Er. Abhishek Karn",
      organization: "Engineering Designs and Intellect (EDI) Pvt. Ltd.",
      address: "Kathmandu, Kathmandu Metropolitan City -13, Bagmati Province",
      mobile: "9852074007",
      email: "karnabhishek47@gmail.com",
    },
    {
      _id: 4,
      img: AadarshChauhanImg,
      name: "Er. Adarsha Chauhan",
      organization: "Freelancer",
      address: "Kritipur-2, Kathmandu, Bagmati Province",
      mobile: "9860205897",
      email: " adarsha.2030@gmail.com",
    },
  ];

  return (
    <div className="p-6 h-[80vh] overflow-y-auto mt-16 bg-gray-100 rounded-lg shadow-md">
      <div className="w-[90%] mx-auto flex flex-col items-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Design MSMEs</h2>
        <p className="text-center text-gray-600 py-2 mb-6">
          Here are Some best trained Design MSMEs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {designMsmeList?.map((designMsme, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-lg shadow-md p-4 hover:shadow-lg transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <Image src={designMsme?.img} alt="msmeImage" />
                <div className="text-gray-700">
                  <p className="font-semibold text-sm mb-2">
                    <span className="text-gray-500">Name:</span>{" "}
                    {designMsme?.name}
                  </p>
                  <p className="font-semibold text-sm mb-2">
                    <span className="text-gray-500">Organization:</span>{" "}
                    {designMsme?.organization}
                  </p>
                  <p className="font-semibold text-sm mb-2">
                    <span className="text-gray-500">Address:</span>{" "}
                    {designMsme?.address}
                  </p>
                  <p className="font-semibold text-sm mb-2">
                    <span className="text-gray-500">Mobile:</span>{" "}
                    {designMsme?.mobile}
                  </p>
                  <p className="font-semibold text-sm mb-2">
                    <span className="text-gray-500">Email:</span>{" "}
                    {designMsme?.email}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Link href={`/professional-profile/${designMsme?._id}`}>
                  <button className="flex items-center justify-center bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded hover:bg-blue-600 transition">
                    <FaExternalLinkAlt className="mr-2" />
                    View Profile
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignMSME;
