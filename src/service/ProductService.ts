import type { FindManyOptions, Repository } from "typeorm";
import type { Product } from "../entity/Product.ts";

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

    const products = await this.productRepository.find(queryOptions);
    return products;
  }

  async findOne(id: number) {
    return await this.productRepository.findOne({ where: { id }, relations: { variants: true } });
  }

  async update(id: number, data: Partial<Product>) {
    const product = await this.productRepository.findOne({ where: { id } });
    if (product) {
      this.productRepository.merge(product, data);
      await this.productRepository.save(product);
    } else {
      return { message: `Product with ID ${id} not found` };
    }
  }

  async delete(id: number) {
    const product = await this.productRepository.findOne({ where: { id } });

    if (product) {
      await this.productRepository.remove(product);
    } else {
      return { message: `Product with ID ${id} not found` };
    }
  }
}