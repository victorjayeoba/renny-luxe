"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu
  const [cartItems, setCartItems] = useState(0); // State to track cart items


  // Dummy useEffect simulating cart items (replace this with actual logic for cart updates)
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || 0;
    setCartItems(storedCartItems);
  }, [cartItems]);

  return (
    <header className="z-50 relative bg-gray-800">
      <div className="xl:container mx-auto px-6 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <Link href={"/"}>
          <motion.h1
            className="text-3xl font-bold font-pacifico"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Rennys Luxe
          </motion.h1>
        </Link>

        <div className="flex gap-3 items-center">
          <Link href={"/wishlist"}>
            <FaHeart className="mr-1 cursor-pointer md:hidden" />
          </Link>

          {/* Cart Icon with Badge */}
          <div className="relative">
            <Link href={"/cart-checkout"}>
              <FaShoppingCart className="mr-1 cursor-pointer md:hidden" />
            </Link>
            {/* Badge */}
            {cartItems > 0 && (
              <span className="absolute top-[-10px] right-[-10px] bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems}
              </span>
            )}
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
            className="md:hidden flex items-center justify-center p-2 transition-transform transform hover:scale-110"
            onClick={() => setIsOpen(!isOpen)} // Toggle mobile menu
          >
            {isOpen ? "✖️" : "☰"} {/* Show X when menu is open, hamburger icon otherwise */}
          </button>
        </div>

        {/* Nav Links */}
        <nav
          className={`flex-col hidden items-center md:flex gap-4 md:flex-row space-y-4 md:space-y-0 text-lg md:text-xl`}
        >
          {["Home", "Contact"].map((item, index) => (
            <motion.a
              key={index}
              href="#"
              className="text-slate-100 hover:text-white transition duration-300 transform hover:scale-105"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}

          <Link href={"/wishlist"}>
            <FaHeart className="mr-1 cursor-pointer" />
          </Link>

          {/* Cart Icon with Badge for Desktop */}
          <div className="relative">
            <Link href={"/cart-checkout"}>
              <FaShoppingCart className="mr-1 cursor-pointer" />
            </Link>
            {cartItems > 0 && (
              <span className="absolute top-[-10px] right-[-10px] bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems}
              </span>
            )}
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`relative px-3 bg-white py-3 md:hidden transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <nav className={`flex-col md:hidden space-y-4 py-3`}>
          <ul className="flex flex-col gap-4">
            {["Home", "Contact"].map((item, index) => (
              <li key={index}>
                <motion.a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-300 transform hover:scale-105"
                  initial={{ y: -10, opacity: 0 }}
                  animate={isOpen ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                </motion.a>
              </li>
            ))}
           
          </ul>
        </nav>
      </div>
    </header>
  );
}
