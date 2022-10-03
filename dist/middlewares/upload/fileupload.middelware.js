"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadMiddleware = void 0;
var response__util_1 = require("../../utils/response..util");
var imageUpload_util_1 = require("../../utils/imageUpload.util");
/**
 * It takes a request, a response, and a next function as arguments. It then calls the uploadImageUtil
 * function, which returns a promise. If the promise resolves, it sets the req.body. property to
 * the fileName, and calls the next function. If the promise rejects, it calls the sendBadRequest
 * function, which sends a 400 response to the client
 * @param {any} req - the request object
 * @param {Response} res - Response - the response object
 * @param {NextFunction} next - NextFunction -&gt; This is a function that will be called when the
 * upload is complete.
 */
var upload = function (toUploadFileName, isRequired) {
    return function libreUpload(req, res, next) {
        (0, imageUpload_util_1.uploadImageUtil)(req, next, toUploadFileName, isRequired)
            .then(function (fileName) {
            req.body["".concat(toUploadFileName)] = fileName;
            next();
        })
            .catch(function (e) {
            (0, response__util_1.sendBadRequest)(res, e, undefined);
        });
    };
};
exports.FileUploadMiddleware = {
    upload: upload,
};
//# sourceMappingURL=fileupload.middelware.js.map