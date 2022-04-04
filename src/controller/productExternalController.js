const ProductRepository = require("./../repository/productRepository");
const ProductModel = require("../model/product");
const repository = new ProductRepository(ProductModel);

const NodeCache = require("node-cache");

const CACHE_LIMIT = 0.1; // 100ms
const dbCache = new NodeCache({ stdTTL: CACHE_LIMIT, checkperiod: 0.2 });
const cacheKey = "PRODUCTS";

class ProductExternalController {
  async getProducts(req, res) {
    if (dbCache.has(cacheKey)) {
      return res
        .status(200)
        .json({ products: JSON.stringify(dbCache.get(cacheKey)) });
    }

    const products = await repository.find();

    dbCache.set(cacheKey, products, CACHE_LIMIT);

    return res.status(200).json({ products });
  }
}

module.exports = new ProductExternalController();
