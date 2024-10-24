"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getProducts } from "@/services/firebase";
import { SkeletonLoader } from "../common/SkeletonLoader";
import ProductDetailsClient from "./ProductDetailsClient";

// Skeleton Loader Component for Image
const SkeletonImage = () => (
  <div className="animate-pulse w-full h-96 bg-gray-300 rounded-lg"></div>
);

// Skeleton Loader Component for Text
const SkeletonText = ({ width = "100%" }) => (
  <div className={`animate-pulse h-6 bg-gray-300 rounded-lg`} style={{ width }}></div>
);

const ProductDetailsStatic = ({ productID }) => {
  const [product, setProduct] = useState(null); // Initialize state for product
  const [currentImage, setCurrentImage] = useState(null); // Initialize currentImage as null
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const fetchProduct = async () => {
      const products = await getProducts(); // Fetch products from Firestore
      const foundProduct = products.find((p) => p.id === productID); // Assuming ID is a string
      setProduct(foundProduct); // Set the found product
      setCurrentImage(foundProduct?.main_image); // Set current image after product is found
      setLoading(false); // Set loading to false once the product is fetched
    };

    fetchProduct(); // Call the async function inside useEffect
  }, [productID]); // Add productID to the dependency array

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Images Section on Large Screens */}
        <div className="hidden  xl:flex flex-col space-y-4 max-h-80 px-4 overflow-y-auto">
          {loading ? (
            <div className="w-[30%]">
              <SkeletonImage />
              <SkeletonImage />
            </div>
          ) : product?.images && product.images.length > 0 ? (
            product.images.map((image, index) => {
              const imageUrl = `https://firebasestorage.googleapis.com/v0/b/renny-shop.appspot.com/o/${encodeURIComponent(
                image
              )}?alt=media`;
              return (
                <div
                  key={index}
                  className="cursor-pointer"
                  onClick={() => setCurrentImage(imageUrl)}
                >
                  <Image
                    src={imageUrl || <SkeletonImage/>}
                    width={100}
                    height={100}
                    alt={`Sample image ${index + 1}`}
                    className="rounded-lg border hover:shadow-lg transition-shadow duration-200"
                    onError={(e) => {
                      console.error("Image failed to load:", e.target.src);
                      e.target.style.display = "none"; // Hide the broken image
                    }}
                  />
                </div>
              );
            })
          ) : (
            <p>No additional images available</p>
          )}

          {/* Main Image */}
          <div
            className="cursor-pointer"
            onClick={() => setCurrentImage(product?.main_image)}
          >
            {loading ? (
              <SkeletonImage />
            ) : (
              <Image
                src={product?.main_image ||<SkeletonLoader/>}
                width={100}
                height={100}
                alt={product?.name || "Product Image"}
                className="rounded-lg border hover:shadow-lg transition-shadow duration-200"
                onError={(e) => {
                  console.error("Image failed to load:", e.target.src);
                  e.target.style.display = "none"; // Hide the broken image
                }}
              />
            )}
          </div>
        </div>

        {/* Main Image Section */}
        <div className="flex-1 flex items-center justify-center">
          {loading ? (
            <SkeletonImage />
          ) : (
            <Image
              src={currentImage || "/default-product.jpg"} // Use placeholder if no image is set
              width={400}
              height={400}
              alt={product?.name || "Product Image"}
              className="w-full lg:max-w-96 rounded-lg shadow-lg"
              quality={100}
              priority
            />
          )}
        </div>

        {/* Product Details Section */}
        <div className="flex-1 my-3">
          {loading ? (
            <>
              <SkeletonText width="50%" />
              <br/>
              <SkeletonText width="30%" />
              <br/>
              <SkeletonText width="80%" />
              <br/>
              <SkeletonText width="100%" />
              <br/>
              <SkeletonText width="60%" />
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-2">{product?.name || "Loading..."}</h1>
              <p className="text-xl text-green-600 mb-2">
                <span>₦</span>
                {product?.price ? product.price.toLocaleString("en-US") : "N/A"}
              </p>
              <p className="mb-2">{product?.description || "No description available"}</p>
              <ProductDetailsClient product={product}/>
            </>
          )}
        </div>
      </div>

      {/* Sample Images Section on Small Screens */}
      <div className="xl:hidden mt-8">
        <h2 className="text-xl font-semibold mb-2">More Images</h2>
        <div className="flex space-x-4 overflow-x-auto">
          {loading ? (
            <SkeletonImage />
          ) : product?.images && product.images.length > 0 ? (
            <>
                {/* Main Image */}
          <div
            className="cursor-pointer"
            onClick={() => setCurrentImage(product?.main_image)}
          >
            {loading ? (
              <SkeletonImage />
            ) : (
              <Image
                src={product?.main_image ||<SkeletonLoader/>}
                width={100}
                height={100}
                alt={product?.name || "Product Image"}
                className="rounded-lg border hover:shadow-lg transition-shadow duration-200"
                onError={(e) => {
                  console.error("Image failed to load:", e.target.src);
                  e.target.style.display = "none"; // Hide the broken image
                }}
              />
            )}
          </div>
            {
            product.images.map((image, index) => {
              const imageUrl = `https://firebasestorage.googleapis.com/v0/b/renny-shop.appspot.com/o/${encodeURIComponent(
                image
              )}?alt=media`;
              return (
                <div
                  key={index}
                  className="cursor-pointer"
                  onClick={() => setCurrentImage(imageUrl)}
                >
                  <Image
                    src={imageUrl}
                    width={100}
                    height={100}
                    alt={`Sample image ${index + 1}`}
                    className="rounded-lg border hover:shadow-lg transition-shadow duration-200"
                    onError={(e) => {
                      console.error("Image failed to load:", e.target.src);
                      e.target.style.display = "none"; // Hide the broken image
                    }}
                  />
                </div>
              );
            })}</>
          ) : (
            <p>No additional images available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsStatic;
