import { assertEquals } from "../../deps.ts";
import { createContext } from "../testUtils.ts";
import createTestProductRepository from "./testMockRepository.ts";
import { generateProductMock } from "../testMocks.ts";
import productsDeleteController from "../../src/controllers/products_delete_controller.ts";

Deno.test("getProduct should retrive a item by his id", () => {
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
