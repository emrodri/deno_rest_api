import { Product } from "../src/products/domain/product.ts";
import { v4 } from "../deps.ts";
const generateUUID = () => v4.generate();
const generateProductMock = (): Product => ({
  id: v4.generate(),
  name: "",
  description: "",
  price: 0,
});

const generateProductsMock = (items: number): Product[] => {
  return [...Array(items)].map(() => generateProductMock());
};

export { generateProductMock, generateProductsMock, generateUUID };
