import { Express } from "express";
import clientRoutes from "./clientRoutes";



export default function (app: Express) {
  app.use("/api", clientRoutes);
}