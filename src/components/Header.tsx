"use client";
import { useState } from "react";

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => setActiveDropdown(menu);
  const handleMouseLeave = () => setActiveDropdown(null);

  return (
    <header className="bg-white shadow-md border-b">
      <div className="container mx-auto flex items-center justify-between px-8 py-4">
        <div className="text-2xl font-bold text-gray-800">BuildMatch</div>
        <nav className="flex items-center space-x-8">
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("designIdeas")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-gray-600 hover:text-blue-500 font-medium">
              Get Design Ideas
            </button>
            {activeDropdown === "designIdeas" && (
              <div className="absolute left-0 top-full bg-white shadow-lg rounded-md p-4 grid grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-blue-500 mb-2">
                    Interior Design
                  </h3>
                  <ul className="space-y-1">
                    <li>Kitchen</li>
                    <li>Living Room</li>
                    <li>Bedroom</li>
                    <li>Bathroom</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-500 mb-2">
                    Plan, Outdoor & Exterior
                  </h3>
                  <ul className="space-y-1">
                    <li>Flooring</li>
                    <li>Lighting</li>
                    <li>Staircase</li>
                    <li>Gardens</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-500 mb-2">
                    Interior Products
                  </h3>
                  <ul className="space-y-1">
                    <li>Door</li>
                    <li>Furniture</li>
                    <li>Table</li>
                    <li>Sofa</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("professionals")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-gray-600 hover:text-blue-500 font-medium">
              Find Professionals
            </button>
            {activeDropdown === "professionals" && (
              <div className="absolute left-0 top-full bg-white shadow-lg rounded-md p-4">
                <ul className="space-y-2">
                  <li>Architects</li>
                  <li>Interior Designers</li>
                  <li>Contractors</li>
                  <li>Builders</li>
                </ul>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("realHomes")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-gray-600 hover:text-blue-500 font-medium">
              Real Homes
            </button>
            {activeDropdown === "realHomes" && (
              <div className="absolute left-0 top-full bg-white shadow-lg rounded-md p-4">
                <ul className="space-y-2">
                  <li>Modern</li>
                  <li>Luxury</li>
                  <li>Traditional</li>
                </ul>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("products")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-gray-600 hover:text-blue-500 font-medium">
              Explore Products
            </button>
            {activeDropdown === "products" && (
              <div className="absolute left-0 top-full bg-white shadow-lg rounded-md p-4">
                <ul className="space-y-2">
                  <li>Paints</li>
                  <li>Furniture</li>
                  <li>Lighting</li>
                  <li>Decor</li>
                </ul>
              </div>
            )}
          </div>
        </nav>

        {/* Right Links */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-500">
            For Homeowners
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            For Professionals
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
