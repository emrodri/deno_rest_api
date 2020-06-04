import { Product } from "../src/types.ts";
import ProductsRepository from "../src/repositories/productsRepository.ts";

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
    deleteProduct: (guid: string): void => {},
  };
};

const createContext = (contextOptions: ContextOptions = {}) => {
  const defaultContext: ContextOptions = {
    request: {
      body: async () => ({ value: undefined }),
      hasBody: true,
    },
    response: {
      body: "",
    },
  };
  return { ...defaultContext, ...contextOptions };
};
interface ContextOptions {
  request?: {
    body: () => Promise<{ value: any }>;
    hasBody: boolean;
  };
  response?: {
    body: string;
  };
  params?: object | undefined;
}
export { createTestProductRepository, createContext };
