import { Router } from "express";
import { clientController } from "../../provider/app.provider";

const router = Router();

router.get(
  "/:phone",
  clientController.findClientByPhone.bind(clientController)
);
export default router;
