"use strict";
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
exports.AdminRouter = void 0;
var express = __importStar(require("express"));
var companies_entity_1 = require("../entity/companies.entity");
var user_entity_1 = require("../entity/user.entity");
var response__util_1 = require("../utils/response..util");
var certificate_entity_1 = require("../entity/certificate.entity");
var router = express.Router();
exports.AdminRouter = router;
router.get("/company", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var company;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, companies_entity_1.Institutions.find()];
            case 1:
                company = _a.sent();
                (0, response__util_1.sendSuccess)(res, "List of company", company);
                return [2 /*return*/];
        }
    });
}); });
router.get("/certificate", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var company;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, certificate_entity_1.User_Certificate.find({
                    relations: ["provider"],
                })];
            case 1:
                company = _a.sent();
                (0, response__util_1.sendSuccess)(res, "List of certificate", company);
                return [2 /*return*/];
        }
    });
}); });
router.get("/user", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_entity_1.User.find({
                    select: ["role", "user_name", "created_at", "status"],
                })];
            case 1:
                users = _a.sent();
                (0, response__util_1.sendSuccess)(res, "List of users", users);
                return [2 /*return*/];
        }
    });
}); });
router.post("/company/status", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, status, id, company, _b, _c, error_1;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = req.body, status = _a.status, id = _a.id;
                return [4 /*yield*/, companies_entity_1.Institutions.findOne({
                        where: {
                            id: id,
                        },
                    })];
            case 1:
                company = _d.sent();
                if (!company) return [3 /*break*/, 8];
                _d.label = 2;
            case 2:
                _d.trys.push([2, 6, , 7]);
                if (!Object.values(companies_entity_1.CompanyStatus).includes(status)) return [3 /*break*/, 4];
                company.status = status;
                _b = response__util_1.sendSuccess;
                _c = [res,
                    "Company status updated"];
                return [4 /*yield*/, companies_entity_1.Institutions.save(company)];
            case 3:
                _b.apply(void 0, _c.concat([_d.sent()]));
                return [3 /*break*/, 5];
            case 4:
                (0, response__util_1.sendNotFound)(res, "Status not found");
                _d.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_1 = _d.sent();
                (0, response__util_1.sendNotFound)(res, "Status not found");
                return [3 /*break*/, 7];
            case 7: return [3 /*break*/, 9];
            case 8:
                (0, response__util_1.sendNotFound)(res, "Company not found");
                _d.label = 9;
            case 9: return [2 /*return*/];
        }
    });
}); });
router.post("/user/status", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, status, id, user, _b, _c, error_2;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = req.body, status = _a.status, id = _a.id;
                return [4 /*yield*/, user_entity_1.User.findOne({
                        where: {
                            id: id,
                        },
                    })];
            case 1:
                user = _d.sent();
                if (!user) return [3 /*break*/, 8];
                _d.label = 2;
            case 2:
                _d.trys.push([2, 6, , 7]);
                if (!Object.values(user_entity_1.User_status).includes(status)) return [3 /*break*/, 4];
                user.status = status;
                _b = response__util_1.sendSuccess;
                _c = [res, "User status updated"];
                return [4 /*yield*/, user_entity_1.User.save(user)];
            case 3:
                _b.apply(void 0, _c.concat([_d.sent()]));
                return [3 /*break*/, 5];
            case 4:
                (0, response__util_1.sendNotFound)(res, "Status not found");
                _d.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_2 = _d.sent();
                (0, response__util_1.sendNotFound)(res, "Status not found");
                return [3 /*break*/, 7];
            case 7: return [3 /*break*/, 9];
            case 8:
                (0, response__util_1.sendNotFound)(res, "User not found");
                _d.label = 9;
            case 9: return [2 /*return*/];
        }
    });
}); });
router.get("/company/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var company;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, companies_entity_1.Institutions.findOne({
                    where: {
                        id: req.params.id,
                    },
                })];
            case 1:
                company = _a.sent();
                (0, response__util_1.sendSuccess)(res, "Company detail", company);
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=admin.js.map