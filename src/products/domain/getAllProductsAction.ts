import { Product } from "./product.ts";
import ProductsRepository from "./productsRepository.ts";

const getAllProductsAction = (
  repository: ProductsRepository,
): Product[] => {
  return repository.getProducts();
};

export default getAllProductsAction;
