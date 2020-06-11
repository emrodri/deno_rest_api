import { createContext, createRequest } from "../../testUtils.ts";

import { assertEquals } from "../../../deps.ts";
import createTestProductRepository from "./testMockRepository.ts";
import { generateProductMock } from "../../testMocks.ts";
import productsCreateController from "../../../src/controllers/products_create_controller.ts";

Deno.test("controller product create: should response a 201 created if created product", async () => {
  const product = generateProductMock();
  const repository = createTestProductRepository();
  const request = createRequest(product);
  const { response } = createContext({ request: request });

  await productsCreateController(repository)({ response, request });
  assertEquals(repository.getProduct(product.id), product);
  assertEquals(response, { status: 201, body: { success: true } });
});

Deno.test("controller product create: should response a 409 conflict if duplicated product id", async () => {
  const product = generateProductMock();
  const repository = createTestProductRepository([product]);
  const request = createRequest(product);
  const { response } = createContext({ request: request });

  await productsCreateController(repository)({ response, request });

  const responseStatus = response?.status;
  const responseSuccess = response?.body.success;
  assertEquals(repository.getProducts().length, 1);
  assertEquals(responseStatus, 409);
  assertEquals(responseSuccess, false);
});
