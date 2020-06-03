import { RouterContext, v4 } from "../../deps.ts";
import {
  productBadRequestResponse,
  productCreatedResponse,
  productDeleteResponse,
  productNotFoundResponse,
  productNotValidResponse,
  productResponse,
  productUpdatedResponse,
  productsResponse,
} from "../responses/products.ts";

import { Product } from "../types.ts";
import ProductsRepository from "../repositories/productsRepository.ts";

// @desc    Get all products
// @route   GET /api/v1/products
const getProducts = (productsRepository: ProductsRepository) =>
  ({ response }: any) => {
    productsResponse(response, productsRepository.getProducts());
  };

// @desc    Get single product
// @route   GET /api/v1/products/:id
const getProduct = (productsRepository: ProductsRepository) =>
  ({ response, params }: any) => {
    if (!checkIdIsValid(params.id)) {
      productBadRequestResponse(response, "Id is not valid");
      return;
    }
    const product: Product | undefined = productsRepository.getProduct(
      params.id,
    );
    if (!checkProductExists(product)) {
      productNotFoundResponse(response);
      return;
    }
    productResponse(response, product);
  };

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

    if (!checkIsProduct(product)) {
      productNotValidResponse(response);
      return;
    }

    productsRepository.addProduct(product);
    productCreatedResponse(response);
  };

// @desc    Update a product
// @route   PUT /api/v1/products/:id
const udpateProduct = (productsRepository: ProductsRepository) =>
  async ({ request, response, params }: RouterContext) => {
    if (!checkIdIsValid(params.id)) {
      productBadRequestResponse(response, "Id is not valid");
      return;
    }
    if (!request.hasBody) {
      productBadRequestResponse(response, "No data for update product");
      return;
    }
    const product: Product | undefined = productsRepository.getProduct(
      params.id,
    );
    if (!checkProductExists(product)) {
      productNotFoundResponse(response);
      return;
    }
    const body = await request.body();
    const updatedProduct = { ...product, ...body.value };
    if (!checkIsProduct(updatedProduct)) {
      productNotValidResponse(response);
      return;
    }
    productsRepository.updatedProduct(params.id, product);
    productUpdatedResponse(response);
  };

// @desc    Delete a product
// @route   DELETE /api/v1/products/:id
const deleteProduct = (productsRepository: ProductsRepository) =>
  ({ response, params }: RouterContext) => {
    if (!checkIdIsValid(params.id)) {
      productBadRequestResponse(response, "Id is not valid");
      return;
    }
    const product: Product | undefined = productsRepository.getProduct(
      params.id,
    );
    if (!checkProductExists(product)) {
      productNotFoundResponse(response);
      return;
    }
    productsRepository.deleteProduct(params.id);
    productDeleteResponse(response);
  };

const checkIdIsValid = (id: string | undefined): id is string => {
  return typeof id !== "undefined";
};
const checkProductExists = (
  product: Product | undefined,
): product is Product => {
  return typeof product !== "undefined";
};

const checkIsProduct = (product: Product): product is Product => {
  return (
    typeof product.id === "string" &&
    typeof product.name === "string" &&
    typeof product.price === "number"
  );
};

export { getProducts, getProduct, addProduct, deleteProduct, udpateProduct };
