import { Product } from "./product.ts";
import ProductsRepository from "./productsRepository.ts";

const updateProductAction = (
  repository: ProductsRepository,
  updatedProduct: Product,
  id: string,
): void => {
  repository.updatedProduct(id, updatedProduct);
};

export default updateProductAction;
