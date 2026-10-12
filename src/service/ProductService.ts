import type { FindManyOptions, Repository } from "typeorm";
import type { Product } from "../entity/Product.ts";
import { NotFoundError } from "../types/error.ts";

export class ProductService {
  constructor(private readonly productRepository: Repository<Product>) {}

  async create(newProduct: Product) {
    const product = this.productRepository.create(newProduct);
    await this.productRepository.save(product);
    return product;
  }

  async findMany(handle?: string) {
    const queryOptions: FindManyOptions<Product> = { relations: { variants: true } };

    if (handle) {
      queryOptions.where = { handle };
    }

    return await this.productRepository.find(queryOptions);
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOne({ where: { id }, relations: { variants: true } });
    if (!product) {
      throw new NotFoundError(`Product with ID ${id} not found`);
    }
    return product;
  }

  async update(id: number, data: Partial<Product>) {
    const product = await this.productRepository.findOne({ where: { id } });
    if (product) {
      this.productRepository.merge(product, data);
      await this.productRepository.save(product);
    } else {
      throw new NotFoundError(`Product with ID ${id} not found`);
    }
  }

  async delete(id: number) {
    const product = await this.productRepository.findOne({ where: { id } });

    if (product) {
      await this.productRepository.remove(product);
    } else {
      throw new NotFoundError(`Product with ID ${id} not found`);
    }
  }
}