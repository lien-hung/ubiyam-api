import { AppDataSource } from "../config/database.ts";
import { Bundle, BundleGift, Product } from "../entity/index.ts";
import { BundleGiftService, BundleService, ProductService } from "../service/index.ts";

export const productRepository = new ProductService(AppDataSource.getRepository(Product));
export const bundleRepository = new BundleService(AppDataSource.getRepository(Bundle));
export const bundleGiftRepository = new BundleGiftService(AppDataSource.getRepository(BundleGift));