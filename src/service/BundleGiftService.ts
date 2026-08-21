import type { Repository } from "typeorm";
import type { BundleGift } from "../entity/BundleGift.ts";
import type { BundleGiftRequest } from "../types/request.ts";
import type { Bundle } from "../entity/Bundle.ts";
import type { Product } from "../entity/Product.ts";

export class BundleGiftService {
  constructor(private readonly bundleGiftRepository: Repository<BundleGift>) { }

  async addGift(newGift: BundleGiftRequest) {
    const gift = this.bundleGiftRepository.create(newGift);
    gift.bundle = { id: newGift.bundleId } as Bundle;
    gift.product = { id: newGift.productId } as Product;
    await this.bundleGiftRepository.save(gift);
    return gift;
  }

  async findAll() {
    return await this.bundleGiftRepository.find();
  }

  async findOne(id: number) {
    return await this.bundleGiftRepository.findOne({ where: { id } });
  }

  async update(id: number, data: BundleGiftRequest) {
    const bundleGift = await this.bundleGiftRepository.findOne({ where: { id } });
    if (bundleGift) {
      bundleGift.bundle = { id: data.bundleId } as Bundle;
      bundleGift.product = { id: data.productId } as Product;
      this.bundleGiftRepository.merge(bundleGift, data);
      await this.bundleGiftRepository.save(bundleGift);
    } else {
      return { message: `Gift with ID ${id} not found` };
    }
  }

  async delete(id: number) {
    const bundleGift = await this.bundleGiftRepository.findOne({ where: { id } });

    if (bundleGift) {
      await this.bundleGiftRepository.remove(bundleGift);
    } else {
      return { message: `Gift with ID ${id} not found` };
    }
  }
}