const mongoose = require("mongoose");

// 商品信息数据库
const Info = mongoose.Schema({
  name: {
    type: String,
    // required: true,
    description: "商品名称",
  },
  description: {
    type: String,
    description: "商品描述",
    // default: true,
  },

  price: {
    type: Number,
    // required: true,
    description: "商品价格",
  },
  image: {
    type: String,
    // required: true,
    description: "商品图片",
  },
  category: {
    type: String,
    description: "商品分类",
    // default: true,
  },
  inventory: {
    type: Number,
    description: "商品库存",
    // default: true,
  },
});

const GoodsInfo = mongoose.model("GoodsInfoEn", Info);

module.exports = GoodsInfo;
