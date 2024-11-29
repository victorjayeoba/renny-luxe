export const getRelatedProducts = (relatedProducts, products) => {
  if (!relatedProducts) return;

  // Convert DocumentSnapshot to plain objects
  const relatedProductIds = relatedProducts.map((docRef) => docRef.id); // Extract the id property
  
  // Filter products by matching ids
  return products.filter((product) => relatedProductIds.includes(product.id));
};
