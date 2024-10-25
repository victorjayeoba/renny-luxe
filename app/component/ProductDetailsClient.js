"use client";

import { useState, useEffect } from "react";
import { FaHeart, FaMinus, FaPlus, FaRegHeart, FaShare, FaShoppingCart } from "react-icons/fa";
import { Toast } from "./Toast"; // Import your Toast component

const ProductDetailsClient = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);
  const [isInWish, setIsInWish] = useState(false);
  const [wishList, setWishList] = useState([]);
  const [toastMessage, setToastMessage] = useState(null); // State for toast message

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const cartItem = storedCart.find((item) => item.id === product.id);

    if (cartItem) {
      setIsInCart(true);
      setQuantity(cartItem.quantity);
    }

    const storedWishList = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishList(storedWishList);
    setIsInWish(storedWishList.some((item) => item.id === product.id));
  }, [product.id]);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      main_image: product.main_image,
    };

    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCart = [...storedCart, cartItem];

    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    setIsInCart(true);
    setToastMessage(`Added ${quantity} ${product.name}(s) to cart!`); // Set toast message for cart
  };

  const updateCartQuantity = (newQuantity) => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCart = storedCart.map((item) => {
      if (item.id === product.id) {
        return item.id === product.id
        ? newQuantity > 0
          ? { ...item, quantity: newQuantity } // Update quantity only if newQuantity is > 0
          : item // Keep the item unchanged if newQuantity is <= 0
        : item
      }
      return item;
    });
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const handleWish = () => {
    let updatedWishList;

    if (isInWish) {
      updatedWishList = wishList.filter((item) => item.id !== product.id);
      setIsInWish(false);
      setToastMessage(`${product.name} removed from wishlist!`); // Set toast message for removal
    } else {
      updatedWishList = [...wishList, product];
      setIsInWish(true);
      setToastMessage(`${product.name} added to wishlist!`); // Set toast message for addition
    }

    setWishList(updatedWishList);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishList));
  };

  const handleShare = async () => {
    const shareData = {
      title: product.name,
      text: `Check out this product: ${product.name}`,
      url: window.location.href,
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
      {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage(null)} />} {/* Render toast */}

      <div className="flex gap-4 items-center mt-4">
        {isInCart && quantity !== 0 ? (
          <div className="flex w-full max-w-40 justify-between bg-gray-100 py-1 items-center">
            <button onClick={() => { handleDecrement(); updateCartQuantity(quantity - 1); }} className="text-black py-1 px-2 rounded-l bg-[#A67B5B] hover:bg-gray-400 transition">
              <FaMinus color="#ffffff" />
            </button>
            <span className="mx-2">{quantity}</span>
            <button onClick={() => { handleIncrement(); updateCartQuantity(quantity + 1); }} className="text-black py-1 px-2 rounded-r bg-[#A67B5B] hover:bg-gray-400 transition">
              <FaPlus color="#ffffff" />
            </button>
          </div>
        ) : (
          <button onClick={handleAddToCart} className="bg-[#A67B5B] item-center gap-0 w-full max-w-40 text-white py-1 px-4 rounded hover:bg-[#d38244] transition flex items-center">
            <FaShoppingCart className="mr-1 hidden" />
            Add to Cart
          </button>
        )}

        <div className="flex gap-3">
          <button onClick={handleWish} className="text-red-600 hover:text-red-800 transition">
            {isInWish ? <FaHeart className="text-base md:text-xl" /> : <FaRegHeart className="text-base md:text-xl" />}
          </button>

          <button onClick={handleShare} className="text-[#A67B5B] hover:text-[#d38244]">
            <FaShare className="text-base md:text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsClient;
