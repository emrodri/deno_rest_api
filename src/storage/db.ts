import { Product } from "../products/domain/product.ts";

interface MemoryDatabase {
  products: Product[];
}
const inMemoryDb: MemoryDatabase = {
  products: [
    {
      id: "f39ff6db-366f-46e8-9301-d07ea4890a08",
      name: "Product One",
      description: "This is product One",
      price: 29.9,
    },
    {
      id: "c884aa8d-0879-4564-95aa-de72544ad169",
      name: "Product Two",
      description: "This is product Two",
      price: 39.99,
    },
    {
      id: "d80a4279-ea41-4522-825f-9d30e91471b3",
      name: "Product Three",
      description: "This is product Three",
      price: 59.99,
    },
  ],
};

export default inMemoryDb;
