// app/products/[id]/page.js
import { getProducts } from "@/services/firebase"; // Adjust the path as necessary
import ProductDetailsStatic from "@/app/component/ProductDetailsStatic";
import { getReatedProducts } from "@/app/component/RelatedProduct";
import Image from "next/image";
import ProductCard from "@/app/component/ProductCard";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { id } = params;
  const products = await getProducts(); // Fetch products from Firestore
  const product = products.find((p) => p.id === id); // Assuming ID is a string

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The product you are looking for does not exist.",
    };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      url: `https://renny-luxe.vercel.app/products/${id}`,
      images: [{ url: product.main_image }],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      image: product.main_image,
    },
  };
}

const ProductDetailsPage = async ({ params }) => {
  const { id } = params;
  const products = await getProducts(); // Fetch products from Firestore
  const product = products.find((p) => p.id === id); // Assuming ID is a string


  if (!product) {
    return <div>Product not found</div>;
  }

 const relatedProducts = getReatedProducts(product.related_products,products)

  return (
    <>
      <ProductDetailsStatic productID={id} />
      { relatedProducts.length > 0 ? (
  <div className="py-8 container px-3  mx-auto">
    <h2 className="text-2xl font-bold mb-4">Related Products</h2>
    <div className="overflow-x-auto">
    <div className="grid grid-flow-col auto-cols-[minmax(180px,240px)] gap-6 justify-start">
{relatedProducts.map((product) => (
<div className="max-w-[240px] flex-shrink-0" key={product.id}>
  <ProductCard product={product} />
</div>
))}
</div>

    </div>
  </div>
): (<p className="container mx-auto">NO RELATED PRODUCT AVAILABLE <Link href={"/products" } className="text-base text-red-700">Continue shopping</Link></p>)} 
    </>
  );
};

export default ProductDetailsPage;


