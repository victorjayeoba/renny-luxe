import products from "@/app/data/product";
import Breadcrumb from "@/app/component/Breadcrubs";
import ProductDetails from "@/app/component/ProductDeatils";

// Generate Metadata Function
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
      url: `https://your-website-url.com/products/${id}`,
      images: [
        {
          url: product.image.src,  // Ensure product.image.src is defined
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      image: product.image.src,  // Make sure this path exists
    },
  };
}

// Product Details Page
const ProductDetailsPage = ({ params }) => {
  const { id } = params;

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

 const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Product Description", href: `/products/${id}` },
  ]; 

  return (
    <>
      <Breadcrumb items={breadcrumbItems }/>
      <div className="container mx-auto px-6 py-4">
      <ProductDetails product={product}/>
      </div>
    </>
  );
};

export default ProductDetailsPage;
