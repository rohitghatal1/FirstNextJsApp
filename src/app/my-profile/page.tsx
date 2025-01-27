"use client";
import Image from "next/image";
import ProfilePic from "../../../public/images/Eco-Friendly_Home.jpg";
import CoverPhoto from "../../../public/images/homeImage1.jpg";
import { useEffect, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { Button, Drawer, Form, Input } from "antd";
import Link from "next/link";
import axios from "axios";
import Posts from "@/components/Posts";

const ProfilePage: React.FC = () => {
  const [userData, setUserData] = useState<any>();
  const [activeTab, setActiveTab] = useState<any>("about");
  const [isViewProfessionalProfileOpen, setIsViewProfessionalProfileOpen] =
    useState<boolean>(true);
  const [isEditProfileDrawerOpen, setIsEditProfileDrawerOpen] =
    useState<boolean>(false);

  const getConfigData = async () => {
    const response = await axios.get("/users/getConfig");
    setUserData(response?.data?.userData);
  };

  useEffect(() => {
    getConfigData();
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen px-0 py-0 sm:px-4 sm:py-8">
      <div className="w-[100%] sm:w-[90%] mx-0 sm:mx-auto p-0 pb-2 sm:p-4">
        <div className="relative">
          <Image
            src={CoverPhoto}
            alt="Cover Photo"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 rounded-lg"></div>
        </div>

        <div className="relative bg-white backdrop-blur-md bg-opacity-90 shadow-lg -mt-16 p-6 rounded-lg max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 rounded-full -mt-20 overflow-hidden border-4 border-white shadow-md">
              <Image
                src={ProfilePic}
                alt="ProfilePic"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-semibold text-gray-700">
                {userData?.name}
              </h1>
              <p className="text-sm text-gray-700">{userData?.mobile_number}</p>
            </div>
          </div>

          <hr className="w-full mt-3 border border-gray-300 mx-auto" />

          <div className="w-full overflow-x-auto flex items-center justify-between gap-4 px-0 sm:px-4 mt-4 py-2">
            <div className="w-full overflow-x-auto flex md:flex-row items-center gap-4">
              <span
                className={`px-4 py-2 rounded-md text-gray-700 cursor-pointer transition-all ${
                  activeTab === "about"
                    ? "bg-green-100 text-green-600 font-semibold"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab("about")}
              >
                About
              </span>
              {isViewProfessionalProfileOpen && (
                <>
                  <span
                    className={`px-4 py-2 rounded-md text-gray-700 cursor-pointer transition-all ${
                      activeTab === "myProfessionals"
                        ? "bg-green-100 text-green-600 font-semibold"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveTab("myProfessionals")}
                  >
                    Professionals
                  </span>
                  <span
                    className={`px-4 py-2 rounded-md text-gray-700 cursor-pointer transition-all ${
                      activeTab === "posts"
                        ? "bg-green-100 text-green-600 font-semibold"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveTab("posts")}
                  >
                    Posts
                  </span>
                  <span
                    className={`px-4 py-2 rounded-md text-gray-700 cursor-pointer transition-all ${
                      activeTab === "reviews"
                        ? "bg-green-100 text-green-600 font-semibold"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveTab("reviews")}
                  >
                    Reviews
                  </span>
                  <span
                    className={`px-4 py-2 rounded-md text-gray-700 cursor-pointer transition-all ${
                      activeTab === "projects"
                        ? "bg-green-100 text-green-600 font-semibold"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveTab("projects")}
                  >
                    Projects
                  </span>
                </>
              )}
            </div>
            <div>
              {isViewProfessionalProfileOpen ? (
                <button
                  className="bg-green-600 text-white px-1 py-1 text-xs sm:text-sm sm:px-4 sm:py-2 rounded-md shadow-md hover:bg-green-500 transition-all"
                  onClick={() => setIsViewProfessionalProfileOpen(false)}
                >
                  View as User
                </button>
              ) : (
                <button
                  className="bg-green-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md shadow-md hover:bg-green-500 transition-all"
                  onClick={() => setIsViewProfessionalProfileOpen(true)}
                >
                  View as Professional
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 p-2">
          {activeTab === "about" && (
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow-md w-full md:w-[35rem]">
              <div className="flex items-center justify-between px-2 py-4">
                <h2 className="text-lg text-gray-800 font-bold">
                  Personal Details:
                </h2>
                <Link href="/edit-profile">
                  <span
                    className="cursor-pointer"
                    title="Edit Profile"
                    onClick={() => setIsEditProfileDrawerOpen(true)}
                  >
                    <FaUserEdit color="green" size={20} />
                  </span>
                </Link>
              </div>
              <div className="space-y-2 text-gray-700 px-3">
                <p>
                  <span className="font-semibold">Name:</span> Rohit Ghatal
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> +9779806415229
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  rohitghatal@gmail.com
                </p>
              </div>
            </div>
          )}
          {activeTab === "posts" && <Posts />}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
