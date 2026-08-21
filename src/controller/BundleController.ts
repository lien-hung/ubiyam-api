import type { Request, Response } from "express";
import { bundleRepository } from "../repository/index.ts";
import type { BundleRequest } from "../types/request.ts";

export class BundleController {
  static async create(req: Request<{}, {}, BundleRequest>, res: Response) {
    const data = await bundleRepository.createBundle(req.body);
    return res.status(201).send(data);
  }

  static async findAll(_: Request, res: Response) {
    const data = await bundleRepository.findAll();
    return res.status(200).send(data);
  }

  static async findOne(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data = await bundleRepository.findOne(id);
    return res.status(200).send(data);
  }

  static async update(req: Request<{ id: string }, {}, BundleRequest>, res: Response) {
    const id = Number(req.params.id);
    await bundleRepository.update(id, req.body);
    return res.sendStatus(204);
  }

  static async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    await bundleRepository.delete(id);
    return res.sendStatus(204);
  }
}