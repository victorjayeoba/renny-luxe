import products from "@/app/data/product";
import Breadcrumb from "@/app/component/Breadcrubs";
import ProductDetails from "@/app/component/ProductDeatils";
import Head from "next/head";


/* export async function generateMetadata({ params }) {
  const { id } = params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The product you are looking for does not exist.",
    };
  }
  console.log("Product:", product);
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      url: `https://renny-luxe.vercel.app/${id}`,
      images: [
        {
          url: product.image.src,
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
      image: product.image.src, // Ensure you're using .src for image URL
    },
  };
} */

const ProductDetailsPage = ({ params }) => {
  if (!params || !params.id) {
    return <div>Loading...</div>; // Fallback for missing params
  }

  const { id } = params;

  // Logging for debugging purposes
  console.log("Received ID:", id);
  console.log("Available Products:", products);


  const product = products.find((p) => p.id === parseInt(id)); // Ensure proper ID matching

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Product Description", href: `/products/${id}` }, // Correct the href path
  ];

  if (!product) {
    return <div>Product not found</div>; // Display if the product does not exist
  }

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Discover the best skincare products tailored for your unique needs. Nourish and rejuvenate your skin with our organic, dermatologist-approved solutions." />
        <meta name="keywords" content="skincare, organic skincare, dermatologist-approved, beauty, skincare products, skin treatments" />
        <meta name="author" content="Jayeoba Victor" />
        
        {/* Open Graph Metadata for Social Sharing */}
        <meta property="og:title" content="Discover Your Perfect Skincare Routine" />
        <meta property="og:description" content="Explore our range of organic, dermatologist-approved skincare products that nourish and rejuvenate your skin." />
        <meta property="og:image" content="https://cdn.pixabay.com/photo/2024/06/28/08/23/ajrak-8858928_640.png" />
        <meta property="og:url"  content="https://renny-luxe.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Discover Your Perfect Skincare Routine" />
        <meta name="twitter:description" content="Explore our range of organic, dermatologist-approved skincare products that nourish and rejuvenate your skin." />
        <meta name="twitter:image" content={"https://cdn.pixabay.com/photo/2024/06/28/08/23/ajrak-8858928_640.png"}/>

        <title>Discover Your Perfect Skincare Routine</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </head>
    <Breadcrumb items={breadcrumbItems} />
    <div className="container mx-auto px-6 py-4">
      <ProductDetails id={id} />
    </div>
  </>
  );
};

export default ProductDetailsPage;
