import { Application } from "./deps.ts";
import logger from "./modules/logger.ts";
import productsRouter from "./src/routes/products.ts";
import responseTime from "./modules/responseTime.ts";

const port = 5000;
const app = new Application();
app.use(logger);
app.use(responseTime);

app.use(productsRouter.routes());
app.use(productsRouter.allowedMethods());

console.log(`Server running on port ${port}`);
await app.listen({ port });
