const mongoose = require("mongoose");

const product = new mongoose.Schema({
  productName: { type: String, required: true },
  productListImages: { type: Array, default: [], required: true },
  productCurrenciesValues: { type: Array, default: [], required: true },
});

module.exports = mongoose.model("Product", product);
