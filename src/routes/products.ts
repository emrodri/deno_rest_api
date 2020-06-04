import { Router } from "../../deps.ts";
import productsCreateController from "../controllers/products_create_controller.ts";
import productsDeleteController from "../controllers/products_delete_controller.ts";
import productsGetAllController from "../controllers/products_get_all_controller.ts";
import productsRespository from "../products/repositories/InMemoryProductsRepository.ts";
import productsUpdateController from "../controllers/products_update_controller.ts";

const productsRouter = new Router();

productsRouter
  .get("/api/v1/products", productsGetAllController(productsRespository))
  .get("/api/v1/products/:id", productsGetAllController(productsRespository))
  .post("/api/v1/products", productsCreateController(productsRespository))
  .put("/api/v1/products/:id", productsUpdateController(productsRespository))
  .delete(
    "/api/v1/products/:id",
    productsDeleteController(productsRespository),
  );

export default productsRouter;
