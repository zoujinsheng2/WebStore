const express = require("express");
const WalletEn = require("./models/WalletEn");
const route = express();

route.post("/wallet", (req, res) => {
  WalletEn.findOne({ _id: "64afb356a433a15b7991b707" }).then((data) => {
    res.send("账户余额：" + data);
    WalletEn.updateOne(
      { _id: "64afb356a433a15b7991b707" },
      { balance: data.balance + req.body.num }
    ).then((data) => {
      console.log("入账" + req.body + "当前余额：" + data);
    });
    // console.log(req.body);
  });
});

route.get("/Wallet", (req, res) => {
  WalletEn.findOne({ _id: "64afb356a433a15b7991b707" }).then((data) => {
    console.log(data);
    res.status(200).send(data);
  });
});

module.exports = route;
