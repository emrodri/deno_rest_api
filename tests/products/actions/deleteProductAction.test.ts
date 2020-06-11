import { assertEquals, assertThrows } from "../../../deps.ts";
import { generateProductMock, generateUUID } from "../../testMocks.ts";

import createTestProductRepository from "../../controllers/products/testMockRepository.ts";
import deleteProductAction from "../../../src/products/actions/deleteProductAction.ts";

Deno.test("action product delete    : should delete a product from repository", () => {
  const product = generateProductMock();
  const repository = createTestProductRepository([product]);
  assertEquals(repository.getProducts().length, 1);

  deleteProductAction(repository, product.id);

  assertEquals(repository.getProduct(product.id), undefined);
  assertEquals(repository.getProducts().length, 0);
});

Deno.test("action product delete    : should not fail if product not exist in repository", () => {
  const productNotExistingID = generateUUID();
  const product = generateProductMock();
  const repository = createTestProductRepository([product]);
  assertEquals(repository.getProducts().length, 1);
  deleteProductAction(repository, productNotExistingID);
  assertEquals(repository.getProducts().length, 1);
});
