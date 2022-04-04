const ProductRepository = require("./../repository/productRepository");
const ProductModel = require("../model/product");
const repository = new ProductRepository(ProductModel);

class ProductExternalController {
  async getProducts(req, res) {
    return res.status(200).json({ products: await repository.find() });
  }
}

module.exports = new ProductExternalController();
