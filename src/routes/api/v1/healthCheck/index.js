const routes = require("express").Router();
const HealthCheckController = require("../../../../controllers/healthCheckController/healthCheck-controller");

routes.get("/", HealthCheckController.healthCheck);

module.exports = routes;
