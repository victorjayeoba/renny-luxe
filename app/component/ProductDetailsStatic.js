// component/ProductDetailsStatic.js

import Image from "next/image";
import Link from "next/link";
import products from "@/app/data/product";
import ProductDetailsClient from "./ProductDetailsClient";
const ProductDetailsStatic = ({ product }) => {
  // Find related products by category or any custom logic
/*   const relatedProducts = products.filter(
    (p) => p.category ===  p.id !== product.id
  ); */

  return (
    <div>
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="flex-1 flex items-center justify-center">
            <Image
              src={product?.main_image}
              width={400}
              height={400}
              alt={product.name}
              className="w-full lg:max-w-96 rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1 my-3">
            <h1 className="text-3xl font-bold mb-2">{product?.name}</h1>
            <p className="text-xl text-green-600 mb-2">    <span>₦</span>{product?.price.toLocaleString('en-US')}</p>
            <p className="mb-2">{product?.description}</p>
          <ProductDetailsClient name={product.name} />
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default ProductDetailsStatic;
