const mongoose = require("mongoose");

// 商品信息数据库
const Info = mongoose.Schema({
  taxon: {
    type: String,
    // required: true,
    description: "分类名称",
  },
  CategoryIcon: {
    type: String,
    description: "分类图标",
  },
});

const CategorizedEn = mongoose.model("CategorizedEn", Info);

module.exports = CategorizedEn;
