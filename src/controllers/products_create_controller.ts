import { Product, isProduct } from "../products/domain/product.ts";
import {
  productBadRequestResponse,
  productCreatedResponse,
  productNotCreatedResponse,
  productNotValidResponse,
} from "../responses/products.ts";

import ProductsRepository from "../products/domain/productsRepository.ts";
import createProductAction from "../products/actions/createProductAction.ts";

// @desc    Add a product
// @route   POST /api/v1/products
const productsCreateController = (productsRepository: ProductsRepository) =>
  async ({ request, response }: any) => {
    const body = await request.body();
    if (!request.hasBody) {
      productBadRequestResponse(response, "No data for product");
      return;
    }
    const product: Product = body.value;

    if (!isProduct(product)) {
      productNotValidResponse(response);
      return;
    }
    try {
      createProductAction(productsRepository, product);
    } catch (err) {
      productNotCreatedResponse(response, "Exisiting product Id");
      return;
    }
    productCreatedResponse(response);
  };
export default productsCreateController;
