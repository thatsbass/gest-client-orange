import { Express, Router } from "express";
import clientRoutes from "../modules/clients/client.routes";
import logRoutes from "../modules/logs/log.routes";

export default function (app: Express) {
  const apiRouter = Router();
  
  apiRouter.use("/clients", clientRoutes);
  apiRouter.use("/logs", logRoutes);
  app.use("/v1/api", apiRouter);
}