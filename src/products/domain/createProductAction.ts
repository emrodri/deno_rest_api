import { Product } from "./product.ts";
import ProductsRepository from "./productsRepository.ts";

const createProductAction = (
  repository: ProductsRepository,
  product: Product,
) => {
  repository.addProduct(product);
};

export default createProductAction;
