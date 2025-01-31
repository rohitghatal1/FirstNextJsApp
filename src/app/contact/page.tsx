"use client";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";

const ContactUs: React.FC = () => {
  return (
    <div className="p-4 mt-20 bg-gray-100">
      <h2 className="text-center text-2xl font-semibold py-2">Contact Us</h2>
      <div className="w-[80%] mx-auto flex items-start gap-8 p-3">
        <div className="bg-white shadow-md rounded-md p-2 w-1/2">
          <div className="w-full h-[350px] p-4 rounded-md overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.5395186175624!2d85.3117322111291!3d27.66506722725564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b7b806cfed%3A0xb5dd29f9d94d1a1a!2sBizHub%20Consulting%20Service%20Pvt.%20Ltd!5e1!3m2!1sen!2snp!4v1738218131327!5m2!1sen!2snp"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="py-3 px-4">
            <div>
              <h3 className="font-semibold py-2 text-gray-800">Address</h3>
              <p className="text-gray-500 flex items-start gap-2">
                <GrLocation /> Kusunti Height, Lalitpur
              </p>
            </div>
            <div>
              <h3 className="font-semibold py-2 text-gray-800">Call Us</h3>
              <p className="text-gray-500 flex items-start gap-2">
                <FaPhoneAlt /> 9805786981
              </p>
              <p className="text-gray-500 flex items-start gap-2">
                <FaPhoneAlt /> 9806415229
              </p>
            </div>
            <div>
              <h3 className="font-semibold py-2 text-gray-800">Email</h3>
              <p className="text-gray-500 flex items-start gap-2">
                <HiOutlineMail /> support@been.com
              </p>
            </div>
            <div className="">
              <h3 className="font-semibold py-2 text-lg">Follow us on</h3>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="text-blue-600 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 hover:-translate-y-1 transition-all duration-300 shadow-md"
                >
                  <FaFacebook size={16} />
                </a>
                <a
                  href="#"
                  className="text-red-600 h-10 w-10 flex items-center justify-center rounded-full bg-red-100 hover:bg-red-200 hover:-translate-y-1 transition-all duration-300 shadow-md"
                >
                  <FaInstagram size={16} />
                </a>
                <a
                  href="#"
                  className="text-blue-800 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 hover:-translate-y-1 transition-all duration-300 shadow-md"
                >
                  <FaLinkedinIn size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-md p-4 w-1/2">
          <Form layout="vertical">
            <h2 className="font-semibold py-2 text-xl">Send Message</h2>
            <Form.Item label="Name" name="name">
              <Input size="large" />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input size="large" />
            </Form.Item>
            <Form.Item label="Subject" name="subject">
              <Input size="large" />
            </Form.Item>
            <Form.Item label="Message" name="message">
              <TextArea size="large" rows={5} />
            </Form.Item>
            <Form.Item>
              <Button>Send</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
