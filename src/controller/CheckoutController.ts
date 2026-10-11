import type { Request, Response } from "express";
import Stripe from "stripe";
import { productVariantRepository } from "../repository/index.ts";
import type { CartItem } from "../types/request.ts";

const stripe = new Stripe(process.env.STRIPE_KEY);

export class CheckoutController {
  static async checkout(req: Request<{}, {}, CartItem[]>, res: Response) {
    if (req.body.some((item) => item.quantity < 0)) {
      res.status(400).send("Quantity must be a positive number for all items");
    }

    const lineItems = await Promise.all(req.body.map(async (item) => {
      const variant = await productVariantRepository.findOne(item.variantId, true);
      const product = variant.product;
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: `${product.title} (${variant.label})`,
            images: [product.image]
          },
          unit_amount: variant.price * 100,
        },
        quantity: item.quantity,
      }
    }));

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: 'https://ubiyam-ui.onrender.com/checkout-success',
    });

    res.send({ sessionUrl: session.url });
  }
}
