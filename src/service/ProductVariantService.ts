import type { Repository } from "typeorm";
import type { Product } from "../entity/Product.ts";
import type { ProductVariant } from "../entity/ProductVariant.ts";
import { NotFoundError } from "../types/error.ts";
import type { ProductVariantRequest } from "../types/request.ts";

export class ProductVariantService {
  constructor(private readonly productVariantRepository: Repository<ProductVariant>) {}

  async create(newVariant: ProductVariantRequest) {
    const variant = this.productVariantRepository.create(newVariant);
    variant.product = { id: newVariant.productId } as Product;
    await this.productVariantRepository.save(variant);
    return variant;
  }

  async findAll() {
    return await this.productVariantRepository.find();
  }

  async findOne(id: number, includeProduct: boolean = false) {
    const variant = await this.productVariantRepository.findOne({ where: { id }, relations: { product: includeProduct } });
    if (!variant) {
      throw new NotFoundError(`Product variant with ID ${id} not found`);
    }
    return variant;
  }

  async delete(id: number) {
    const variant = await this.productVariantRepository.findOne({ where: { id } });

    if (variant) {
      await this.productVariantRepository.remove(variant);
    } else {
      throw new NotFoundError(`Product variant with ID ${id} not found`);
    }
  }
}
