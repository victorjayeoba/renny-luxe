"use client";
import { useEffect, useState } from "react";
import { getProducts } from "@/services/firebase"; // Adjust the path as necessary
import heroImage from "@/app/assets/images/banner_2.jpg";
import Link from "next/link";
import ProductCard from "./component/ProductCard";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import campaign_1 from "@/app/assets/images/campaign_1.jpg";
import campaign_2 from "@/app/assets/images/campaign_2.jpg";
import campaign_3 from "@/app/assets/images/campaign_3.jpg";
import campaign_4 from "@/app/assets/images/campaign_4.jpg";
import { SkeletonLoader } from "./common/SkeletonLoader";
import { useRouter } from 'next/navigation';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state for products
  const [linkLoading, setLinkLoading] = useState(false); // Loading state for link clicks
  const [searchTerm, setSearchTerm] = useState(""); // State for the search input
  const [suggestions, setSuggestions] = useState([]); // State for product suggestions
  const router = useRouter();
  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
      const featured = productsData.filter(product => product.featured);
      setFeaturedProducts(featured); // Set featured products after fetching
      setLoading(false); // Set loading to false after fetching data
    };

    fetchProducts();
  }, []); // Empty dependency array to run once

  // Update suggestions based on searchTerm
  useEffect(() => {
    if (searchTerm) {
      const filteredSuggestions = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm, products]);

  // Overlay component
  const LoadingOverlay = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-16 h-16 border-4 border-t-transparent border-[#A67B5B] rounded-full animate-spin"></div>
    </div>
  );

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    // Redirect to the desired route
    router.push(`/products?s=${searchTerm}`); // Adjust the route and query parameters as needed
  };
  return (
    <div className="bg-gray-100">
      {linkLoading && <LoadingOverlay />}

      {/* Intro Section */}
      <section
        className="relative text-white max-h-screen w-full flex flex-col justify-between bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 5, 5, 0.5), rgba(0, 0, 0, 0.94)), url(${heroImage.src})`,
        }}
      >
            <Marquee className="absolute top-0 left-0 text-sm" speed={60} gradient={true} gradientColor={[255, 255, 255]} gradientWidth={100} pauseOnHover={true} >
          {`🌟 FLASH SALE ALERT! 🌟 Get 40% OFF on all skincare products! 🧴✨ Hurry, while stocks last! 🛒 Shop now and glow up with our best-selling serums, creams, and more! 💖 Limited time only! ⏳ Don't miss out!`}
        </Marquee>

        <div className="relative py-6 pb-10 min-h-[70vh] flex items-center justify-center flex-col text-center h-full font-playfair mx-auto px-4 sm:px-6 lg:px-8 xl:w-3/4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span> Radiate Your</span> <br className="2xl:hidden" />
            <span className="text-5xl md:text-7xl lg:text-8xl font-black shimmer">
              Natural Beauty
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl">
            Discover our exclusive range of skincare products designed for a radiant and glowing complexion.
          </p>
          <p className="mt-2 text-sm md:text-base lg:text-lg text-gray-300">
            Unleash the beauty within you with our all-natural ingredients!
          </p>
          <form onSubmit={handleSubmit} className="rounded-3xl relative bg-slate-200 max-w-full mx-auto md:w-full md:max-w-5xl md:min-w-96 flex text-lg text-gray-950 my-6 shadow-2xl drop-shadow-2xl">
            <input
              className="h-12 block py-3 rounded-l-3xl flex-grow max-w-[80%] px-4 placeholder:text-lg placeholder:leading-9"
              type="search"
              placeholder="Search for products and items"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="block lg:px-5 w-[20%] bg-[#A67B5B] border-2 text-center text-white text-base md:text-lg rounded-r-3xl hover:bg-[#946c4b] transition-colors duration-200">
              Search
            </button>
                  {/* Suggestions List */}
          {suggestions.length > 0 && (
            <div className="absolute top-14 z-10 bg-white shadow-md rounded-md max-h-60 overflow-y-auto w-full">
              {suggestions.map((product) => (
                <Link
                  key={product.id}
                  href={`/products?s=${searchTerm}`} // Adjust the link as necessary
                  className="block p-2 hover:bg-gray-100  text-slate-800 transition"
                  onClick={() => setLinkLoading(true)}
                >
                  {product.name}
                </Link>
              ))}
            </div>
          )}
          </form>
          
    
{
  suggestions.length == 0 &&   <div className="flex text-start justify-start max-w-full mx-auto md:max-w-xl gap-2 text-sm text-gray-400">
  <Link href={`/products?s=Serum`} className="border-[1px] rounded-full p-1 px-3 hover:text-gray-50 shadow-2xl transition-transform transform hover:scale-105">
    Serum
  </Link>
  <Link  href={`/products?s=cream`} className="border-[1px] rounded-full p-1 px-3 hover:text-gray-50 transition-transform transform hover:scale-105">
    Cream
  </Link>
  <Link  href={`/products?s=Moisturizer`} className="border-[1px] rounded-full p-1 px-3 hover:text-gray-50 transition-transform transform hover:scale-105">
    Moisturizer
  </Link>
</div>
}
        
        </div>


        <div className="text-center pb-2">
          <p className="text-sm md:text-base">Join our newsletter for exclusive offers!</p>
          <button className="mt-2 bg-[#A67B5B] text-white rounded-full px-4 py-2 hover:bg-[#946c4b] transition-colors duration-200">
            Subscribe
          </button>
        </div>
      </section>

      {/* Featured Products Campaign */}
      <section className="bg-white font-pacifico py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#A67B5B]">
            Featured Products
          </h2>
          <div className="grid grid-cols-2 gap-3 md:gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center">
            {featuredProducts.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <Link href={"/products?s=serum"} onClick={() => setLinkLoading(true)}>
            <div className="text-center max-w-full lg:flex justify-center mt-8">
              <Image src={campaign_3} width={500} height={500} className="basis-1/2" />
              <Image src={campaign_2} width={500} height={500} className="basis-1/2" />
            </div>
          </Link>
        </div>
      </section>

      {/* Latest Products */}
      <section className="pt-8">
        <div className="mx-auto px-3 xl:px-6">
          <div className="xl:container mx-auto py-8">
            <h2 className="text-3xl font-bold font-pacifico text-center mb-6 text-[#A67B5B]">
              Latest Products
            </h2>
            <div className="grid grid-cols-2 gap-3 md:gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center">
              {loading ? (
                Array.from({ length: 8 }).map((_, index) => (
                  <SkeletonLoader key={index} />
                ))
              ) : (
                products.map((product) => (
                  <div key={product.id}>
                    <ProductCard product={product} />
                  </div>
                ))
              )}
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
