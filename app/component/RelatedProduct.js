export const getReatedProducts = (relatedProducts, products) => {
    if(!relatedProducts) return;
  const relatedProductIds = relatedProducts.map((docRef) => docRef.id); // Extract the id property
  return products.filter((product) => relatedProductIds.includes(product.id))

};
