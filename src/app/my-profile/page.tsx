"use client";
import Image from "next/image";
import ProfilePic from "../../../public/images/Eco-Friendly_Home.jpg";
import CoverPhoto from "../../../public/images/homeImage1.jpg";
import { useEffect, useState } from "react";
import { FaCloudUploadAlt, FaEdit, FaUserEdit } from "react-icons/fa";
import Link from "next/link";
import { Form, Input, message, Modal, Spin, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import axios from "axios";
import Posts from "@/components/Posts";
import Reviews from "@/components/Reviews";

const ProfilePage: React.FC = () => {
  const [addPhotoForm] = Form.useForm();
  const [userData, setUserData] = useState<any>();
  const [activeTab, setActiveTab] = useState<any>("about");
  const [isAddPhotoModalOpen, setIsAddPhotoModalOpen] =
    useState<boolean>(false);
  const [isUploadingImage, setIsUploadingImage] = useState<boolean>(false);

  const getConfigData = async () => {
    const response = await axios.get("/users/getConfig");
    if (response?.data?.userData?.user_type === "user") {
      setUserData(response?.data?.userData);
      console.log(response?.data?.userData);
    } else {
      const response = await axios.get("/professionals/getMyProfessionals");
      setUserData(response?.data?.data[0]);
      console.log(response?.data?.data[0]);
    }
  };

  useEffect(() => {
    getConfigData();
  }, []);

  const uploadPhoto = async (type: any, value: any) => {
    setIsUploadingImage(true);
    try {
      const response = await axios.get(
        `/misc/getPresignedUrl?fileType=${type}`
      );

      console.log("presigned url", response?.data);
      await axios.put(response?.data?.url, value, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      addPhotoForm.setFieldValue(
        "image",
        `https://bizforce360.s3.ap-south-1.amazonaws.com/${response?.data?.file_url}`
      );
      setIsUploadingImage(false);
    } catch (err: any) {
      console.log(err);
    }
  };

  const handlePhotoSubmit = async (values: any) => {
    try {
      if (userData?.user_type && userData?.user_type === "user") {
        await axios.patch("/users/profile", values);
      } else {
        await axios.patch("/professionals/editMyProfessionals", values);
      }

      message.success("image uploaded successfully");
      setIsAddPhotoModalOpen(false);
      getConfigData();
    } catch (err: any) {
      console.log(err);
    }
  };

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
            <div className="relative">
              <div className="relative w-32 h-32 rounded-full -mt-20 overflow-hidden border-4 border-white shadow-md">
                <Image
                  src={userData?.image || ProfilePic}
                  alt="ProfilePic"
                  fill
                  className="object-cover w-full h-full z-0"
                />
              </div>
              <span
                className="absolute bottom-2 right-1 bg-gray-100 p-2 rounded-full shadow z-10 cursor-pointer"
                onClick={() => setIsAddPhotoModalOpen(true)}
              >
                <FaEdit className="text-blue-600" />
              </span>
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
              {userData?.user_type !== "user" && (
                <>
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
                  <span className="cursor-pointer" title="Edit Profile">
                    <FaUserEdit color="green" size={20} />
                  </span>
                </Link>
              </div>
              <div className="space-y-2 text-gray-700 px-3">
                <p>
                  <span className="font-semibold">Name:</span> {userData?.name}
                </p>
                <p>
                  <span className="font-semibold">Bio:</span> {userData?.bio}
                </p>
                <p>
                  <span className="font-semibold">Phone:</span>{" "}
                  {userData?.user_type === "user"
                    ? userData?.mobile_number
                    : userData?.contact}
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  {userData?.email}
                </p>
              </div>
            </div>
          )}

          {activeTab === "posts" && <Posts />}
          {activeTab === "reviews" && <Reviews />}
        </div>
      </div>
      <Modal
        open={isAddPhotoModalOpen}
        title="Update Profile Photo"
        okText="Upload"
        onCancel={() => setIsAddPhotoModalOpen(false)}
        footer={null}
        className="rounded-lg shadow-lg"
      >
        <Form form={addPhotoForm} onFinish={handlePhotoSubmit}>
          <Form.Item name="image" hidden>
            <Input />
          </Form.Item>
        </Form>
        <div className="flex flex-col items-center gap-4">
          <Spin spinning={isUploadingImage}>
            <ImgCrop cropShape="round">
              <Upload
                maxCount={1}
                accept="image/*"
                name="profilePhoto"
                fileList={[]}
                data={(photo) => {
                  const extension = photo.name.split(".").pop();
                  uploadPhoto(extension, photo);
                  return {};
                }}
                className="w-full flex justify-center items-center"
              >
                <div className="flex flex-col items-center justify-center mt-5 border-2 border-gray-300 border-dashed rounded-lg p-6 w-full bg-gray-50 hover:bg-gray-100 transition duration-200">
                  <FaCloudUploadAlt className="text-4xl text-blue-500 mb-2" />
                  <p className="text-gray-600 font-medium">
                    Drag or click to upload
                  </p>
                  <p className="text-sm text-gray-400">
                    Only image files are allowed
                  </p>
                  <button className="mt-4 px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                    Select an Image
                  </button>
                </div>
              </Upload>
            </ImgCrop>
          </Spin>

          {/* Custom Footer with Upload Button */}
          <div className="w-full flex justify-end mt-4">
            <button
              className="px-5 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition"
              onClick={() => {
                addPhotoForm.submit();
                setIsAddPhotoModalOpen(false);
              }}
            >
              Upload
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProfilePage;
