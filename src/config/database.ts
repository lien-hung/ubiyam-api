import { DataSource } from "typeorm";
import { Bundle, BundleGift, Product } from "../entity/index.ts";
import * as dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DB_URL,
  synchronize: false,
  entities: [Product, Bundle, BundleGift],
  migrations: ["dist/migrations/**/*.js"],
});