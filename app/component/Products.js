"use client";
// pages/products.js

import { getProducts } from "@/services/firebase";

const ProductsPage = async () => {
  const products = await getProducts();

  // Log products for debugging
  console.log(products);

  // Check if products were fetched successfully
  if (!products) {
    return (
      <div>
        <h1>Products</h1>
        <p>Error fetching products. Please try again later.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Products</h1>
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>${product.price.toFixed(2)}</p> {/* Format price to 2 decimal places */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductsPage;
