import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-800 px-4 py-10 text-white">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row items-start justify-between space-y-8 md:space-y-0">
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold tracking-widest">Next App</h2>
          <div className="space-y-4 text-gray-200">
            <p className="flex items-center gap-2">
              <span className="font-medium flex items-center gap-1">
                <FaPhoneAlt color="green" /> Contact No:
              </span>
              <span className="text-lg font-semibold">9806415229</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-medium flex items-center gap-1">
                <CiLocationOn color="white" /> Address:
              </span>
              <span className="text-lg font-semibold">Lalitpur, Kathmandu</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-medium flex items-center gap-1">
                <SiGmail color="red" /> Email:
              </span>

              <span className="text-lg font-semibold">
                support@nextapp.gmail.com
              </span>
            </p>

            <div className="">
              <h3 className="font-semibold py-2 text-lg text-white">
                Follow us on
              </h3>

              <div className="flex items-center gap-4 mt-3">
                <a
                  href="#"
                  className="text-blue-600 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 hover:-translate-y-1 transition-all duration-300 shadow-md"
                >
                  <FaFacebook size={20} />
                </a>

                <a
                  href="#"
                  className="text-red-600 h-10 w-10 flex items-center justify-center rounded-full bg-red-100 hover:bg-red-200 hover:-translate-y-1 transition-all duration-300 shadow-md"
                >
                  <FaInstagram size={20} />
                </a>

                <a
                  href="#"
                  className="text-blue-800 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 hover:-translate-y-1 transition-all duration-300 shadow-md"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[40%] space-y-6">
          <h2 className="text-2xl font-bold underline underline-offset-8 decoration-white">
            Contact Form
          </h2>
          <Form layout="vertical">
            <Form.Item
              label={
                <span className="text-lg font-medium text-white">Email</span>
              }
              required
            >
              <Input
                placeholder="Enter your Email"
                className="rounded-lg px-4 py-3 shadow-md"
              />
            </Form.Item>
            <Form.Item
              label={
                <span className="text-lg font-medium text-white">Message</span>
              }
              required
            >
              <TextArea
                rows={5}
                placeholder="Describe your queries here!"
                className="rounded-lg px-4 py-3 shadow-md"
              />
            </Form.Item>
            <Form.Item>
              <button className="px-5 py-2 rounded-md bg-gray-800 text-white border border-white">
                Send
              </button>
            </Form.Item>
          </Form>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold underline underline-offset-8 decoration-white">
            Site Map
          </h2>
          <div className="space-y-2 flex flex-col gap-4">
            <Link
              href="/"
              className="hover:text-gray-200 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/real-estate"
              className="hover:text-gray-200 transition duration-300"
            >
              Real Estate
            </Link>
            <Link
              href="/property"
              className="hover:text-gray-200 transition duration-300"
            >
              MSMEs
            </Link>
            <Link
              href="/blog"
              className="hover:text-gray-200 transition duration-300"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-200 transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-200 border-t border-gray-600 pt-4">
        <p>&copy; {new Date().getFullYear()} BEEN. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
