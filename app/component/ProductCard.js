"use client";
import { useState } from "react";
import Image from "next/image";
import {
  FaHeart,
  FaRegHeart,
  FaPlus,
  FaMinus,
  FaShoppingCart,
  FaShare,
} from "react-icons/fa";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);
  const [isInWish, setIsInWish] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state for image
  const [linkLoading, setLinkLoading] = useState(false); // Loading state for link clicks
  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => quantity > 1 && setQuantity((prev) => prev - 1);
  const handleAddToCart = () => {
    setIsInCart(true);
    alert(`Added ${quantity} ${product.name}(s) to cart!`);
  };
  const handleWish = (e) => setIsInWish(e);

  const handleShare = async () => {
    const shareData = {
      title: product?.name,
      text: `Check out this product: ${product?.name}`,
      url: `/products/${product?.id}`, // Use the current page URL
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        console.log("Product shared successfully");
      } else {
        alert("Sharing is not supported in your browser.");
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };

   // Overlay component
   const LoadingOverlay = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-16 h-16 border-4 border-t-transparent border-[#A67B5B] rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
      <Link href={`/products/${product?.id}`} onClick={LoadingOverlay}>
        <div className="relative group cursor-pointer flex-grow p-3 bg-white">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <div className="w-8 h-8 border-4 border-t-transparent border-[#A67B5B] rounded-full animate-spin"></div>
            </div>
          )}
          <Image
            src={product?.main_image}
            alt={product?.name}
            width={300}
            height={300}
            className={`w-full h-48 object-cover transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
      </Link>
      <div className="p-4 text-stone-700 flex flex-col justify-between flex-grow"> {/* Added flex-grow */}
        <h2 className="text-lg font-light line-clamp-2">
          {product.name}
        </h2>
      

      <div>
      <div className="flex items-center mt-2">
        <span>₦</span>
          <span className="text-xl font-light">
          {product?.price}
          </span>
        </div>
        <div className="flex gap-2  items-center justify-between mt-2">         
          {isInCart ? (
            <div className="flex w-full max-w-40 justify-between bg-gray-100 py-1 items-center">
              <button
                onClick={handleDecrement}
                className="text-black py-1 px-2 rounded-l bg-[#A67B5B] hover:bg-gray-400 transition"
              >
                <FaMinus color="#ffffff" />
              </button>
              <span className="mx-2">{quantity}</span>
              <button
                onClick={handleIncrement}
                className="text-black py-1 px-2 rounded-r bg-[#A67B5B] hover:bg-gray-400 transition"
              >
                <FaPlus color="#ffffff" />
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="bg-[#A67B5B] text-sm lg:text-lg item-center gap-0 w-full max-w-40 text-white py-1 px-4 rounded hover:bg-[#d38244] transition flex items-center"
            >
              <FaShoppingCart className="mr-1 hidden" />
              Add to Cart
            </button>
          )}
          <div className="md:flex gap-3">
            <button
              onClick={() => handleWish(!isInWish)}
              className="text-red-600 hover:text-red-800 transition"
            >
              {isInWish ? (
                <FaHeart className="text-base md:text-xl" />
              ) : (
                <FaRegHeart className="text-base md:text-xl" />
              )}
            </button>
            {/* Web Share API Button */}
            <button
              onClick={handleShare}
              className="text-[#A67B5B] hover:text-[#d38244]"
            >
              <FaShare className="text-base md:text-xl" />
            </button>
          </div>
        </div>
      </div>
       
      </div>
    </div>
  );
};

export default ProductCard;
