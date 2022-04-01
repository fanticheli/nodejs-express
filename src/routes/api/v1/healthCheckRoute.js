const routes = require("express").Router();
const healthCheckController = require("../../../controller/healthCheckController");

routes.get("/", healthCheckController.healthCheck);

module.exports = routes;
