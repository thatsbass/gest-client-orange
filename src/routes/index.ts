import { Express } from "express";
import clientRoutes from "./client.routes";
import logRoutes from "./log.routes";

export default function (app: Express) {
  app.use("/api", clientRoutes);
  app.use("/api", logRoutes);
}