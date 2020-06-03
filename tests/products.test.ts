import {
  addProduct,
  getProduct,
  getProducts,
} from "../src/controllers/products.ts";
import { createContext, createTestProductRepository } from "./testUtils.ts";
import { generateProductMock, generateProductsMock } from "./testMocks.ts";

import { Product } from "../src/types.ts";
import { assertEquals } from "../deps.ts";

Deno.test("getProducts should return the list of all products in repository", () => {
  const product = generateProductMock();
  const params = { id: product.id };
  const { response } = createContext({ params });

  const repository = createTestProductRepository([product]);
  getProduct(repository)({ response, params });
  assertEquals(
    response,
    { status: 200, body: { success: true, data: product } },
  );
});
Deno.test("getProduct should retrive a item by his id", () => {
  const { response } = createContext();
  const products = generateProductsMock(5);
  const repository = createTestProductRepository(products);
  getProducts(repository)({ response });
  assertEquals(
    response,
    { status: 200, body: { success: true, data: products } },
  );
});
Deno.test("add product should write a product in repository", async () => {
  const product: Product = generateProductMock();
  const request = {
    body: async () => ({ value: product }),
    hasBody: true,
  };
  const repository = createTestProductRepository();
  await addProduct(repository)(createContext({ request: request }));
  assertEquals(repository.getProducts(), [product]);
});
