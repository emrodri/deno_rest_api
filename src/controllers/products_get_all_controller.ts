import ProductsRepository from "../products/domain/productsRepository.ts";
import getAllProductsAction from "../products/actions/getAllProductsAction.ts";
import { productsResponse } from "../responses/products.ts";

// @desc    Get all products
// @route   GET /api/v1/products
const productsGetAllController = (productsRepository: ProductsRepository) =>
  ({ response }: any) => {
    const products = getAllProductsAction(productsRepository);
    productsResponse(response, products);
  };

export default productsGetAllController;
