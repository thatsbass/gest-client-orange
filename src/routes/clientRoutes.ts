import { Router } from 'express';
import ClientController from '../controllers/clientController';
import ClientService from '../services/ClientService';
import ClientRepository from '../repositories/ClientRepository';

const router = Router();
const clientRepository = new ClientRepository();
const clientService = new ClientService(clientRepository);
const clientController = new ClientController(clientService);

router.get('/client/:phone', clientController.findClientByPhone.bind(clientController));
export default router;