import { ClientController } from "../modules/clients/client.controller";
import { ClientService } from "../modules/clients/client.service";
import { LogController } from "../modules/logs/log.controller";
import { LoggerService } from "../modules/logs/log.service";


const loggerService = new LoggerService();
const clientService = new ClientService(loggerService);
const clientController = new ClientController(clientService);
const logController = new LogController(loggerService);

export { clientController, logController };