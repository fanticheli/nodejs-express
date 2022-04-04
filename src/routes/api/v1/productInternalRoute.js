const routes = require("express").Router();
const ProductInternalController = require("../../../controller/productInternalController");
const ValidationToken = require('./../../../middlewares/validationToken')

routes.post("/", ValidationToken.validateToken, ProductInternalController.createProduct);

module.exports = routes;
