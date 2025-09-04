import express from "express";
import Routes from "./routes";
import { errorMiddleware } from "./shared/common/errorMiddleware";

/**
 * @function createApp
 * @description Initializes the Express application, sets up routes, and error handling middleware.
 * This function creates an Express application instance, applies JSON parsing middleware,
 * registers the application routes, and sets up a global error handling middleware.
 * @returns {Express} The initialized Express application.
 */

const app = express();
app.use(express.json());
Routes(app);
app.use(errorMiddleware);

export default app;
