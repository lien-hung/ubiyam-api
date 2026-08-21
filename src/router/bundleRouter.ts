import { Router } from "express";
import { BundleController } from "../controller/BundleController.ts";

const bundleRouter = Router();
bundleRouter.post("/", BundleController.create);
bundleRouter.get("/", BundleController.findAll);
bundleRouter.get("/:id", BundleController.findOne);
bundleRouter.put("/:id", BundleController.update);
bundleRouter.delete("/:id", BundleController.delete);

export default bundleRouter;