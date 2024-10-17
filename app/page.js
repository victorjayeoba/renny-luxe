"use client";
import products from "@/app/data/product";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import heroImage from "@/app/assets/images/banner_2.jpg";
import Header from "./common/Header";
import Link from "next/link";
import ProductCard from "./component/ProductCard";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {

  return (
    <div className="bg-gray-100">
      {/* Intro Section */}
      <motion.section
        className="relative text-white max-h-svh w-svh flex flex-col justify-between bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 5, 5, 0.5), rgba(0, 0, 0, 0.94)), url(${heroImage.src})`,
        }}
      >
        <Header />
        <div className="relative py-6 pb-10 flex items-center justify-center flex-col text-center h-full font-playfair mx-auto px-3 xl:w-[70%]">
          <h1 className="text-4xl md:text-7xl font-bold shadow-red-700">
            Radiate Your <br />
            <motion.span
              className="text-5xl md:text-8xl font-black shimmer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Natural Beauty
            </motion.span>
          </h1>
          <p className="mt-4 text-lg">
            Discover our range of skincare products for a glowing complexion.
          </p>
          <div className="rounded-3xl bg-slate-50 w-full max-w-xl overflow-hidden flex text-2xl text-gray-950 my-3 shadow-2xl drop-shadow-2xl">
            <input
              className="h-12 py-3 rounded-l-3xl flex-grow px-4 placeholder:text-lg placeholder:leading-9 md:h-14"
              type="search"
              placeholder="Search for products and items"
            />
            <button className="p-2 lg:px-5 bg-[#A67B5B] text-center text-white text-base md:text-lg rounded-r-3xl">
              Search
            </button>
          </div>
          <div className="flex text-start justify-start w-full max-w-xl gap-2 text-gray-400">
            <Link href="#" className="border-[1px] rounded-full p-2 px-3 hover:text-gray-50 shadow-2xl">
              Make Up
            </Link>
            <Link href="#" className="border-[1px] rounded-full p-2 px-3 hover:text-gray-50">
              Cream
            </Link>
            <Link href="#" className="border-[1px] rounded-full p-2 px-3 hover:text-gray-50">
              Herbs
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Latest Products */}
      <motion.section
        className="py-16"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6">
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-6 text-[#A67B5B]">
              Latest Products
            </h2>
            <div className="flex flex-wrap gap-6 justify-center">
              {products.map((product) => {
                const ref = useRef(null);
                const inView = useInView(ref, { once: true });

                return (
                  <motion.div
                    ref={ref}
                    key={product.id}
                    className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                    variants={fadeInUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Products */}
      <motion.section
        className="pt-8 "
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-orange-400 mx-auto px-6">
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-6 text-[#A67B5B]">
              Ours Products
            </h2>
            <div className="flex flex-wrap gap-6 justify-center">
              {products.map((product) => {
                const ref = useRef(null);
                const inView = useInView(ref, { once: true });

                return (
                  <motion.div
                    ref={ref}
                    key={product.id}
                    className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                    variants={fadeInUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>


      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div>
            <a href="#" className="block hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="block hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="block hover:text-white">
              Refund Policy
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              Facebook
            </a>
            <a href="#" className="hover:text-white">
              Instagram
            </a>
            <a href="#" className="hover:text-white">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
