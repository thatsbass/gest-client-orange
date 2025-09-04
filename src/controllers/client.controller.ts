import { NextFunction, Request, Response } from "express";
import { phoneNumberSchema } from "../helpers/validators";
import { ClientService } from "../services/client.service";

export class ClientController {

  constructor( private readonly clientService : ClientService){}

  /**
   * Handles the request to find a client by phone number.
   * @param req - The request object containing the phone number.
   * @param res - The response object to send the result.
   */
 async  findClientByPhone( req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { phone } = phoneNumberSchema.parse(req.params);
      const client = await this.clientService.findClientByPhone(phone);
      res.status(200).json(client);
    } catch (error) {
      next(error);
    }
  }
}
