import { DataSource } from "typeorm";
import { Product, ProductVariant } from "../entity/index.ts";
import * as dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DB_URL,
  synchronize: false,
  entities: [Product, ProductVariant],
  migrations: ["dist/migrations/**/*.js"],
});