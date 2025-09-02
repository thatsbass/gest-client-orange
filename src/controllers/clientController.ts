import { NextFunction, Request, Response } from "express";
import * as clientService from "../services/clientService";
 import { phoneNumberSchema } from "../helpers/validators";

  /**
   * Handles the request to find a client by phone number.
   * @param req - The request object containing the phone number.
   * @param res - The response object to send the result.
   */
 export async function findClientByPhone( req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { phone } = phoneNumberSchema.parse(req.params);
      const client = await clientService.findClientByPhone(phone);
      res.status(200).json(client);
    } catch (error) {
      next(error);
    }
  }

