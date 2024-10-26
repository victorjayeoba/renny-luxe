"use client";

import { useState } from "react";
import products from "@/app/data/product"; // Adjust this path as necessary
import Image from "next/image";
import {
  FaHeart,
  FaMinus,
  FaPlus,
  FaRegHeart,
  FaShare,
  FaShoppingCart,
} from "react-icons/fa";
import Link from "next/link";

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);
  const [isInWish, setIsInWish] = useState(false);
  const [linkLoading, setLinkLoading] = useState(false); // Loading state for link clicks

  // Find related products by category or any custom logic
  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  if (!product) {
    return <div>Product not found</div>;
  }

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

  // Overlay component
  const LoadingOverlay = () => (
    <div className="fixed inset-0 flex space-x-2 backdrop-blur-lg items-center justify-center bg-slate-100 bg-opacity-50 z-50">
    <div className="w-16 h-16 border-4 border-t-transparent border-[#A67B5B] rounded-full animate-spin"></div>
    <p>Please Wait... </p>
  </div>
  );

  return (

    <>
     {linkLoading && <LoadingOverlay />}
    <div className="container mx-auto px-4 py-10"> 
      {/* Main Product Section */}
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={product.image.src}
            width={400}
            height={400}
            alt={product.name}
            className="w-full lg:max-w-96 rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1 my-3">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-green-600 mb-2">${product.price}</p>
          <p className="mb-2">{product.description}</p>

          {/* Quantity & Cart */}
          <div className="flex items-center mb-2">
            <label htmlFor="quantity" className="mr-2">In stock:</label>
            <p>{quantity}</p>
          </div>

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
      </div>

      {/* Related Products Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Other Related Products</h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
          {relatedProducts.map((relatedProduct) => (
            <div
              key={relatedProduct.id}
              className="bg-white shadow-lg rounded-lg p-4"
            >
              <Image
                src={relatedProduct.image.src}
                width={150}
                height={150}
                alt={relatedProduct.name}
                className="w-full rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">
                {relatedProduct.name}
              </h3>
              <p className="text-sm text-green-600 mb-2">
                ${relatedProduct.price}
              </p>
              <Link
                href={`/products/${relatedProduct.id}`}
                onClick={() => setLinkLoading(true)} // Set loading state to true on click
                className="text-[#A67B5B] hover:underline text-sm"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Alternative Share Links for unsupported browsers */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Share this product:</h2>
        <div className="flex gap-4 mt-2">
          {/* Facebook */}
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
            target="_blank"
            className="text-blue-600 hover:text-blue-800"
          >
            Share on Facebook
          </Link>

          {/* Twitter */}
          <Link
            href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=Check out this product: ${product.name}`}
            target="_blank"
            className="text-blue-400 hover:text-blue-600"
          >
            Share on Twitter
          </Link>

          {/* WhatsApp */}
          <Link
            href={`https://wa.me/?text=Check out this product: ${product.name} ${window.location.href}`}
            target="_blank"
            className="text-green-600 hover:text-green-800"
          >
            Share on WhatsApp
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetails;
