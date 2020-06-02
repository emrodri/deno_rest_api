import { Application, Context, Router } from "https://deno.land/x/oak@master/mod.ts";

import { superoak } from "https://deno.land/x/superoak@master/mod.ts";

Deno.test("should launch application with routing", async () => {
  const router = new Router();
  router.get("/", ({response}: Context) => {
    response.body = "Hello Deno!";
  });

  const app = new Application();
  app.use(router.routes());
  app.use(router.allowedMethods());

  const request = await superoak(app);
  await request.get("/").expect("Hello Deno!");
});