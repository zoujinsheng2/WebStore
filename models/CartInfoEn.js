const mongoose = require("mongoose");

// 购物车数据库
const cart = mongoose.Schema({
  img: String,
  name: String,
  size: String,
  price: Number,
  num: Number,
});
const model = mongoose.model("gdCart", cart);

module.exports = model;
