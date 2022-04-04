const ProductModel = require("./../model/product");
const ProductRepository = require("./../repository/productRepository");
const repository = new ProductRepository(ProductModel);
const ConstantMessages = require("../helpers/constantMessages");
const ValidationModel = require("../helpers/validationModel");

class ProductService {
  async createProduct(productModel) {
    try {
      this.productModelValid(productModel);
      return await repository.create(productModel);
    } catch (error) {
      throw error;
    }
  }

  productModelValid(productModel) {
    if (!ValidationModel.propertyValid(productModel.productName)) {
      throw ConstantMessages.NAME_PRODUCT_INVALID;
    }

    if (!ValidationModel.propertyArrayValid(productModel.productListImages)) {
      throw ConstantMessages.IMAGE_PRODUCT_INVALID;
    }

    if (!ValidationModel.propertyArrayValid(productModel.productCurrenciesValues)) {
      throw ConstantMessages.CURRENCIES_PRODUCT_INVALID;
    }
  }
}

module.exports = ProductService;
