import { NextFunction, Request, Response } from "express";
import { Institutions } from "../../entity/companies.entity";
import { RoleEnum, User } from "../../entity/user.entity";
var jwt = require("jsonwebtoken");

export function authMiddlewareChecker(role: RoleEnum) {
  return async (req: any, res: any, next: NextFunction) => {
    let token = req.headers.authorization;

    if (token) {
      try {
        var decoded = jwt.verify(token, "E%%im+GB8T");
        console.log(decoded);
        req.body.user_name = decoded.username;
        req.body.role = decoded.role;
        if ((decoded.role as RoleEnum) == role) {
          next();
        } else {
          res.status(400).json({
            message: "Permission denied",
          });
        }
      } catch (err) {
        res.status(400).json({
          message: "Invalid token",
        });
      }
    } else {
      res.status(400).json({
        message: "token is required",
      });
    }
  };
}
