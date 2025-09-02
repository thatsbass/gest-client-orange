import { Request, Response, NextFunction } from "express";
import { MESSAGE, STATUS_CODE } from "../helpers/constant";
import { LogModel, LogStatus } from "../models/logModel";

const statusMap: Record<string, number> = {
  NotFoundError: STATUS_CODE.NOT_FOUND,
  InactiveClientError: STATUS_CODE.INACTIVE,
};

/**
 * Middleware to handle errors in the application.
 * It catches errors thrown in the request handling pipeline
 * and sends an appropriate response to the client.
 */
const errorMiddleware = async (
  err: Error & { name?: string },
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // TODO : Log l'erreur (désactivable en production)
  console.error(
    `[${new Date().toISOString()}] ${err.name || "ERROR "}: ${err.message}`
  );

  const status = statusMap[err.name || ""] || STATUS_CODE.INTERNAL_ERROR;
  const message =
    status === STATUS_CODE.INTERNAL_ERROR
      ? MESSAGE.INTERNAL_ERROR
      : err.message;

  try {
    await LogModel.create({
      phone : req.params.phone || "N/A",
      message: `Error: ${err.message}`,
      status: LogStatus.ERROR,
    });
  } catch (error) {
    console.error("Erreur lors de l'enregistrement du log:", error);
  }

  res.status(status).json({ message });
};

export default errorMiddleware;
