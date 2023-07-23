const express = require("express");
const router = express();
const AddressEn = require("./models/AddressEn");

//新增地址
router.post("/address", (req, res) => {
  const a = req.body.value[0];
  const b = req.body.value[1];
  const c = req.body.value[2];
  if (req.body.uid != "") {
    AddressEn.updateOne(
      { _id: req.body.uid },
      {
        recipients: req.body.name,
        District: `${a}${b}${c}`,
        DetailedAddress: req.body.address,
        PhoneNumbers: req.body.phone,
      }
    ).then((data) => {
      console.log("地址已更新~~");
      res.send("成功向服务器发送post请求");
    });
    return;
  } else if (req.body.uid == "") {
    AddressEn.create({
      recipients: req.body.name,
      District: `${a}${b}${c}`,
      DetailedAddress: req.body.address,
      PhoneNumbers: req.body.phone,
    }).then((data) => {
      console.log(data);
      res.send("成功向服务器发送post请求");
    });
    return;
  }
  res.send("添加或者更新失败");
});

//查询地址
router.get("/address", (req, res) => {
  AddressEn.find().then((data) => {
    res.json({
      code: 0000,
      msg: "读取成功",
      data,
    });
  });
});

// 删除地址
router.post("/address/remove", (req, res) => {
  AddressEn.deleteOne({ _id: req.body })
    .then((data) => {
      console.log("删除成功~~");
    })
    .catch((err) => {
      console.log(err);
    });
  res.send("ok");
});

// //更新地址
// router.get("/address/renewal", (req, res) => {
//   AddressEn.updateOne({ _id: req.body._id }).then((data) => {
//     console.log("地址已更新~~" + data);
//   });
// });

module.exports = router;
