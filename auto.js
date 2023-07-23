const express = require("express");
const route = express.Router();
const UserinfoEn = require("./models/UserInfoEn");
const md5 = require("md5");

route.use(express.json());
route.use(express.urlencoded({ extended: true }));

route.post("/reg", async (req, res) => {
  const { username, password } = req.body;
  // 在此处添加后端逻辑
  // 校验用户名和密码是否有效
  const user = await UserinfoEn.findOne({ username: username });
  if (user != null) {
    res.status(400).send("用户名已经存在");
  } else {
    // 创建新用户，并将其写入
    UserinfoEn.create({ ...req.body, password: md5(req.body.password) })
      .then((data) => {
        res.redirect("http://localhost:5173/login");
        console.log(data);
      })
      .catch((err) => {
        res.send(err);
      });
  }
});

route.post("/login", (req, res) => {
  //获取用户名和密码
  let { username, password } = req.body;
  //查询数据库
  UserinfoEn.findOne(
    { username: username, password: md5(password) },

    (err, data) => {
      //判断
      if (err) {
        res.status(500).send("登录, 请稍后再试~~");
        return;
      }
      //判断 data
      if (!data) {
        return res.send("账号或密码错误~~");
      }

      //写入session
      req.session.username = data.username;
      req.session._id = data._id;

      //登录成功响应
      res.send("1234");
    }
  );
});

module.exports = route;
