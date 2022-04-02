const routes = require("express").Router();
const UserController = require("../../../controller/userController");

routes.post("/", UserController.createUser);

module.exports = routes;
