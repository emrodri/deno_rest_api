import { isProduct, isProductId } from "../products/domain/product.ts";
import {
  productBadRequestResponse,
  productDeleteResponse,
  productNotFoundResponse,
} from "../responses/products.ts";

import ProductsRepository from "../products/domain/productsRepository.ts";
import deleteProductAction from "../products/actions/deleteProductAction.ts";

// @desc    Delete a product
// @route   DELETE /api/v1/products/:id
const productsDeleteController = (productsRepository: ProductsRepository) =>
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
    deleteProductAction(productsRepository, params.id);
    productDeleteResponse(response);
  };

export default productsDeleteController;
