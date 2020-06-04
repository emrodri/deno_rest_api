import { createContext, createRequest } from "../testUtils.ts";
import { generateProductMock, generateProductsMock } from "../testMocks.ts";

import { Product } from "../../src/products/domain/product.ts";
import { assertEquals } from "../../deps.ts";
import createTestProductRepository from "./testMockRepository.ts";
import productsUpdateController from "../../src/controllers/products_update_controller.ts";

Deno.test("update product should update a product info", async () => {
  const product: Product = generateProductMock();
  product.name = "Original name";
  const repository = createTestProductRepository([product]);
  assertEquals(repository.getProduct(product.id)?.name, "Original name");

  const updatedProduct = { ...product, name: "Updated Name" };
  const request = createRequest(updatedProduct);
  const params = { id: product.id };
  const { response } = createContext({ request, params });
  await productsUpdateController(repository)({ response, request, params });

  assertEquals(repository.getProduct(product.id)?.name, "Updated Name");
  assertEquals(
    response,
    { status: 200, body: { success: true } },
  );
});
