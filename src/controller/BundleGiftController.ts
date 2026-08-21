import type { Request, Response } from "express";
import { bundleGiftRepository } from "../repository/index.ts";
import type { BundleGiftRequest } from "../types/request.ts";

export class BundleGiftController {
  static async create(req: Request<{}, {}, BundleGiftRequest>, res: Response) {
    const data = await bundleGiftRepository.addGift(req.body);
    return res.status(201).send(data);
  }

  static async findAll(_: Request, res: Response) {
    const data = await bundleGiftRepository.findAll();
    return res.status(200).send(data);
  }

  static async findOne(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data = await bundleGiftRepository.findOne(id);
    return res.status(200).send(data);
  }

  static async update(req: Request<{ id: string }, {}, BundleGiftRequest>, res: Response) {
    const id = Number(req.params.id);
    await bundleGiftRepository.update(id, req.body);
    return res.sendStatus(204);
  }

  static async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    await bundleGiftRepository.delete(id);
    return res.sendStatus(204);
  }
}