import {
  generateProductMock,
  generateProductsMock,
  generateUUID,
} from "../../testMocks.ts";

import { assertEquals } from "../../../deps.ts";
import createTestProductRepository from "../../controllers/products/testMockRepository.ts";
import getProductAction from "../../../src/products/actions/getProductAction.ts";

Deno.test("action product getProduct: should retrive product from repository", () => {
  let products = generateProductsMock(10);
  const product = generateProductMock();
  products = [...products, product];
  const repository = createTestProductRepository(products);

  const retrievedProduct = getProductAction(repository, product.id);

  assertEquals(retrievedProduct, product);
});

Deno.test("action product getProduct: should return undefined if product not found", () => {
  const nonExistingProductID = generateUUID();
  const repository = createTestProductRepository();

  const retrievedProduct = getProductAction(repository, nonExistingProductID);

  assertEquals(retrievedProduct, undefined);
});
