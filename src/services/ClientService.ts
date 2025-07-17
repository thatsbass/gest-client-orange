import { IClient } from "../models/client.model";
import ClientRepository from "../repositories/ClientRepository";
import { NotFoundError } from "../errors/NotFoundError";
import { InactiveClientError } from "../errors/InactiveClientError";
import { MESSAGE } from "../helpers/constant";

class ClientService {
  private clientRepository: ClientRepository;

  constructor(clientRepository: ClientRepository) {
    this.clientRepository = clientRepository;
  }

  /**
   * Finds a client by phone number.
   * @param phone - The phone number of the client to find.
   * @returns A promise that resolves to the found client.
   * @throws NotFoundError if the client is not found.
   * @throws InactiveClientError if the client is inactive.
   */
  async findClientByPhone(phone: string): Promise<IClient> {
    const client = await this.clientRepository.findClientByPhone(phone);

    if (!client) {
      throw new NotFoundError(MESSAGE.CLIENT_NOT_FOUND);
    }

    if (!client.isActive) {
      throw new InactiveClientError(MESSAGE.CLIENT_INACTIVE);
    }

    return client;
  }
}

export default ClientService;
