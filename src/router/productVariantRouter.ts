import { Router } from "express";
import { ProductVariantController } from "../controller/ProductVariantController.ts";

const productVariantRouter = Router();
productVariantRouter.post("/", ProductVariantController.create);
productVariantRouter.get("/", ProductVariantController.findAll);
productVariantRouter.get("/:id", ProductVariantController.findOne);
productVariantRouter.delete("/:id", ProductVariantController.delete);

export default productVariantRouter;