// component/ProductDetailsClient.js
"use client";

import { useState } from "react";
import { FaHeart, FaMinus, FaPlus, FaRegHeart, FaShare, FaShoppingCart } from "react-icons/fa";

const ProductDetailsClient = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);
  const [isInWish, setIsInWish] = useState(false);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => quantity > 1 && setQuantity((prev) => prev - 1);
  const handleAddToCart = () => {
    setIsInCart(true);
    alert(`Added ${quantity} ${product.name}(s) to cart!`);
  };
  const handleWish = (e) => setIsInWish(e);

  // Share product URL using Web Share API
  const handleShare = async () => {
    const shareData = {
      title: product.name,
      text: `Check out this product: ${product.name}`,
      url: window.location.href, // Use the current page URL
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

  return (
    <div className="mt-6">
      <div className="flex gap-4 items-center mt-4">
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
            className="bg-[#A67B5B] item-center gap-0 w-full max-w-40 text-white py-1 px-4 rounded hover:bg-[#d38244] transition flex items-center"
          >
            <FaShoppingCart className="mr-1 hidden" />
            Add to Cart
          </button>
        )}

        <div className="flex gap-3">
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
          <button onClick={handleShare} className="text-[#A67B5B] hover:text-[#d38244]">
            <FaShare className="text-base md:text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsClient;
