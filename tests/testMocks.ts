import { Product } from "../src/types.ts";
import { v4 } from "../deps.ts";
const generateProductMock = (): Product => ({
  id: v4.generate(),
  name: "",
  description: "",
  price: 0,
});

const generateProductsMock = (items: number): Product[] => {
  return [...Array(items)].map(() => generateProductMock());
};

export { generateProductMock, generateProductsMock };
