import { Router } from "express";
import * as clientController from "../controllers/clientController";

const router = Router();

router.get(
  "/client/:phone",
  clientController.findClientByPhone
);
export default router;
