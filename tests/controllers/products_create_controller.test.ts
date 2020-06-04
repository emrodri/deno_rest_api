import { createContext, createRequest } from "../testUtils.ts";

import { assertEquals } from "../../deps.ts";
import createTestProductRepository from "./testMockRepository.ts";
import { generateProductMock } from "../testMocks.ts";
import productsCreateController from "../../src/controllers/products_create_controller.ts";

Deno.test("create product should response a 201", async () => {
  const product: any = generateProductMock();
  const request = createRequest(product);
  const { response } = createContext({ request: request });
  const repository = createTestProductRepository();

  await productsCreateController(repository)({ response, request });

  assertEquals(repository.getProduct(product.id), product);
  assertEquals(response, { status: 201, body: { success: true } });
});
