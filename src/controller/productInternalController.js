const ProductService = require("./../service/productService");
const service = new ProductService();

class ProductInternalController {
  async createProduct(req, res) {
    try {
      const restul = await service.createProduct(req.body);
      return res.status(200).json(restul);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}

module.exports = new ProductInternalController();
