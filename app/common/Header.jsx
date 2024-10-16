import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          className="text-3xl font-bold font-pacifico text-gray-800"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Rennys Luxe
        </motion.h1>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden flex items-center justify-center p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)} // Toggle mobile menu
        >
          {isOpen ? "✖️" : "☰"}{" "}
          {/* Show X when menu is open, hamburger icon otherwise */}
        </button>

        {/* Nav Links */}
        <nav
          className={`flex-col hidden md:flex gap-3 md:flex-row space-y-4 md:space-y-0  `}
        >
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Shop
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
        </nav>

        {/* Search Form */}
        <div className="relative hidden md:block">
          {" "}
          {/* Hide on mobile, show on md and above */}
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:text-red-200"
          />
          <button className="absolute right-2 top-2 text-gray-600">🔍</button>
        </div>
      </div>

      {/* Mobile Search Form */}
      <div
        className={`relative px-3 py-3 md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border block w-full rounded-lg  focus:outline-none focus:ring-2 outline outline-red-200 focus:text-black-200"
          />
          <button className="absolute -translate-y-1/2 -translate-x-1/2 right-2 top-[50%] text-gray-600">
            🔍
          </button>
        </div>

        <nav className={`flex-col md:hidden space-y-4 py-3`}>
          <ul>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
