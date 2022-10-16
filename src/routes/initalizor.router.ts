import { Routes } from "./../routes";
import * as express from "express";
import fileUpload from "express-fileupload";
import path from "path";

import * as bcrypt from "bcrypt";
import {
  sendBadRequest,
  sendNotFound,
  sendSuccess,
} from "../utils/response..util";
import { Institutions, CompanyStatus } from "../entity/companies.entity";
import { FileUploadMiddleware } from "../middlewares/upload/fileupload.middelware";
import { CompanyRouter } from "./company";
import { RoleEnum, User } from "../entity/user.entity";
import { AdminRouter } from "./admin";
import { authMiddlewareChecker } from "../middlewares/authentication/isAuthorized.middleware";
import { Certificate } from "crypto";
import { User_Certificate } from "../entity/certificate.entity";
const router = express.Router();

var jwt = require("jsonwebtoken");
// File Upload middleware registration
router.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);

let uploadPath = path.join(__dirname, "..", "..", "uploads");
router.use(Routes.config.imagePath, express.static(uploadPath));

router.get("/", (req, res) => {
  sendSuccess(res, "APP Base Route");
});
router.get("/check/:id", async (req, res) => {
  let id = req.params.id;
  let certificate = await User_Certificate.findOne({
    where: {
      id,
    },
    relations: ["provider"],
  });
  if (certificate) sendSuccess(res, "User Certificate", certificate);
  else sendNotFound(res, "Certificate not found");
});

router.use("/admin", AdminRouter);
router.use("/user/company", CompanyRouter);

router.post("/login", async (req, res) => {
  const { user_name, password } = req.body;

  let user = await User.findOne({
    where: {
      user_name: user_name,
    },
  });

  if (user) {
    bcrypt.compare(password, user.password, function (err, result) {
      if (result) {
        var token = jwt.sign(
          {
            role: user.role,
            username: user.user_name,
            created_at: user.created_at,
          },
          "E%%im+GB8T"
        );
        sendSuccess(res, "Login Successful", token);
      } else {
        sendBadRequest(res, "Invalid credentials");
      }
    });
  } else {
    sendBadRequest(res, "User not found");
  }
});

export { router as RouterInitalizor };
