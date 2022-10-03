"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var express_1 = __importDefault(require("express"));
var initalizor_router_1 = require("./routes/initalizor.router");
var config_1 = __importDefault(require("config"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = require("./routes");
var host = config_1.default.get("dbConfig");
(0, typeorm_1.createConnection)(host)
    .then(function () {
    var app = (0, express_1.default)();
    var httpServer = require("http").createServer(app);
    // Convert to json
    app.use(express_1.default.json());
    // Allow cross origin
    app.use((0, cors_1.default)());
    // Init Route
    app.use(routes_1.Routes.config.version, initalizor_router_1.RouterInitalizor);
    app.get(routes_1.Routes.default.base, function (req, res) {
        res.send("API Working ");
    });
    httpServer.listen(4000, function () {
        console.log("Server listening on");
    });
    console.log("Server listening ");
})
    .catch(function (error) { return console.log(error); });
//# sourceMappingURL=index.js.map