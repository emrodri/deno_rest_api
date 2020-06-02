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
import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import inMemoryDb from "../storage/db.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

let { products } = inMemoryDb;

// @desc    Get all products
// @route   GET /api/v1/products
const getProducts = ({ response }: RouterContext) => {
  productsResponse(response, products);
};

// @desc    Get single product
// @route   GET /api/v1/products/:id
const getProduct = ({ response, params }: RouterContext) => {
  const product: Product | undefined = products.find((p) => p.id === params.id);
  if (!checkProductExists(product)) {
    productNotFoundResponse(response);
    return;
  }
  productResponse(response, product);
};

// @desc    Add a product
// @route   POST /api/v1/products
const addProduct = async ({ request, response }: RouterContext) => {
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

  products = [...products, product];
  productCreatedResponse(response);
};

// @desc    Update a product
// @route   PUT /api/v1/products/:id
const udpateProduct = async ({ request, response, params }: RouterContext) => {
  const product: Product | undefined = products.find((p) => p.id === params.id);
  const body = await request.body();
  if (!request.hasBody) {
    productBadRequestResponse(response, "No data for update product");
    return;
  }
  if (!checkProductExists(product)) {
    productNotFoundResponse(response);
    return;
  }
  const updatedProduct = { ...product, ...body.value };
  if (!checkIsProduct(updatedProduct)) {
    productNotValidResponse(response);
    return;
  }
  products = products.map((
    p: Product,
  ) => (p.id === params.id ? updatedProduct : p));
  productUpdatedResponse(response);
};

// @desc    Delete a product
// @route   DELETE /api/v1/products/:id
const deleteProduct = ({ response, params }: RouterContext) => {
  const product: Product | undefined = products.find((p: Product) =>
    p.id === params.id
  );
  if (!checkProductExists(product)) {
    productNotFoundResponse(response);
    return;
  }
  products = products.filter((p) => p.id !== params.id);
  productDeleteResponse(response);
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
