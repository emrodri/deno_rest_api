import { Product, isProduct, isProductId } from "../../domain/product.ts";
import {
  productBadRequestResponse,
  productNotFoundResponse,
  productNotValidResponse,
  productUpdatedResponse,
} from "../responses/products.ts";

import ProductsRepository from "../repositories/productsRepository.ts";

// @desc    Update a product
// @route   PUT /api/v1/products/:id
const udpateProduct = (productsRepository: ProductsRepository) =>
  async ({ request, response, params }: any) => {
    if (!params || !isProductId(params.id)) {
      productBadRequestResponse(response, "Id parameter is not valid");
      return;
    }
    if (!request.hasBody) {
      productBadRequestResponse(response, "No data for update product");
      return;
    }
    const product = productsRepository.getProduct(params.id);
    if (!isProduct(product)) {
      productNotFoundResponse(response);
      return;
    }
    const body = await request.body();
    const updatedProduct: Product = { ...product, ...body.value };
    if (!isProduct(updatedProduct)) {
      productNotValidResponse(response);
      return;
    }
    productsRepository.updatedProduct(params.id, updatedProduct);
    productUpdatedResponse(response);
  };

export default udpateProduct;
