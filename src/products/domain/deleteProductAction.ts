import { Product } from "./product.ts";
import ProductsRepository from "./productsRepository.ts";

const deleteProductAction = (
  repository: ProductsRepository,
  id: string,
): void => {
  repository.deleteProduct(id);
};

export default deleteProductAction;
