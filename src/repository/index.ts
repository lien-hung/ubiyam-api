import { AppDataSource } from "../config/database.ts";
import { Product, ProductVariant } from "../entity/index.ts";
import { ProductService } from "../service/index.ts";
import { ProductVariantService } from "../service/ProductVariantService.ts";

export const productRepository = new ProductService(AppDataSource.getRepository(Product));
export const productVariantRepository = new ProductVariantService(AppDataSource.getRepository(ProductVariant));