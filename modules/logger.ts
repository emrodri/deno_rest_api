import {
  Context,
  bold,
  cyan,
  green,
} from "../deps.ts";

const logger = async (
  context: Context<Record<string, any>>,
  next: () => Promise<void>,
) => {
  await next();
  const rt = context.response.headers.get("X-Response-Time");
  console.log(
    `${green(context.request.method)} ${cyan(context.request.url.pathname)} - ${
      bold(String(rt))
    }`,
  );
};

export default logger;
