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
            <ProductDetailsClient product={product} />
          </div>
        </div>
      </div>

      {/* Related Products Section */}
    {/*   <div className="mt-12">
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
                className="text-[#A67B5B] hover:underline text-sm"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default ProductDetailsStatic;
