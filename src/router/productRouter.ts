import { Router } from "express";
import { ProductController } from "../controller/ProductController.ts";

const productRouter = Router();
productRouter.post("/", ProductController.create);
productRouter.get("/", ProductController.findMany);
productRouter.get("/:id", ProductController.findOne);
productRouter.put("/:id", ProductController.update);
productRouter.delete("/:id", ProductController.delete);

export default productRouter;