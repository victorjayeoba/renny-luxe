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

const ProductDetails = () => {

/*   const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);
  const [isInWish, setIsInWish] = useState(false); */

  // Find related products by category or any custom logic
  /* const relatedProducts = products.filter(
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
  }; */

  return (
  <div>I am good</div>
  );
};

export default ProductDetails;
