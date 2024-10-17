"use client";

import { useState } from "react";
import products from "@/app/data/product"; // Adjust this path as necessary
import Image from "next/image";
const ProductDetails = ({ id }) => {
    const product = products.find((p) => p.id === parseInt(id)); 
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart.`);
  };

  const handleAddToWishlist = () => {
    console.log(`Added ${product.name} to wishlist.`);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="flex-1">
          <Image
            src={product.image.src}
            width={200}
            height={200}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-green-600 mb-4">{product.price}</p>
          <p className="mb-4">{product.description}</p>

          <div className="flex items-center mb-4">
            <label htmlFor="quantity" className="mr-2">Quantity:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border rounded w-16 text-center"
              min="1"
            />
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={handleAddToWishlist}
              className="bg-gray-300 text-black px-4 py-2 rounded-lg shadow hover:bg-gray-400 transition"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
