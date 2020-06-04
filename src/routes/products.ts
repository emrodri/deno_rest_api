import { Router } from "../../deps.ts";
import addProduct from "../controllers/products_add_product.ts";
import deleteProduct from "../controllers/products_delete_product.ts";
import getProduct from "../controllers/products_get_product.ts";
import getProducts from "../controllers/products_get_all_controller.ts";
import productsRespository from "../repositories/InMemoryProductsRepository.ts";
import udpateProduct from "../controllers/products_update_product.ts";

const productsRouter = new Router();

productsRouter
  .get("/api/v1/products", getProducts(productsRespository))
  .get("/api/v1/products/:id", getProduct(productsRespository))
  .post("/api/v1/products", addProduct(productsRespository))
  .put("/api/v1/products/:id", udpateProduct(productsRespository))
  .delete("/api/v1/products/:id", deleteProduct(productsRespository));

export default productsRouter;
