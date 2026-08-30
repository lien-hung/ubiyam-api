import type { Request, Response } from "express";
import type { Product } from "../entity/Product.ts";
import { productRepository } from "../repository/index.ts";
import type { ProductRequest } from "../types/request.ts";

export class ProductController {
  static async create(req: Request<{}, {}, ProductRequest>, res: Response) {
    const data = await productRepository.create(req.body as Product);
    return res.status(201).send(data);
  }

  static async findMany(req: Request, res: Response) {
    const handle = req.query.handle?.toString();
    const data = await productRepository.findMany(handle);
    return res.status(200).send(data);
  }

  static async findOne(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data = await productRepository.findOne(id);
    return res.status(200).send(data);
  }

  static async update(req: Request<{ id: number }, {}, ProductRequest>, res: Response) {
    await productRepository.update(req.params.id, req.body);
    return res.sendStatus(204);
  }

  static async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    await productRepository.delete(id);
    return res.sendStatus(204);
  }
}