import * as express from "express";
import fileUpload from "express-fileupload";

import * as bcrypt from "bcrypt";
import { Institutions, CompanyStatus } from "../entity/companies.entity";
import { User, User_status } from "../entity/user.entity";
import { FileUploadMiddleware } from "../middlewares/upload/fileupload.middelware";
import {
  sendBadRequest,
  sendNotFound,
  sendSuccess,
} from "../utils/response..util";
import { Certificate } from "crypto";
import { User_Certificate } from "../entity/certificate.entity";
const router = express.Router();

router.get("/company", async (req, res) => {
  let company = await Institutions.find();
  sendSuccess(res, "List of company", company);
});

router.get("/certificate", async (req, res) => {
  let company = await User_Certificate.find({
    relations: ["provider"],
  });
  sendSuccess(res, "List of certificate", company);
});
router.get("/user", async (req, res) => {
  let users = await User.find({
    select: ["role", "user_name", "created_at", "status"],
  });
  sendSuccess(res, "List of users", users);
});

router.post("/company/status", async (req, res) => {
  const { status, id } = req.body;
  let company = await Institutions.findOne({
    where: {
      id,
    },
  });

  if (company) {
    try {
      if (Object.values(CompanyStatus).includes(status)) {
        company.status = status as CompanyStatus;
        sendSuccess(
          res,
          "Company status updated",
          await Institutions.save(company)
        );
      } else {
        sendNotFound(res, "Status not found");
      }
    } catch (error) {
      sendNotFound(res, "Status not found");
    }
  } else {
    sendNotFound(res, "Company not found");
  }
});

router.post("/user/status", async (req, res) => {
  const { status, id } = req.body;
  let user = await User.findOne({
    where: {
      id,
    },
  });

  if (user) {
    try {
      if (Object.values(User_status).includes(status)) {
        user.status = status as User_status;
        sendSuccess(res, "User status updated", await User.save(user));
      } else {
        sendNotFound(res, "Status not found");
      }
    } catch (error) {
      sendNotFound(res, "Status not found");
    }
  } else {
    sendNotFound(res, "User not found");
  }
});

router.get("/company/:id", async (req, res) => {
  let company = await Institutions.findOne({
    where: {
      id: req.params.id,
    },
  });
  sendSuccess(res, "Company detail", company);
});

export { router as AdminRouter };
