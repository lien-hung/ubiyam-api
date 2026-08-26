import { Router } from "express";
import productRouter from "./productRouter.ts";
import bundleRouter from "./bundleRouter.ts";
import bundleGiftRouter from "./bundleGiftRouter.ts";
import checkoutRouter from "./checkoutRouter.ts";

const appRouter = Router();

appRouter.use("/products", productRouter);
appRouter.use("/bundles", bundleRouter);
appRouter.use("/gifts", bundleGiftRouter);
appRouter.use("/checkout", checkoutRouter);

export default appRouter;