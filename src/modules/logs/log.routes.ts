import { Router } from "express";
import { logController } from "../../provider/app.provider";

const router = Router();

router.get(
  "/:phone",
  logController.findLogByPhone.bind(logController)
);
router.get(
  "/",
  logController.getAllLogs.bind(logController)
);

export default router;
