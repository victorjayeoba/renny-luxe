import { useState } from 'react';
import Image from 'next/image';
import { FaHeart, FaRegHeart, FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';

const ProductCard = ({ product }) => {
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

  return (
    <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
      <Link href={`/products/${product.id}`}>
        <div className="relative group cursor-pointer">
          <Image 
            src={product.image.src} 
            alt={product.name} 
            width={300} 
            height={300} 
            className="w-full h-48 object-cover" 
          />
        </div>
      </Link>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-blue-800">{product.name}</h2>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xl font-bold text-green-600">{product.price}</span>
        </div>
        <div className="flex items-center gap-3 justify-between mt-4">
          {isInCart ? (
            <div className="flex w-full justify-between bg-gray-100 py-1 items-center">
              <button onClick={handleDecrement} className="bg-gray-300 text-black py-1 px-2 rounded-l hover:bg-gray-400 transition">
                <FaMinus />
              </button>
              <span className="mx-2">{quantity}</span>
              <button onClick={handleIncrement} className="bg-gray-300 text-black py-1 px-2 rounded-r hover:bg-gray-400 transition">
                <FaPlus />
              </button>
            </div>
          ) : (
            <button onClick={handleAddToCart} className="bg-[#A67B5B] w-full text-white py-1 px-4 rounded hover:bg-[#d38244] transition flex items-center">
              <FaShoppingCart className="mr-1" />
              Add to Cart
            </button>
          )}
          <button onClick={() => handleWish(!isInWish)} className="text-red-600 hover:text-red-800 transition">
            {isInWish ? <FaHeart size={24} /> : <FaRegHeart size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
