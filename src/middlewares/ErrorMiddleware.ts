
import e, { Request, Response, NextFunction } from 'express';
import { NotFoundError } from '../errors/NotFoundError';
import { InactiveClientError } from '../errors/InactiveClientError';
import { MESSAGE } from '../helpers/constant';
import { ZodError } from 'zod';

/**
 * Middleware to handle errors in the application.
 * It catches errors thrown in the request handling pipeline
 * and sends an appropriate response to the client.
 */
const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  // Log the error for debugging purposes (desable in production)
    console.error(err);
    if (err instanceof NotFoundError) {
      return res.status(404).json({ message: err.message });
    } else if (err instanceof InactiveClientError) {
      return res.status(403).json({ message: err.message });
    }else if (err instanceof ZodError) {
        return res.status(400).json({ errors: err.issues.map(issue => issue.message) });
    } else {
      return res.status(500).json({ message: MESSAGE.INTERNAL_ERROR });
    }
};

export default errorMiddleware;
