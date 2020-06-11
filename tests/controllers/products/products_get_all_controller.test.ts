import { assertEquals } from "../../../deps.ts";
import { createContext } from "../../testUtils.ts";
import createTestProductRepository from "./testMockRepository.ts";
import { generateProductsMock } from "../../testMocks.ts";
import productsGetAllController from "../../../src/controllers/products_get_all_controller.ts";

Deno.test("controller product getAll: should response a 200 with the resources retrieved", () => {
  const { response } = createContext();
  const products = generateProductsMock(5);
  const repository = createTestProductRepository(products);

  productsGetAllController(repository)({ response });

  assertEquals(
    response,
    { status: 200, body: { success: true, data: products } },
  );
});
