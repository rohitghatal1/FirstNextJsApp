"use client";

import Link from "next/link";

const Header: React.FC<{ openLoginForm: () => void }> = ({ openLoginForm }) => {
  return (
    <nav className="bg-gradient-to-r from-green-600 via-green-500 to-green-700 backdrop-blur-lg border border-white/20 fixed top-0 w-full flex items-center justify-between px-8 py-4 z-50 shadow-lg">
      <div className="flex items-center gap-8">
        <div className="text-white text-2xl font-extrabold tracking-wider">
          BEEN
        </div>
        <div className="flex space-x-8 text-white">
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

      <div className="flex items-center gap-8">
        <div className="flex space-x-8 text-white">
          <Link
            href="/for-homeowners"
            className="hover:text-gray-200 transition duration-300"
          >
            For Homeowners
          </Link>
          <Link
            href="/for-professionals"
            className="hover:text-gray-200 transition duration-300"
          >
            For Professionals
          </Link>
        </div>
        <button
          onClick={openLoginForm}
          className="bg-white text-green-700 border border-green-600 px-5 py-2 rounded-md hover:bg-green-600 hover:text-white transition duration-300 transform hover:scale-105 active:scale-95"
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Header;
