import { ClientController } from "../controllers/client.controller";
import { LogController } from "../controllers/log.controller";
import { ClientService } from "../services/client.service";
import { LoggerService } from "../services/log.service";

const loggerService = new LoggerService();
const clientService = new ClientService(loggerService);
const clientController = new ClientController(clientService);
const logController = new LogController(loggerService);

export { clientController, logController };