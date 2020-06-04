interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

const isProductId = (id: string | undefined): id is string => {
  return typeof id !== "undefined";
};

const isProduct = (product: Product | undefined): product is Product => {
  return (
    typeof product !== "undefined" &&
    typeof product.id === "string" &&
    typeof product.name === "string" &&
    typeof product.price === "number"
  );
};

export { Product, isProduct, isProductId };
