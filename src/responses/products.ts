import {
  badRequestResponse,
  createdResponse,
  notFoundResponse,
  successResponse,
  successResponseWithData,
  unprocessableEntityResponse,
} from "./common.ts";

import { Product } from "../../src/products/domain/product.ts";
import { Response } from "../../deps.ts";

const productResponse = (response: any, product: Product) =>
  successResponseWithData(response, product);

const productsResponse = (response: any, products: Product[]) =>
  successResponseWithData(response, products);

const productBadRequestResponse = (response: Response, message: string) =>
  badRequestResponse(response, message);

const productNotValidResponse = (response: Response) =>
  unprocessableEntityResponse(response, "Product data not valid");

const productCreatedResponse = (response: Response) =>
  createdResponse(response);

const productUpdatedResponse = (response: Response) =>
  successResponse(response);

const productDeleteResponse = (response: Response) => successResponse(response);

const productNotFoundResponse = (response: Response) =>
  notFoundResponse(response, "Product not found");

export {
  productResponse,
  productsResponse,
  productBadRequestResponse,
  productCreatedResponse,
  productNotFoundResponse,
  productNotValidResponse,
  productUpdatedResponse,
  productDeleteResponse,
};
