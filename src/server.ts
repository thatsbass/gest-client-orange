import app from "./app";
import { connectDB } from "./shared/config/database";
import { ENV, MESSAGE } from "./shared/helpers/constant";


/**
 * @function startServer
 * @description Initializes the server and connects to the MongoDB database.
 * This function sets up the Express application, connects to the database,
 * and starts the server on the specified port.
 * It handles errors during the connection and server startup, logging appropriate messages.
 * @returns {Promise<void>} A promise that resolves when the server is started.
 * @throws {Error} If there is an error connecting to the database or starting the server.
 */

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log(MESSAGE.SERVER_STARTED);
    });
  } catch (error) {
    console.error(MESSAGE.SERVER_ERROR, error);
  }
};

startServer();
