import { Product } from "./product.ts";
import ProductsRepository from "./productsRepository.ts";

const getProductAction = (
  repository: ProductsRepository,
  id: string,
): Product | undefined => {
  return repository.getProduct(id);
};

export default getProductAction;
