import { NextFunction, Request, Response } from "express";
import ClientService from "../services/ClientService";
import { phoneNumberSchema } from "../helpers/validators";
import ClientRepository from "../repositories/ClientRepository";

class ClientController {

  private clientService: ClientService;
  constructor(clientService: ClientService) {
    this.clientService = clientService;
  }

  /**
   * Handles the request to find a client by phone number.
   * @param req - The request object containing the phone number.
   * @param res - The response object to send the result.
   */
  async findClientByPhone( req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { phone } = phoneNumberSchema.parse({ phone: req.params.phone });
      const client = await this.clientService.findClientByPhone(phone);
      res.status(200).json(client);
    } catch (error) {
      next(error);
    }
  }
}

export default ClientController;
