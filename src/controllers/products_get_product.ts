import { isProduct, isProductId } from "../../domain/product.ts";
import {
  productBadRequestResponse,
  productNotFoundResponse,
  productResponse,
} from "../responses/products.ts";

import ProductsRepository from "../repositories/productsRepository.ts";

// @desc    Get single product
// @route   GET /api/v1/products/:id
const getProduct = (productsRepository: ProductsRepository) =>
  ({ response, params }: any) => {
    if (!isProductId(params.id)) {
      productBadRequestResponse(response, "Id is not valid");
      return;
    }
    const product = productsRepository.getProduct(params.id);
    if (!isProduct(product)) {
      productNotFoundResponse(response);
      return;
    }
    productResponse(response, product);
  };

export default getProduct;
