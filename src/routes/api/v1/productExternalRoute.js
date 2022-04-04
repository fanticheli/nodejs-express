const routes = require("express").Router();
const ProductExternalController = require("../../../controller/productExternalController");

routes.get("/", ProductExternalController.getProducts);

module.exports = routes;
