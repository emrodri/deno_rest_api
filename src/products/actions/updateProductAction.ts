import { Product } from "../domain/product.ts";
import ProductsRepository from "../domain/productsRepository.ts";

const updateProductAction = (
  repository: ProductsRepository,
  updatedProduct: Product,
  id: string,
): void => {
  repository.updatedProduct(id, updatedProduct);
};

export default updateProductAction;
