import {
  isProduct,
  isProductId,
} from "../../../src/products/domain/product.ts";

import { assertEquals } from "../../../deps.ts";
import { generateProductMock } from "../../testMocks.ts";

Deno.test("domain product isProductId: should return true if param is a product id", () => {
  assertEquals(isProductId("string"), true);
});

Deno.test("domain product isProductId: should return false if param is not a product id", () => {
  assertEquals(isProductId(1), false);
  assertEquals(isProductId(undefined), false);
  assertEquals(isProductId(false), false);
  assertEquals(isProductId(null), false);
});

Deno.test("domain product isProduct: should return true if param is a product", () => {
  const product = generateProductMock();
  assertEquals(isProduct(product), true);
});
Deno.test("domain product isProduct: should return false if param is not a product", () => {
  const product = generateProductMock();
  const { id, ...productWithNoId } = product;
  const productBadName = { ...product, name: 1 };
  const productBadPrice = { ...product, price: "29,90" };
  const productBadId = { ...product, id: 1 };
  assertEquals(isProduct(productBadId), false);
  assertEquals(isProduct(productBadName), false);
  assertEquals(isProduct(productBadPrice), false);
  assertEquals(isProduct(productWithNoId), false);
  assertEquals(isProduct(undefined), false);
  assertEquals(isProduct({}), false);
});
