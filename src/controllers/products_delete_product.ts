import { isProduct, isProductId } from "../../domain/product.ts";
import {
  productBadRequestResponse,
  productDeleteResponse,
  productNotFoundResponse,
} from "../responses/products.ts";

import ProductsRepository from "../repositories/productsRepository.ts";

// @desc    Delete a product
// @route   DELETE /api/v1/products/:id
const deleteProduct = (productsRepository: ProductsRepository) =>
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
    productsRepository.deleteProduct(params.id);
    productDeleteResponse(response);
  };

export default deleteProduct;
