"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import lady from "./assets/images/skincare_2.png"
import Header from './common/Header';

export default function Home() {
  const [cart, setCart] = useState({});
  const [wishlist, setWishlist] = useState([]);

  const featuredProducts = [
    { id: 1, name: 'Luxury Perfume', price: 120 },
    { id: 2, name: 'Glow Skin Cream', price: 85 },
  ];

  const latestProducts = [
    { id: 3, name: 'Silky Deodorant', price: 20 },
    { id: 4, name: 'Aqua Body Lotion', price: 45 },
  ];

  const addToCart = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1,
    }));
  };

  const addToWishlist = (id) => {
    if (!wishlist.includes(id)) {
      setWishlist([...wishlist, id]);
    }
  };

  const productCard = (product, isFeatured = false) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white rounded-lg shadow-lg p-6 m-4 w-full sm:w-64"
      key={product.id}
    >
      <h3 className="text-xl font-bold mb-2 text-gray-900">{product.name}</h3>
      <p className="text-gray-600 mb-4">${product.price}</p>
      <div className="flex justify-between items-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => addToCart(product.id)}
          className="px-4 py-2 bg-blue-500 text-white rounded-full shadow-lg focus:outline-none"
        >
          Add to Cart {cart[product.id] ? `(${cart[product.id]})` : ''}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => addToWishlist(product.id)}
          className={`px-4 py-2 ${wishlist.includes(product.id) ? 'bg-red-500' : 'bg-gray-300'
            } text-white rounded-full shadow-lg focus:outline-none`}
        >
          {wishlist.includes(product.id) ? 'In Wishlist' : 'Add to Wishlist'}
        </motion.button>
      </div>
    </motion.div>
  );

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      {/* Header */}
      <Header />
      {/* Intro Section */}
      <section className="bg-[#D2B48C] text-white ">
        <div className=" container mx-auto calc-height flex flex-col lg:flex-row items-center px-6">
          <div className="lg:w-1/2 max-lg:py-5 ">
            <motion.h2
              className="text-4xl font-bold mb-4 font-lobster "
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span> Welcome to</span>
              <br />   <span className='text-7xl text-red-200'> Rennys Luxe</span>
            </motion.h2>
            <motion.p
              className="text-lg mb-6 "
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Explore Our Handpicked Selection of <br className='hidden lg:block' />  Fragrances and Skincare Essentials Designed  to <br className='hidden lg:block' /> Illuminate Your Natural Beauty.
            </motion.p>
            <motion.div
              className="text-lg mb-6 "
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div>

              </div>
            </motion.div>

          </div>
          <div className='bg-red-200 overflow-hidden'>
            <motion.div
              className=""
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Image
                src={lady}
                alt="Skincare Lady"
                width={500}
                height={500}
                layout='esponsive'
                className=" w-full block"
              />
            </motion.div>
          </div>

        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold  mb-8 text-[#A67B5B]">Featured Products</h2>
          <div className="flex flex-wrap justify-center">
            {featuredProducts.map((product) => productCard(product, true))}
          </div>
        </div>
      </section>

      {/* Latest Products */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Latest Products</h2>
          <div className="flex flex-wrap justify-center">
            {latestProducts.map((product) => productCard(product))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Footer Links */}
          <div>
            <a href="#" className="block hover:text-white">Terms of Service</a>
            <a href="#" className="block hover:text-white">Privacy Policy</a>
            <a href="#" className="block hover:text-white">Refund Policy</a>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
