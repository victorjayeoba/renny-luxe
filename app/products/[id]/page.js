// app/products/[id]/page.js


import ProductDetailsClient from "@/app/component/ProductDetailsClient";
import ProductDetailsStatic from "@/app/component/ProductDetailsStatic";
import products from "@/app/data/product";


export async function generateMetadata({ params }) {
  const { id } = params;
  const product = products.find((p) => p.id === parseInt(id));

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
      url: `https://your-site.com/products/${id}`,
      images: [{ url: product.image.src }],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      image: product.image.src,
    },
  };
}

const ProductDetailsPage = ({ params }) => {
  const { id } = params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <ProductDetailsStatic product={product} />

    </>
  );
};

export default ProductDetailsPage;
