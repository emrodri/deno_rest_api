import { assertEquals } from "../../../deps.ts";
import { createContext } from "../../testUtils.ts";
import createTestProductRepository from "./testMockRepository.ts";
import { generateProductMock } from "../../testMocks.ts";
import productsGetController from "../../../src/controllers/products_get_controller.ts";

Deno.test("controller product get   : should response a 200 with product info retrieved", () => {
  const product = generateProductMock();
  const params = { id: product.id };
  const { response } = createContext({ params });
  const repository = createTestProductRepository([product]);

  productsGetController(repository)({ response, params });

  assertEquals(
    response,
    { status: 200, body: { success: true, data: product } },
  );
});
