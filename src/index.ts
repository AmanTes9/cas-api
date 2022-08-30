import { createConnection } from "typeorm";
import express from "express";
import { RouterInitalizor } from "./routes/initalizor.router";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import config from "config";
import cors from "cors";
import { Routes } from "./routes";

const host = config.get("dbConfig");
const swaggerConfig = config.get("swaggerConfig");

createConnection(host)
  .then(() => {
    const app = express();
    const httpServer = require("http").createServer(app);
    // Convert to json
    app.use(express.json());
    // Allow cross origin
    app.use(cors());

    // Init Route
    app.use(Routes.config.version, RouterInitalizor);

    
    app.get(Routes.default.base, (req, res) => {
      res.send("API Working ");
    });
    
    const swaggerSpec = swaggerJSDoc(swaggerConfig);
    app.use(
      "/api-docs",
      swaggerUi.serve,
      swaggerUi.setup(swaggerSpec)
    );
    httpServer.listen(4000, () => {
      console.log("Server listening on");
    });
    console.log("Server listening ");
  })
  .catch((error) => console.log(error));
