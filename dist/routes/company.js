"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyRouter = void 0;
var express = __importStar(require("express"));
var bcrypt = __importStar(require("bcrypt"));
var companies_entity_1 = require("../entity/companies.entity");
var user_entity_1 = require("../entity/user.entity");
var fileupload_middelware_1 = require("../middlewares/upload/fileupload.middelware");
var response__util_1 = require("../utils/response..util");
var certificate_entity_1 = require("../entity/certificate.entity");
var isAuthorized_middleware_1 = require("../middlewares/authentication/isAuthorized.middleware");
var router = express.Router();
exports.CompanyRouter = router;
router.use("/register", fileupload_middelware_1.FileUploadMiddleware.upload("company_logo", true), fileupload_middelware_1.FileUploadMiddleware.upload("company_license", true), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, user_name, password, company_name, business_address, company_email, company_license, company_logo, phone_number, tin;
    return __generator(this, function (_b) {
        _a = req.body, user_name = _a.user_name, password = _a.password, company_name = _a.company_name, business_address = _a.business_address, company_email = _a.company_email, company_license = _a.company_license, company_logo = _a.company_logo, phone_number = _a.phone_number, tin = _a.tin;
        bcrypt.hash(password, 10, function (err, hash) {
            return __awaiter(this, void 0, void 0, function () {
                var user, company, savedCompany, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            user = user_entity_1.User.create({
                                user_name: user_name,
                                password: hash,
                            });
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 4, , 5]);
                            return [4 /*yield*/, user_entity_1.User.save(user)];
                        case 2:
                            user = _a.sent();
                            company = companies_entity_1.Institutions.create({
                                company_name: company_name,
                                business_address: business_address,
                                company_email: company_email,
                                phone_number: phone_number,
                                tin: tin,
                                company_license: company_license,
                                company_logo: company_logo,
                                status: companies_entity_1.CompanyStatus.PENDING,
                                user: user,
                            });
                            return [4 /*yield*/, companies_entity_1.Institutions.save(company)];
                        case 3:
                            savedCompany = _a.sent();
                            (0, response__util_1.sendSuccess)(res, "Company Created", savedCompany);
                            return [3 /*break*/, 5];
                        case 4:
                            error_1 = _a.sent();
                            (0, response__util_1.sendBadRequest)(res, "Duplicate username");
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        });
        return [2 /*return*/];
    });
}); });
router.post("/certificate/status", (0, isAuthorized_middleware_1.authMiddlewareChecker)(user_entity_1.RoleEnum.USER), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, status, id, user, institution, certificate, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = req.body, status = _a.status, id = _a.id;
                return [4 /*yield*/, user_entity_1.User.findOne({
                        where: {
                            user_name: req.body.user_name,
                            status: user_entity_1.User_status.ACTIVE,
                        },
                    })];
            case 1:
                user = _d.sent();
                if (!user) return [3 /*break*/, 9];
                return [4 /*yield*/, companies_entity_1.Institutions.findOne({
                        where: {
                            user: user,
                        },
                    })];
            case 2:
                institution = _d.sent();
                return [4 /*yield*/, certificate_entity_1.User_Certificate.findOne({
                        where: {
                            id: id,
                            provider: institution,
                        },
                    })];
            case 3:
                certificate = _d.sent();
                if (!certificate) return [3 /*break*/, 7];
                if (!Object.values(certificate_entity_1.CertificateStatus).includes(status)) return [3 /*break*/, 5];
                certificate.status = status;
                _b = response__util_1.sendSuccess;
                _c = [res,
                    "Certificate status updated"];
                return [4 /*yield*/, certificate_entity_1.User_Certificate.save(certificate)];
            case 4:
                _b.apply(void 0, _c.concat([_d.sent()]));
                return [3 /*break*/, 6];
            case 5:
                (0, response__util_1.sendNotFound)(res, "Status not found");
                _d.label = 6;
            case 6: return [3 /*break*/, 8];
            case 7:
                (0, response__util_1.sendNotFound)(res, "Certificate not found");
                _d.label = 8;
            case 8: return [3 /*break*/, 10];
            case 9:
                (0, response__util_1.sendNotFound)(res, "User not approved");
                _d.label = 10;
            case 10: return [2 /*return*/];
        }
    });
}); });
router.post("/certificate", (0, isAuthorized_middleware_1.authMiddlewareChecker)(user_entity_1.RoleEnum.USER), fileupload_middelware_1.FileUploadMiddleware.upload("image", false), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, institution, certificate, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, user_entity_1.User.findOne({
                    where: {
                        user_name: req.body.user_name,
                        status: user_entity_1.User_status.ACTIVE,
                    },
                })];
            case 1:
                user = _c.sent();
                if (!user) return [3 /*break*/, 6];
                return [4 /*yield*/, companies_entity_1.Institutions.findOne({
                        where: {
                            user: user,
                            status: companies_entity_1.CompanyStatus.ACCEPTED,
                        },
                    })];
            case 2:
                institution = _c.sent();
                if (!institution) return [3 /*break*/, 4];
                certificate = certificate_entity_1.User_Certificate.create(__assign(__assign({}, req.body), { provider: institution }));
                console.log(req.body);
                _a = response__util_1.sendSuccess;
                _b = [res,
                    "Certificate created"];
                return [4 /*yield*/, certificate_entity_1.User_Certificate.save(certificate)];
            case 3:
                _a.apply(void 0, _b.concat([_c.sent()]));
                return [3 /*break*/, 5];
            case 4:
                (0, response__util_1.sendBadRequest)(res, "Permission denied");
                _c.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                (0, response__util_1.sendBadRequest)(res, "Permission denied");
                _c.label = 7;
            case 7: return [2 /*return*/];
        }
    });
}); });
router.put("/certificate/:id", (0, isAuthorized_middleware_1.authMiddlewareChecker)(user_entity_1.RoleEnum.USER), fileupload_middelware_1.FileUploadMiddleware.upload("image", false), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, institution, userCertificate, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                console.log(req.body);
                return [4 /*yield*/, user_entity_1.User.findOne({
                        where: {
                            user_name: req.body.user_name,
                        },
                    })];
            case 1:
                user = _c.sent();
                if (!user) return [3 /*break*/, 6];
                return [4 /*yield*/, companies_entity_1.Institutions.findOne({
                        where: {
                            user: user,
                        },
                    })];
            case 2:
                institution = _c.sent();
                return [4 /*yield*/, certificate_entity_1.User_Certificate.findOne({
                        where: {
                            id: req.params.id,
                            provider: institution,
                        },
                    })];
            case 3:
                userCertificate = _c.sent();
                if (!userCertificate) return [3 /*break*/, 5];
                delete req.body["role"];
                delete req.body["user_name"];
                Object.keys(req.body).forEach(function (k) { return !!!req.body[k] && delete req.body[k]; });
                _a = response__util_1.sendSuccess;
                _b = [res,
                    "Certificate updated successfully "];
                return [4 /*yield*/, certificate_entity_1.User_Certificate.update(req.params.id, __assign({}, req.body))];
            case 4:
                _a.apply(void 0, _b.concat([_c.sent()]));
                return [3 /*break*/, 6];
            case 5:
                (0, response__util_1.sendNotFound)(res, "Certificate not found");
                _c.label = 6;
            case 6: return [2 /*return*/];
        }
    });
}); });
router.get("/certificate", (0, isAuthorized_middleware_1.authMiddlewareChecker)(user_entity_1.RoleEnum.USER), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, institution, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, user_entity_1.User.findOne({
                    where: {
                        user_name: req.body.user_name,
                    },
                })];
            case 1:
                user = _c.sent();
                if (!user) return [3 /*break*/, 4];
                return [4 /*yield*/, companies_entity_1.Institutions.findOne({
                        where: {
                            user: user,
                        },
                    })];
            case 2:
                institution = _c.sent();
                _a = response__util_1.sendSuccess;
                _b = [res,
                    "Certificate created"];
                return [4 /*yield*/, certificate_entity_1.User_Certificate.find({
                        where: {
                            provider: institution,
                        },
                    })];
            case 3:
                _a.apply(void 0, _b.concat([_c.sent()]));
                return [3 /*break*/, 5];
            case 4:
                (0, response__util_1.sendBadRequest)(res, "User not found");
                _c.label = 5;
            case 5: return [2 /*return*/];
        }
    });
}); });
router.get("/certificate/:id", (0, isAuthorized_middleware_1.authMiddlewareChecker)(user_entity_1.RoleEnum.USER), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, institution, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, user_entity_1.User.findOne({
                    where: {
                        user_name: req.body.user_name,
                    },
                })];
            case 1:
                user = _c.sent();
                if (!user) return [3 /*break*/, 4];
                return [4 /*yield*/, companies_entity_1.Institutions.findOne({
                        where: {
                            user: user,
                        },
                    })];
            case 2:
                institution = _c.sent();
                _a = response__util_1.sendSuccess;
                _b = [res,
                    "Certificate created"];
                return [4 /*yield*/, certificate_entity_1.User_Certificate.find({
                        where: {
                            id: req.params.id,
                            provider: institution,
                        },
                    })];
            case 3:
                _a.apply(void 0, _b.concat([_c.sent()]));
                return [3 /*break*/, 5];
            case 4:
                (0, response__util_1.sendBadRequest)(res, "User not found");
                _c.label = 5;
            case 5: return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=company.js.map