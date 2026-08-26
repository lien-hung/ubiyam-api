import type { Request, Response } from "express";
import type { CartItem } from "../types/request.ts";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_KEY);

export class CheckoutController {
  static async checkout(req: Request<{}, {}, CartItem[]>, res: Response) {
    const session = await stripe.checkout.sessions.create({
      line_items: req.body.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: { name: item.title, images: [item.image] },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: 'https://ubiyam-ui.onrender.com/checkout-success',
    });

    res.send({ sessionUrl: session.url });
  }
}