import { Router } from "express";
import { CheckoutController } from "../controller/CheckoutController.ts";

const checkoutRouter = Router();
checkoutRouter.post("/", CheckoutController.checkout);

export default checkoutRouter;