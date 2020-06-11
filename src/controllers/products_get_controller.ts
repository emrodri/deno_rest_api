import { isProduct, isProductId } from "../products/domain/product.ts";
import {
  productBadRequestResponse,
  productNotFoundResponse,
  productResponse,
} from "../responses/products.ts";

import ProductsRepository from "../products/domain/productsRepository.ts";
import getProductAction from "../products/actions/getProductAction.ts";

// @desc    Get single product
// @route   GET /api/v1/products/:id
const productsGetController = (productsRepository: ProductsRepository) =>
  ({ response, params }: any) => {
    if (!isProductId(params.id)) {
      productBadRequestResponse(response, "Id is not valid");
      return;
    }
    const product = getProductAction(productsRepository, params.id);

    if (!isProduct(product)) {
      productNotFoundResponse(response);
      return;
    }
    productResponse(response, product);
  };

export default productsGetController;
