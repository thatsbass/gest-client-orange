import { ClientModel, IClient } from "../models/client.model";

class ClientRepository {
    /**
     * Finds a client by phone number.
     * @param phone - The phone number of the client to find.
     * @returns A promise that resolves to the found client or null if not found.
     */
    async findClientByPhone(phone: string): Promise<IClient | null> {
        const client = await ClientModel.findOne({ phone }).exec();
        return client;
    }
}

export default ClientRepository;