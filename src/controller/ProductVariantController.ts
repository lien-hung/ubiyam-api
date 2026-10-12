import type { Request, Response } from "express";
import { productVariantRepository } from "../repository/index.ts";
import { NotFoundError } from "../types/error.ts";
import type { ProductVariantRequest } from "../types/request.ts";

export class ProductVariantController {
  static async create(req: Request<{}, {}, ProductVariantRequest>, res: Response) {
    const data = await productVariantRepository.create(req.body);
    return res.status(201).send(data);
  }

  static async findAll(_: Request, res: Response) {
    const data = await productVariantRepository.findAll();
    return res.status(200).send(data);
  }

  static async findOne(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const data = await productVariantRepository.findOne(id);
      return res.status(200).send(data);
    } catch (error) {
      if (error instanceof NotFoundError) {
        return res.status(404).send(error.message);
      }
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await productVariantRepository.delete(id);
      return res.sendStatus(204);      
    } catch (error) {
      if (error instanceof NotFoundError) {
        return res.status(404).send(error.message);
      }
    }
  }
}