const routes = require("express").Router();
const HealthCheckController = require("../../../controller/healthCheckController");

routes.get("/", HealthCheckController.healthCheck);

module.exports = routes;
