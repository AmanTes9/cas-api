import { Routes } from "./../routes";
import * as express from "express";
import fileUpload from "express-fileupload";
import path from "path";
import { sendSuccess } from "../utils/response..util";
import { Company, CompanyStatus } from "../entity/companies.entity";
import { FileUploadMiddleware } from "../middlewares/upload/fileupload.middelware";
const router = express.Router();

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
router.use(
  "/user/register",
  FileUploadMiddleware.upload("company_logo", true),
  FileUploadMiddleware.upload("company_license", true),
  async (req, res) => {
    let company = Company.create(req.body);
    let savedCompany = await Company.save(company);
    res.send(savedCompany);
  }
);

router.use("/admin/companies", async (req, res) => {
  let companies = await Company.find();
  res.send(companies);
});

router.use("/admin/companies/:company_id", async (req, res) => {
  let company_id = req.params.company_id;

  let company = await Company.findOne({
    where: {
      id: company_id,
    },
  });
  res.send(company);
});

router.use("/admin/companies/:company_id/:status", async (req, res) => {
  let company_id = req.params.company_id;
  let status = req.params.status;

  let company = await Company.findOne({
    where: {
      id: company_id,
    },
  });
  company.status = status as CompanyStatus;

  res.send(await Company.save(company));
});

export { router as RouterInitalizor };
