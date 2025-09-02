import { ClientModel, IClient } from "../models/clientModel";
import { NotFoundError } from "../middlewares/exceptions/notFoundError";
import { InactiveClientError } from "../middlewares/exceptions/inactiveClientError";
import { MESSAGE } from "../helpers/constant";
import { LogModel, LogStatus } from "../models/logModel";

  /**
   * Finds a client by phone number.
   * @param phone - The phone number of the client to find.
   * @returns A promise that resolves to the found client.
   * @throws NotFoundError if the client is not found.
   * @throws InactiveClientError if the client is inactive.
   */
  export async function findClientByPhone(phone: string): Promise<IClient> {
      const client = await ClientModel.findOne({ phone }).exec();

    if (!client) {
      await LogModel.create({ message: MESSAGE.CLIENT_NOT_FOUND, phone, status: LogStatus.NOT_FOUND });
      throw  NotFoundError(MESSAGE.CLIENT_NOT_FOUND);
    }

    if (!client.isActive) {
      await LogModel.create({ message: MESSAGE.CLIENT_INACTIVE, phone, status: LogStatus.INACTIVE });
      throw  InactiveClientError(MESSAGE.CLIENT_INACTIVE);
    }

    await LogModel.create({ message: MESSAGE.CLIENT_FOUND, phone, status: LogStatus.SUCCESS });
    return client;
  }

