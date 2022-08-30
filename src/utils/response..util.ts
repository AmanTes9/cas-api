import { Response } from "express";
export const sendSuccess = (res: Response, message: string, data?: any) => {
  res.status(200).json({
    message,
    data,
  });
};
export const sendBadRequest = (res: Response, message: string, data?: any) => {
  res.status(400).json({
    message,
    data,
  });
};
export const sendNotFound = (res: Response, message: string, data?: any) => {
  res.status(404).json({
    message,
    data,
  });
};
