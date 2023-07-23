const express = require("express");
const GoodsInfoEn = require("./models/GoodsInfoEn");
const CategorizedEn = require("./models/CategorizedEn");
const route = express.Router();

let id = null;
let textkey = null;

route.post("/ProductList", (req, res, next) => {
  // let CategoryId = req.body.id;
  id = req.body.id;
  res.send("服务器成功接收信息");
});

route.get("/ProductList", (req, res) => {
  if (id != null) {
    console.log("id");
    CategorizedEn.findOne({ _id: id })
      .then((data) => {
        GoodsInfoEn.find({ category: data.taxon })
          .then((data) => {
            res.send(data);
          })
          .catch((err) => {
            console.log("没有找到该类型对应的商品" + err);
          });
      })
      .catch((err) => {
        console.log("没有找到该类型" + err);
      });
    return (id = null);
  } else {
    const regex = new RegExp(textkey, "i");
    GoodsInfoEn.find({ description: { $regex: regex } })
      .then((data) => {
        if (data == []) {
          res.send("抱歉商城没有上架该商品！看看其他吧^^");
          console.log("抱歉商城没有上架该商品！看看其他吧^^");
          return;
        }
        console.log(data);
        res.send(data);
      })
      .catch((err) => {
        console.log("没有找到该类型对应的商品" + err);
      });
  }
});

route.post("/products", (req, res, next) => {
  // let CategoryId = req.body;
  textkey = req.body.description;

  res.send("服务器成功接收信息");
});

module.exports = route;
