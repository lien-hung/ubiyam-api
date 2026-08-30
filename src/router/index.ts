import { Router } from "express";
import checkoutRouter from "./checkoutRouter.ts";
import productRouter from "./productRouter.ts";
import productVariantRouter from "./productVariantRouter.ts";

const appRouter = Router();

appRouter.use("/products", productRouter);
appRouter.use("/product-variants", productVariantRouter);
appRouter.use("/checkout", checkoutRouter);

export default appRouter;