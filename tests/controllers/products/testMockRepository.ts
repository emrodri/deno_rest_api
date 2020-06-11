import { Product } from "../../../src/products/domain/product.ts";
import ProductsRepository from "../../../src/products/domain/productsRepository.ts";

const createTestProductRepository = (
  products: Product[] = [],
): ProductsRepository => {
  return {
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
    deleteProduct: (guid: string): void => {
      products = products.filter((p: Product) => p.id !== guid);
    },
  };
};

export default createTestProductRepository;
