import { Product } from "../products/domain/product.ts";

interface MemoryDatabase {
  products: Product[];
}
const inMemoryDb: MemoryDatabase = {
  products: [
    {
      id: "1",
      name: "Product One",
      description: "This is product One",
      price: 29.9,
    },
    {
      id: "2",
      name: "Product Two",
      description: "This is product Two",
      price: 39.99,
    },
    {
      id: "3",
      name: "Product Three",
      description: "This is product Three",
      price: 59.99,
    },
  ],
};

export default inMemoryDb;
