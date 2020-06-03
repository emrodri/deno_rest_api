import {
  addProduct,
  deleteProduct,
  getProduct,
  getProducts,
  udpateProduct,
} from "../controllers/products.ts";

import { Router } from "../../deps.ts";
import productsRespository from "../repositories/InMemoryProductsRepository.ts";

const productsRouter = new Router();

productsRouter
  .get("/api/v1/products", getProducts(productsRespository))
  .get("/api/v1/products/:id", getProduct(productsRespository))
  .post("/api/v1/products", addProduct(productsRespository))
  .put("/api/v1/products/:id", udpateProduct(productsRespository))
  .delete("/api/v1/products/:id", deleteProduct(productsRespository));

export default productsRouter;
