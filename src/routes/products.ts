import {
  addProduct,
  deleteProduct,
  getProduct,
  getProducts,
  udpateProduct,
} from "../controllers/products.ts";

import { Router } from "https://deno.land/x/oak/mod.ts";

const productsRouter = new Router();

productsRouter
  .get("/api/v1/products", getProducts)
  .get("/api/v1/products/:id", getProduct)
  .post("/api/v1/products", addProduct)
  .put("/api/v1/products/:id", udpateProduct)
  .delete("/api/v1/products/:id", deleteProduct);

export default productsRouter;
