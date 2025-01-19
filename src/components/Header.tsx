"use client";

const Header: React.FC = () => {
  return (
    <nav className="bg-white/10 backdrop-blur-sm  border border-white/20 absolute top-0 w-full flex items-center justify-between px-8 py-4 z-10 shadow-md">
      <div className="text-white text-2xl font-bold">BEEN</div>
      <ul className="flex space-x-8 text-white">
        <li className="hover:text-gray-300 transition duration-300">Home</li>
        <li className="hover:text-gray-300 transition duration-300">
          Real Estate
        </li>
        <li className="hover:text-gray-300 transition duration-300">
          Property Single
        </li>
        <li className="hover:text-gray-300 transition duration-300">Blog</li>
        <li className="hover:text-gray-300 transition duration-300">Contact</li>
      </ul>
      <button className="bg-green-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-300">
        Make an Inquiry
      </button>
    </nav>
  );
};

export default Header;
