import { Request, Response, NextFunction } from 'express';
import CustomError from '../errors/CustomError';

const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (error instanceof CustomError) {
    return res.send({ errors: error.serializeErrors() });
  }

  return res.status(500).send({ error: { message: 'Internal Server Error' } });
};

export default errorHandler;
