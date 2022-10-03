"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImageUtil = void 0;
var uuid_1 = require("uuid");
var path_1 = __importDefault(require("path"));
/**
 * It takes a request object, a file name, and a boolean value. If the boolean value is true, it checks
 * if the request object has a file with the given file name. If it does, it uploads the file to the
 * server. If the boolean value is false, it returns a string saying "No files were uploaded".
 * @param {any} req - any -&gt; The request object
 * @param {string} fileName - The name of the file you want to upload.
 * @param {boolean} isRequired - boolean -&gt; If the file is required or not
 * @returns A promise.
 */
var uploadImageUtil = function (req, next, fileName, isRequired) {
    return new Promise(function (resole, reject) {
        if (!req.files ||
            Object.keys(req.files).length === 0 ||
            !req.files["".concat(fileName)]) {
            if (isRequired)
                reject(fileName + " is required .");
            else
                next();
        }
        else {
            var toUploadFile = req.files["".concat(fileName)];
            var uploadPath = path_1.default.join(__dirname, "..", "..", "uploads", "/");
            if (toUploadFile) {
                var extention1 = toUploadFile.name;
                var lastIndex1 = extention1.lastIndexOf(".");
                extention1 = extention1.substring(lastIndex1);
                var uploadFileName1 = (0, uuid_1.v4)() + extention1;
                saveImageToFile(toUploadFile, uploadPath, uploadFileName1)
                    .then(function (uploadedFileName) {
                    resole(uploadedFileName);
                })
                    .catch(function (e) {
                    reject(e);
                });
            }
            else {
                if (isRequired)
                    reject(fileName + " is required .");
                else
                    next();
            }
        }
    });
};
exports.uploadImageUtil = uploadImageUtil;
var saveImageToFile = function (uploadFile, uploadPath, uploadFileName) {
    return new Promise(function (resolve, reject) {
        uploadFile.mv(uploadPath + uploadFileName, function (err) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (err)
                    reject(err);
                resolve(uploadFileName);
                return [2 /*return*/];
            });
        }); });
    });
};
//# sourceMappingURL=imageUpload.util.js.map