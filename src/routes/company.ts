import * as express from "express";
import fileUpload from "express-fileupload";

import * as bcrypt from "bcrypt";
import { Institutions, CompanyStatus } from "../entity/companies.entity";
import { RoleEnum, User } from "../entity/user.entity";
import { FileUploadMiddleware } from "../middlewares/upload/fileupload.middelware";
import {
  sendBadRequest,
  sendNotFound,
  sendSuccess,
} from "../utils/response..util";
import {
  CertificateStatus,
  User_Certificate,
} from "../entity/certificate.entity";
import { authMiddlewareChecker } from "../middlewares/authentication/isAuthorized.middleware";
const router = express.Router();

router.use(
  "/register",
  FileUploadMiddleware.upload("company_logo", true),
  FileUploadMiddleware.upload("company_license", true),
  async (req, res) => {
    let {
      user_name,
      password,
      company_name,
      business_address,
      company_email,
      company_license,
      company_logo,
      phone_number,
      tin,
    } = req.body;

    bcrypt.hash(password, 10, async function (err, hash) {
      let user = User.create({
        user_name,
        password: hash,
      });

      try {
        user = await User.save(user);

        let company = Institutions.create({
          company_name,
          business_address,
          company_email,
          phone_number,
          tin,
          company_license,
          company_logo,
          status: CompanyStatus.PENDING,
          user,
        });

        let savedCompany = await Institutions.save(company);
        sendSuccess(res, "Company Created", savedCompany);
      } catch (error) {
        sendBadRequest(res, "Duplicate username");
      }
    });
  }
);

router.post(
  "/certificate/status",
  authMiddlewareChecker(RoleEnum.USER),
  async (req, res) => {
    const { status, id } = req.body;
    let user = await User.findOne({
      where: {
        user_name: req.body.user_name,
      },
    });

    if (user) {
      let institution = await Institutions.findOne({
        where: {
          user,
        },
      });

      let certificate = await User_Certificate.findOne({
        where: {
          id,
          provider: institution,
        },
      });

      if (certificate) {
        if (Object.values(CertificateStatus).includes(status)) {
          certificate.status = status as CertificateStatus;
          sendSuccess(
            res,
            "Certificate status updated",
            await User_Certificate.save(certificate)
          );
        } else {
          sendNotFound(res, "Status not found");
        }
      } else {
        sendNotFound(res, "Certificate not found");
      }
    }
  }
);

router.post(
  "/certificate",

  authMiddlewareChecker(RoleEnum.USER),
  FileUploadMiddleware.upload("image", false),
  async (req, res) => {
    let user = await User.findOne({
      where: {
        user_name: req.body.user_name,
      },
    });

    if (user) {
      let institution = await Institutions.findOne({
        where: {
          user,
        },
      });

      let certificate = User_Certificate.create({
        ...req.body,
        provider: institution,
      });

      console.log(req.body);

      sendSuccess(
        res,
        "Certificate created",
        await User_Certificate.save(certificate)
      );
    } else {
      sendBadRequest(res, "User not found");
    }
  }
);

router.get(
  "/certificate",
  authMiddlewareChecker(RoleEnum.USER),
  async (req, res) => {
    let user = await User.findOne({
      where: {
        user_name: req.body.user_name,
      },
    });

    if (user) {
      let institution = await Institutions.findOne({
        where: {
          user,
        },
      });

      sendSuccess(
        res,
        "Certificate created",
        await User_Certificate.find({
          where: {
            provider: institution,
          },
        })
      );
    } else {
      sendBadRequest(res, "User not found");
    }
  }
);
router.get(
  "/certificate/:id",
  authMiddlewareChecker(RoleEnum.USER),
  async (req, res) => {
    let user = await User.findOne({
      where: {
        user_name: req.body.user_name,
      },
    });

    if (user) {
      let institution = await Institutions.findOne({
        where: {
          user,
        },
      });

      sendSuccess(
        res,
        "Certificate created",
        await User_Certificate.find({
          where: {
            id: req.params.id,
            provider: institution,
          },
        })
      );
    } else {
      sendBadRequest(res, "User not found");
    }
  }
);

export { router as CompanyRouter };
