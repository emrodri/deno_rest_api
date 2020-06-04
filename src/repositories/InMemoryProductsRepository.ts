import { Product } from "../../domain/product.ts";
import ProductsRepository from "./productsRepository.ts";
import inMemoryDb from "../storage/db.ts";

let { products } = inMemoryDb;

const productsRespository: ProductsRepository = {
  getProducts: () => [...products],
  getProduct: (guid: string) => products.find((p: Product) => p.id === guid),
  addProduct: (product: Product) => {
    products = [...products, product];
  },
  updatedProduct: (guid: string, updatedProduct: Product) => {
    const updatedProducts = products.map((p: Product) =>
      p.id === guid ? updatedProduct : p
    );
    products = [...updatedProducts];
  },
  deleteProduct: (guid: string): void => {},
};

export default productsRespository;
