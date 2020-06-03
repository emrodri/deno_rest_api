import { Product } from "../types.ts";
interface ProductsRepository {
  getProducts: () => Product[];
  getProduct: (guid: string) => Product | undefined;
  addProduct: (product: Product) => void;
  updatedProduct: (guid: string, updatedProduct: Product) => void;
  deleteProduct: (guid: string) => void;
}

export default ProductsRepository;
