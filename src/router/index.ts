import { Router } from "express";
import productRouter from "./productRouter.ts";
import bundleRouter from "./bundleRouter.ts";
import bundleGiftRouter from "./bundleGiftRouter.ts";

const appRouter = Router();

appRouter.use("/products", productRouter);
appRouter.use("/bundles", bundleRouter);
appRouter.use("/gifts", bundleGiftRouter);

export default appRouter;