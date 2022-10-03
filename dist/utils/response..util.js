"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendNotFound = exports.sendBadRequest = exports.sendSuccess = void 0;
var sendSuccess = function (res, message, data) {
    res.status(200).json({
        message: message,
        data: data,
    });
};
exports.sendSuccess = sendSuccess;
var sendBadRequest = function (res, message, data) {
    res.status(400).json({
        message: message,
        data: data,
    });
};
exports.sendBadRequest = sendBadRequest;
var sendNotFound = function (res, message, data) {
    res.status(404).json({
        message: message,
        data: data,
    });
};
exports.sendNotFound = sendNotFound;
//# sourceMappingURL=response..util.js.map