import { Router } from "express";
import { BundleGiftController } from "../controller/BundleGiftController.ts";

const bundleGiftRouter = Router();
bundleGiftRouter.post("/", BundleGiftController.create);
bundleGiftRouter.get("/", BundleGiftController.findAll);
bundleGiftRouter.get("/:id", BundleGiftController.findOne);
bundleGiftRouter.put("/:id", BundleGiftController.update);
bundleGiftRouter.delete("/:id", BundleGiftController.delete);

export default bundleGiftRouter;