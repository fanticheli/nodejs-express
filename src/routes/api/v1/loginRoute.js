const routes = require("express").Router();
const loginController = require("../../../controller/loginController");

routes.post("/", loginController.login);

module.exports = routes;
