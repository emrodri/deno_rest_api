import { assertEquals, assertNotEquals, assertThrows } from "../../../deps.ts";

import { Product } from "../../../src/products/domain/product.ts";
import createTestProductRepository from "../../controllers/products/testMockRepository.ts";
import { generateProductMock } from "../../testMocks.ts";
import updateProductAction from "../../../src/products/actions/updateProductAction.ts";

Deno.test("action product update    : should update a product in repository", () => {
  const product = generateProductMock();
  const repository = createTestProductRepository([product]);
  product.name = "Update Name";
  product.price = 0.0001;
  product.description = "Updated description name";

  updateProductAction(repository, product, product.id);

  const updatedProduct = repository.getProduct(product.id) as Product;
  assertNotEquals(updatedProduct, undefined);
  assertEquals(updatedProduct.id, product.id);
  assertEquals(updatedProduct.name, product.name);
  assertEquals(updatedProduct.description, product.description);
  assertEquals(updatedProduct.price, product.price);
});

Deno.test("action product update    : should not throw error if product not found", () => {
  const product = generateProductMock();
  const repository = createTestProductRepository();

  updateProductAction(repository, product, product.id);

  const updatedProduct = repository.getProduct(product.id);
  assertEquals(updatedProduct, undefined);
});
