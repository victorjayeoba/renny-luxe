// component/SearchComponent.js

"use client"; 

import { useSearchParams } from 'next/navigation'; 
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { SkeletonLoader } from '../common/SkeletonLoader';
import { getProducts } from '@/services/firebase';

const SearchComponent = () => {
  const searchParams = useSearchParams(); 
  const searchTerm = searchParams.get('s') || ''; 
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (products.length) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  return (
    <div className="container mx-auto px-4 py-10 min-h-96">
     {filteredProducts.length > 0 ? (
  <section className="pt-8">
    <div className="mx-auto  xl:px-6">
      <h2 className="text-3xl font-bold text-start mb-6 text-[#A67B5B]">
        Search Results
      </h2>
      <div className="xl:container mx-auto py-8">
        <div className="grid grid-cols-2 gap-3 md:gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center">
          {loading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <SkeletonLoader key={index} />
            ))
          ) : (
            filteredProducts.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} showcartBtn={true} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  </section>
) : (
  loading ? (
    <div className="xl:container mx-auto grid grid-cols-2 gap-3 md:gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center">
      {
    Array.from({ length: 8 }).map((_, index) => (
      <SkeletonLoader key={index} />
    ))
      }
      </div>
    )
   : (
   <p>No results found for &quot;{searchTerm}&quot;.</p>
  )
)}

    </div>
  );
};

export default SearchComponent;
