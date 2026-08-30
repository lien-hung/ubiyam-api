import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./config/database.ts";
import appRouter from "./router/index.ts";

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use("/api/v1", appRouter);
    app.listen(PORT, () => console.log(`Express server listening on port ${PORT}`));
  })
  .catch((error) => {
    console.error("Database init error", error);
    process.exit(1);
  });