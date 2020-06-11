import { generateProductMock, generateUUID } from "../../testMocks.ts";

import { assertEquals } from "../../../deps.ts";
import { createContext } from "../../testUtils.ts";
import createTestProductRepository from "./testMockRepository.ts";
import productsDeleteController from "../../../src/controllers/products_delete_controller.ts";

Deno.test("controller product delete: should response a 200 success if deleted product", () => {
  const product = generateProductMock();
  const params = { id: product.id };
  const { response } = createContext({ params });
  const repository = createTestProductRepository([product]);

  productsDeleteController(repository)({ response, params });

  assertEquals(repository.getProduct(product.id), undefined);
  assertEquals(
    response,
    { status: 200, body: { success: true } },
  );
});

Deno.test("controller product delete: should response a 404 not found if product not finded", () => {
  const params = { id: generateUUID() };
  const { response } = createContext({ params });
  const repository = createTestProductRepository();

  productsDeleteController(repository)({ response, params });
  const responseStatus = response?.status;
  const responseSuccess = response?.body.success;

  assertEquals(repository.getProduct(params.id), undefined);
  assertEquals(responseStatus, 404);
  assertEquals(responseSuccess, false);
});
