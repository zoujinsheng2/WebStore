const express = require("express");

const CartInfoEn = require("./models/CartInfoEn");

const route = express();
route.post("/cart", (req, res) => {
  CartInfoEn.create({
    _id: req.body.item._id,
    img: req.body.item.image,
    name: req.body.item.name,
    size: req.body.form.region,
    price: req.body.item.price,
    num: req.body.form.Num,
  }).then((data) => {
    console.log(data);
    res.send("服务器收到请求");
  });
});
route.get("/cart", (req, res) => {
  CartInfoEn.find().then((data) => {
    res.status(200).send(data);
    console.log(data);
  });
});
module.exports = route;
