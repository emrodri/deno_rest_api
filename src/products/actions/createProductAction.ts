import { Product } from "../domain/product.ts";
import ProductsRepository from "../domain/productsRepository.ts";

const createProductAction = (
  repository: ProductsRepository,
  product: Product,
): void => {
  const existingItem = repository.getProduct(product.id);
  if (typeof existingItem !== "undefined") {
    throw new Error("Cannot create. Duplicated product identifier");
  }
  repository.addProduct(product);
};

export default createProductAction;
