import type { Repository } from "typeorm";
import type { Bundle } from "../entity/Bundle.ts";
import type { BundleRequest } from "../types/request.ts";
import type { Product } from "../entity/Product.ts";

export class BundleService {
  constructor(private readonly bundleRepository: Repository<Bundle>) {}

  async createBundle(newBundle: BundleRequest) {
    const bundle = this.bundleRepository.create(newBundle);
    bundle.product = { id: newBundle.productId } as Product;
    await this.bundleRepository.save(bundle);
    return bundle;
  }

  async findAll() {
    const bundles = await this.bundleRepository.find({
      relations: { freeGifts: true },
      loadRelationIds: { relations: ["product"] },
    });
    return bundles.map((b) => ({ ...b, productId: b.product }));
  }

  async findOne(id: number) {
    const bundle = await this.bundleRepository.findOne({
      where: { id },
      relations: { freeGifts: true },
      loadRelationIds: { relations: ["product"] },
    });
    return { ...bundle, productId: bundle.product };
  }

  async update(id: number, data: BundleRequest) {
    const bundle = await this.bundleRepository.findOne({ where: { id } });
    if (bundle) {
      bundle.product = { id: data.productId } as Product;
      this.bundleRepository.merge(bundle, data);
      await this.bundleRepository.save(bundle);
    } else {
      return { message: `Bundle with ID ${id} not found` };
    }
  }

  async delete(id: number) {
    const bundle = await this.bundleRepository.findOne({ where: { id } });

    if (bundle) {
      await this.bundleRepository.remove(bundle);
    } else {
      return { message: `Bundle with ID ${id} not found` };
    }
  }
}