// import { FirebasePassengerApp } from "../../index";
// import { sendNotFound } from "../../utils/response..util";
// import { NextFunction, Request, Response } from "express";
// import firebase from "firebase-admin";
// import config from "config";
// import { FirebaseDriverApp } from "../..";

// /**
//  * If the environment is development, then set the uid to a hardcoded value. Otherwise, verify the
//  * token and set the uid to the user's uid.
//  * @param {Request} req - Request - The request object
//  * @param {Response} res - Response - the response object
//  * @param {NextFunction} next - The next function to be called in the middleware chain.
//  */
// export const isDriverAuthenticated = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const nodeEnv = config.util.getEnv("NODE_ENV");

//   if (nodeEnv == "development") {
//     req.body.uid = "i8tZ20BRCVTFR4Hu71cHwmsy5QM2";
//     next();
//   } else {
//     if (!!req.headers.authorization) {
//       FirebaseDriverApp.auth()
//         .verifyIdToken(req.headers.authorization)
//         .then((user) => {
//           req.body.uid = user.uid;
//           req.body.displayName = user.name;
//           next();
//         })
//         .catch((err) => {
//           sendNotFound(res, "Invalid login", err);
//         });
//     } else {
//       sendNotFound(res, "Authorization token is required", null);
//     }
//   }
// };
// export const isPassengerAuthenticated = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const nodeEnv = config.util.getEnv("NODE_ENV");

//   if (nodeEnv == "development") {
//     req.body.uid = "DLhqCwNAxvZiHB21Hgz66SVA9Tw1";
//     next();
//   } else {
//     if (!!req.headers.authorization) {
//       FirebasePassengerApp.auth()
//         .verifyIdToken(req.headers.authorization)
//         .then((user) => {
//           req.body.uid = user.uid;
//           req.body.displayName = user.name;
//           next();
//         })
//         .catch((err) => {
//           sendNotFound(res, "Invalid login", err);
//         });
//     } else {
//       sendNotFound(res, "Authorization token is required", null);
//     }
//   }
// };
// export const isAdminAuthenticated = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   req.body.uid = "ADMIN-TEST";
//   next();
// };
