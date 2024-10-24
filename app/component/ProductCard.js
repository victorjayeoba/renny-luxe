"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaHeart, FaRegHeart, FaPlus, FaMinus, FaShoppingCart, FaShare } from "react-icons/fa";
import Link from "next/link";

const ProductCard = ({ product, showcartBtn }) => {
  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);
  const [isInWish, setIsInWish] = useState(false);
  const [loading, setLoading] = useState(true);
  const [linkLoading, setLinkLoading] = useState(false);
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    // Load the wishlist from localStorage
    const storedWishList = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishList(storedWishList);

    // Check if the product is already in the cart
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const cartItem = storedCart.find((item) => item.id === product.id);

    if (cartItem) {
      setIsInCart(true);
      setQuantity(cartItem.quantity);
    }

    // Check if the product is in the wishlist
    setIsInWish(storedWishList.some((item) => item.id === product.id));
  }, [isInWish]); // Only depend on product.id

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
    updateCartQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      updateCartQuantity(quantity - 1);
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
    alert(`Added ${quantity} ${product.name}(s) to cart!`);
  };

  const updateCartQuantity = (newQuantity) => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCart = storedCart.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const handleWish = () => {
    let updatedWishList;

    if (isInWish) {
      // Remove from wishlist
      updatedWishList = wishList.filter((p) => p.id !== product.id);
      setIsInWish(false);
    } else {
      // Add to wishlist
      updatedWishList = [...wishList, product];
      setIsInWish(true);
    }

    setWishList(updatedWishList);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishList));
  };

  const handleShare = async () => {
    const shareData = {
      title: product?.name,
      text: `Check out this product: ${product?.name}`,
      url: `/products/${product?.id}`,
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

  const LoadingOverlay = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-16 h-16 border-4 border-t-transparent border-[#A67B5B] rounded-full animate-spin"></div>
    </div>
  );

  return (
    <>
      {linkLoading && <LoadingOverlay />}
      <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
        <Link href={`/products/${product?.id}`} onClick={() => setLinkLoading(true)}>
          <div className="relative group cursor-pointer flex-grow bg-white">
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
              className={`w-full object-cover transition-opacity duration-300 contain ${loading ? "opacity-0" : "opacity-100"}`}
              onLoadingComplete={() => setLoading(false)}
            />
          </div>
        </Link>
        <div className="p-4 text-stone-700 flex flex-col justify-between flex-grow">
          <h2 className="text-lg font-light line-clamp-2">{product.name}</h2>
          <div>
            <div className="flex items-center mt-2">
              <span>₦</span>
              <span className="text-xl font-light">{product?.price.toLocaleString("en-US")}</span>
            </div>
            {showcartBtn ? (
              <div className="flex gap-2 items-center justify-between mt-2">
                {isInCart ? (
                  <div className="flex w-full max-w-40 justify-between bg-gray-100 py-1 items-center">
                    <button onClick={handleDecrement} className="text-black py-1 px-2 rounded-l bg-[#A67B5B] hover:bg-gray-400 transition">
                      <FaMinus color="#ffffff" />
                    </button>
                    <span className="mx-2">{quantity}</span>
                    <button onClick={handleIncrement} className="text-black py-1 px-2 rounded-r bg-[#A67B5B] hover:bg-gray-400 transition">
                      <FaPlus color="#ffffff" />
                    </button>
                  </div>
                ) : (
                  <button onClick={handleAddToCart} className="bg-[#A67B5B] text-sm lg:text-lg item-center gap-0 w-full max-w-40 text-white py-1 px-4 rounded hover:bg-[#d38244] transition flex items-center">
                    <FaShoppingCart className="mr-1 hidden" />
                    Add to Cart
                  </button>
                )}
                <div className="md:flex gap-3">
                  <button onClick={handleWish} className="text-red-600 hover:text-red-800 transition">
                    {isInWish ? <FaHeart className="text-base md:text-xl" /> : <FaRegHeart className="text-base md:text-xl" />}
                  </button>
                  <button onClick={handleShare} className="text-[#A67B5B] hover:text-[#d38244]">
                    <FaShare className="text-base md:text-xl" />
                  </button>
                </div>
              </div>
            ) : (
              <Link href={`/products/${product?.id}`} className="text-sm underline underline-offset-1">
                view product
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
