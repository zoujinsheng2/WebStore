const express = require("express");
const GoodsInfoEn = require("./models/GoodsInfoEn");
const route = express.Router();

let gdid = null;

route.post("/ProductDetailsPage", (req, res, next) => {
  const { id } = req.body;
  gdid = id;
  res.send("12345");
});

route.get("/ProductDetailsPage", (req, res) => {
  // 处理 GET 请求中的 id 参数
  GoodsInfoEn.findOne({ _id: gdid })
    .then((data) => {
      res.json({
        code: 0000,
        msg: "读取成功",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = route;
