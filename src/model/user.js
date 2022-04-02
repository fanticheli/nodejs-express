const mongoose = require("mongoose");

const user = new mongoose.Schema({
  userName: { type: String, unique: true, lowercase: true, required: true },
  secretKey: { type: String, unique: true, required: true },
  createdAt: { type: Date, default: new Date(), required: true },
});

module.exports = mongoose.model("User", user);
