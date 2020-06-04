import ProductsRepository from "../repositories/productsRepository.ts";
import { productsResponse } from "../responses/products.ts";

// @desc    Get all products
// @route   GET /api/v1/products
const getProducts = (productsRepository: ProductsRepository) =>
  ({ response }: any) => {
    productsResponse(response, productsRepository.getProducts());
  };

export default getProducts;
