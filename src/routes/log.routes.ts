import { Router } from "express";
import { logController } from "../provider/app.provider";

const router = Router();

router.get(
  "/logs/:phone",
  logController.findLogByPhone.bind(logController)
);
router.get(
  "/logs",
  logController.getAllLogs.bind(logController)
);

export default router;
