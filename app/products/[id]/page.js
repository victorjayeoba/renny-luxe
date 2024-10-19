import products from "@/app/data/product";
import Breadcrumb from "@/app/component/Breadcrubs";
import ProductDetails from "@/app/component/ProductDeatils";
import Head from "next/head";


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
}

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
    <Head>
      <title>{product.name}</title>
      <meta name="description" content={product.description} />
      <meta property="og:title" content={product.name} />
      <meta property="og:description" content={product.description} />
      <meta property="og:url" content={`https://renny-luxe.vercel.app/products/${id}`} />
      <meta property="og:image" content={product.image.src} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={product.name} />
      <meta name="twitter:description" content={product.description} />
      <meta name="twitter:image" content={product.image.src} />
    </Head>
    <Breadcrumb items={breadcrumbItems} />
    <div className="container mx-auto px-6 py-4">
      <ProductDetails id={id} />
    </div>
  </>
  );
};

export default ProductDetailsPage;
