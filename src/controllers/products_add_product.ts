import { Product, isProduct } from "../../domain/product.ts";
import {
  productBadRequestResponse,
  productCreatedResponse,
  productNotValidResponse,
} from "../responses/products.ts";

import ProductsRepository from "../repositories/productsRepository.ts";
import { v4 } from "../../deps.ts";

// @desc    Add a product
// @route   POST /api/v1/products
const addProduct = (productsRepository: ProductsRepository) =>
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

    productsRepository.addProduct(product);
    productCreatedResponse(response);
  };
export default addProduct;
