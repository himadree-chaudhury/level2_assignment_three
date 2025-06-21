/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";

export const errorHandler = (error: any, req: Request, res: Response) => {
  res.status(500).send({
    success: false,
    message: "Internal server error",
    error: error.message,
  });
};

export const notFound = (req: Request, res: Response) => {
  res.status(404).send({
    success: false,
    message: `Route ${req.originalUrl} not found`,
  });
};
