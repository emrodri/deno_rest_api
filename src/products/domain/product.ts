interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

const isProductId = (id: any): id is string => {
  return typeof id === "string";
};

const isProduct = (product: any): product is Product => {
  return (
    typeof product !== "undefined" &&
    typeof product.id === "string" &&
    typeof product.name === "string" &&
    typeof product.price === "number"
  );
};

export { Product, isProduct, isProductId };
