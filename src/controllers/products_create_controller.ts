import { Product, isProduct } from "../products/domain/product.ts";
import {
  productBadRequestResponse,
  productCreatedResponse,
  productNotValidResponse,
} from "../responses/products.ts";

import ProductsRepository from "../products/domain/productsRepository.ts";
import createProductAction from "../products/domain/createProductAction.ts";
import { v4 } from "../../deps.ts";

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
    product.id = v4.generate();

    if (!isProduct(product)) {
      productNotValidResponse(response);
      return;
    }

    createProductAction(productsRepository, product);
    productCreatedResponse(response);
  };
export default productsCreateController;
