import {
  createContext,
  createRequest,
} from "./testUtils.ts";
import { generateProductMock, generateProductsMock } from "./testMocks.ts";

import { Product } from "../domain/product.ts";
import ProductsRepository from "../src/repositories/productsRepository.ts";
import addProduct from "../src/controllers/products_add_product.ts";
import { assertEquals } from "../deps.ts";
import getProduct from "../src/controllers/products_get_product.ts";
import getProducts from "../src/controllers/products_get_all_controller.ts";
import udpateProduct from "../src/controllers/products_update_product.ts";

Deno.test("getProducts should return the list of all products in repository", () => {
  const product = generateProductMock();
  const params = { id: product.id };
  const { response } = createContext({ params });
  const repository = createTestProductRepository([product]);

  getProduct(repository)({ response, params });

  assertEquals(
    response,
    { status: 200, body: { success: true, data: product } },
  );
});
Deno.test("getProduct should retrive a item by his id", () => {
  const { response } = createContext();
  const products = generateProductsMock(5);
  const repository = createTestProductRepository(products);

  getProducts(repository)({ response });

  assertEquals(
    response,
    { status: 200, body: { success: true, data: products } },
  );
});
Deno.test("add product should write a product in repository", async () => {
  const product: Product = generateProductMock();
  const request = createRequest(product);
  const repository = createTestProductRepository();

  await addProduct(repository)(createContext({ request: request }));

  assertEquals(repository.getProducts(), [product]);
});

Deno.test("udpate product should update a product info", async () => {
  const product: Product = generateProductMock();
  product.name = "Original name";
  const repository = createTestProductRepository([product]);
  repository.addProduct(product);
  assertEquals(repository.getProduct(product.id)?.name, "Original name");

  const updatedProduct = { ...product, name: "Updated Name" };
  const request = createRequest(updatedProduct);
  const params = { id: product.id };
  await udpateProduct(repository)(createContext({ request, params }));

  assertEquals(repository.getProduct(product.id)?.name, "Updated Name");
});

const createTestProductRepository = (
  products: Product[] = [],
): ProductsRepository => {
  return {
    getProducts: () => [...products],
    getProduct: (guid: string) => products.find((p: Product) => p.id === guid),
    addProduct: (product: Product) => {
      products = [...products, product];
    },
    updatedProduct: (guid: string, updatedProduct: Product) => {
      const updatedProducts = products.map((p: Product) =>
        p.id === guid ? updatedProduct : p
      );
      products = [...updatedProducts];
    },
    deleteProduct: (guid: string): void => {},
  };
};
