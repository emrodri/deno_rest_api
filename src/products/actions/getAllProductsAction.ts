import { Product } from "../domain/product.ts";
import ProductsRepository from "../domain/productsRepository.ts";

const getAllProductsAction = (
  repository: ProductsRepository,
): Product[] => {
  return repository.getProducts();
};

export default getAllProductsAction;
