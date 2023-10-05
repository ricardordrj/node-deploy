import { Request, Response, NextFunction } from "express";

const healthCheckController = {
  get: async (req: Request, res: Response, next: NextFunction) => {
    const healthcheck = {
      uptime: process.uptime(),
      message: "OK",
      timestamp: Date.now(),
    };
    try {
      res.status(200).send(healthcheck);
    } catch (err: any) {
      console.error(`Healthcheck error:`, err.message);
      next(err);
    }
  },
};

export default healthCheckController;
