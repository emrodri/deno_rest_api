import { assertEquals } from "../../../deps.ts";
import createTestProductRepository from "../../controllers/products/testMockRepository.ts";
import {
  generateProductsMock,
} from "../../testMocks.ts";
import getAllProductsAction from "../../../src/products/actions/getAllProductsAction.ts";

Deno.test("action product getAll    : should retrive product from repository", () => {
  const products = generateProductsMock(10);
  const repository = createTestProductRepository(products);

  const retrievedProducts = getAllProductsAction(repository);

  assertEquals(retrievedProducts, products);
});
