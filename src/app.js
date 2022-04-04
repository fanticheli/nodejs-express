require("dotenv").config();

const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./helpers/swaggerDocument.json");

class AppController {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
    this.swagger();
  }

  middlewares() {
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes/routes"));
  }

  swagger() {
    this.express.use(
      "/api-docs",
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument)
    );
  }
}

module.exports = new AppController().express;
