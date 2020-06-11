import { Product } from "../domain/product.ts";
import ProductsRepository from "../domain/productsRepository.ts";

const getProductAction = (
  repository: ProductsRepository,
  id: string,
): Product | undefined => {
  return repository.getProduct(id);
};

export default getProductAction;
