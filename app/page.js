"use client";
import products from "@/app/data/product";
import heroImage from "@/app/assets/images/banner_2.jpg";
import Link from "next/link";
import ProductCard from "./component/ProductCard";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* Intro Section */}
      <section
  className="relative text-white max-h-screen w-full flex flex-col justify-between bg-cover bg-center"
  style={{
    backgroundImage: `linear-gradient(rgba(255, 5, 5, 0.5), rgba(0, 0, 0, 0.94)), url(${heroImage.src})`,
  }}
>
  <div className="relative py-6 pb-10 flex items-center justify-center flex-col text-center h-full font-playfair mx-auto px-4 sm:px-6 lg:px-8 xl:w-3/4">
    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold shadow-red-700">
      <span> Radiate Your</span> <br className="2xl:hidden" />
      <span className="text-4xl md:text-6xl lg:text-7xl font-black shimmer">
        Natural Beauty
      </span>
    </h1>
    <p className="mt-4 text-base md:text-lg lg:text-xl">
      Discover our range of skincare products for a glowing complexion.
    </p>
    <form className="rounded-3xl bg-slate-200 max-w-full mx-auto md:w-full md:max-w-5xl md:min-w-96 overflow-hidden flex text-lg text-gray-950 my-6 shadow-2xl drop-shadow-2xl">
      <input
        className="h-12 block py-3 rounded-l-3xl flex-grow max-w-[80%] px-4 placeholder:text-lg placeholder:leading-9"
        type="search"
        placeholder="Search for products and items"
      />
      <button className=" block lg:px-5 w-[20%] bg-[#A67B5B] border-2 text-center text-white text-base md:text-lg rounded-r-3xl">
        Search
      </button>
    </form>
    <div className="flex text-start justify-start max-w-full mx-auto md:max-w-xl gap-2 text-sm text-gray-400">
      <Link
        href="#"
        className="border-[1px] rounded-full p-1 px-3 hover:text-gray-50 shadow-2xl"
      >
        Make Up
      </Link>
      <Link
        href="#"
        className="border-[1px] rounded-full p-1 px-3 hover:text-gray-50"
      >
        Cream
      </Link>
      <Link
        href="#"
        className="border-[1px] rounded-full p-1 px-3 hover:text-gray-50"
      >
        Herbs
      </Link>
    </div>
  </div>
  <Marquee speed={60} gradient={true} gradientColor={[255, 255, 255]} gradientWidth={100} pauseOnHover={true} className="text-sm">
    {`🌟 FLASH SALE ALERT! 🌟 Get 40% OFF on all skincare products! 🧴✨ Hurry, while stocks last! 🛒 Shop now and glow up with our best-selling serums, creams, and more! 💖 Limited time only! ⏳ Don&apos;t miss out!`}
  </Marquee>
</section>


      {/* Latest Products */}
      <section className="pt-8">
        <div className=" mx-auto px-3 xl:px-6">
          <div className="xl:container mx-auto py-8">
            <h2 className="text-3xl font-bold text-center mb-6 text-[#A67B5B]">
              Latest Products
            </h2>
            <div className="grid grid-cols-2 gap-3 md:gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center">
              {products.map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="pt-8">
        <div className="bg-orange-400 mx-auto px-3 xl:px-6">
          <div className="xl:container mx-auto py-8">
            <h2 className="text-3xl font-bold text-center mb-6 text-[#A67B5B]">
              Our Products
            </h2>
            <div className="grid grid-cols-2 gap-3 md:gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center">
              {products.map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
        <div className="text-center text-gray-400 mt-4">
          © {new Date().getFullYear()} MyShop. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
