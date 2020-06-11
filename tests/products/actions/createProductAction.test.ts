import { assertEquals, assertThrows } from "../../../deps.ts";

import createProductAction from "../../../src/products/actions/createProductAction.ts";
import createTestProductRepository from "../../controllers/products/testMockRepository.ts";
import { generateProductMock } from "../../testMocks.ts";

Deno.test("action product create    : should create a product in repository", () => {
  const product = generateProductMock();
  const repository = createTestProductRepository();
  assertEquals(repository.getProducts().length, 0);

  createProductAction(repository, product);

  assertEquals(repository.getProduct(product.id), product);
  assertEquals(repository.getProducts().length, 1);
});

Deno.test("action product create    : should throw error if duplicated id", () => {
  const product = generateProductMock();
  const repository = createTestProductRepository([product]);
  assertEquals(repository.getProducts().length, 1);

  assertThrows(() => createProductAction(repository, product));
  assertEquals(repository.getProducts().length, 1);
});
