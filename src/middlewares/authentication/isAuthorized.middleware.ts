// import { FirebasePassengerApp } from "../../index";
import { sendNotFound } from "../../utils/response..util";
import { NextFunction, Request, Response } from "express";
import firebase from "firebase-admin";
import config from "config";
// import { FirebaseDriverApp } from "../..";

/**
 * If the environment is development, then set the uid to a hardcoded value. Otherwise, verify the
 * token and set the uid to the user's uid.
 * @param {Request} req - Request - The request object
 * @param {Response} res - Response - the response object
 * @param {NextFunction} next - The next function to be called in the middleware chain.
 */
export const isDriverAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (token) {
    next();
  } else {
    res.status(400).json({
      message: "token is required",
    });
  }



  
  next();
  // const nodeEnv = config.util.getEnv("NODE_ENV");

  // if (nodeEnv == "development") {
  //   req.body.uid = "cYyjr4j9A4M48UDwZjSlimCTDH63";
  //   next();
  // } else {
  //   if (!!req.headers.authorization) {
  //     FirebaseDriverApp.auth()
  //       .verifyIdToken(req.headers.authorization)
  //       .then((user) => {
  //         req.body.uid = user.uid;
  //         req.body.displayName = user.name;
  //         next();
  //       })
  //       .catch((err) => {
  //         sendNotFound(res, "Invalid login", err);
  //       });
  //   } else {
  //     sendNotFound(res, "Authorization token is required", null);
  //   }
  // }
};
export const isPassengerAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next();
  // const nodeEnv = config.util.getEnv("NODE_ENV");
  // // Check if there a phone number associated with current user
  // if (nodeEnv == "development") {
  //   req.body.uid = "DLhqCwNAxvZiHB21Hgz66SVA9Tw1";
  //   req.body.phone_number = "+251911125297";
  //   next();
  // } else {
  //   if (!!req.headers.authorization) {
  //     FirebasePassengerApp.auth()
  //       .verifyIdToken(req.headers.authorization)
  //       .then((user) => {
  //         req.body.uid = user.uid;
  //         req.body.display_name = user.name;
  //         req.body.phone_number = user.phone_number;
  //         next();
  //       })
  //       .catch((err) => {
  //         sendNotFound(res, "Invalid login", err);
  //       });
  //   } else {
  //     sendNotFound(res, "Authorization token is required", null);
  //   }
  // }
};
export const isAdminAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.body.uid = "ADMIN-TEST";
  next();
};
