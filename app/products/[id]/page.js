// app/products/[id]/page.js
import { getProducts } from "@/services/firebase"; // Adjust the path as necessary
import ProductDetailsStatic from "@/app/component/ProductDetailsStatic";

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

  // Fetch related products
  const relatedProducts = product.related_products.map((relatedId) => 
    products.find(p => p.id === relatedId)
  ).filter(Boolean); // Filter out undefined values

  return (
    <>
      <ProductDetailsStatic product={product} />
      {relatedProducts.length > 0 && (
        <div>
          <h2>Related Products</h2>
          <ul>
            {relatedProducts.map((relatedProduct) => (
              <li key={relatedProduct.id}>
                <h3>{relatedProduct.name}</h3>
                <img src={relatedProduct.main_image} alt={relatedProduct.name} />
                <p>${relatedProduct.price}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ProductDetailsPage;
