import ProductDetails from "@/app/component/ProductDeatils";
import products from "@/app/data/product"; // Adjust this path as necessary

export async function generateMetadata({ params }) {
const { id } = params;

const product = products.find((p) => p.id === parseInt(id));

if (!product) {
return {
title: 'Product Not Found',
description: 'The product you are looking for does not exist.',
};
}

return {
title: "product.name",
description: "product.description",
openGraph: {
title: "product.name",
description:" product.description",
   
      url: `https://renny-luxe.vercel.app/1`,
images: [
{
url: product.image.src,
width: 800,
height: 600,
alt: "product.name",
},
],
},
twitter: {
card: 'summary_large_image',
title: product.name,
description: product.description,
image: product.image,
},
};
}

const ProductDetailsPage = ({ params }) => {
if (!params || !params.id) {
return <div>Loading...</div>; // Handle loading or error state
}

const { id } = params;

// Log the received ID and products
console.log('Received ID:', id);
console.log('Available Products:', products);

const product = products.find((p) => p.id === parseInt(id)); // Use parseInt if IDs are numeric

if (!product) {
return <div>Product not found</div>; // Handle the case when the product is not found
}

return (
<div className="container mx-auto px-6 py-10">
<div>
  shhxhhx9s
</div>
</div>
);
};

export default ProductDetailsPage;