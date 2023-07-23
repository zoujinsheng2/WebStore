const express = require("express");
const route = express.Router();
const db = require("./db/db");
const cors = require("cors");
const routerModule = require("./response/response");

const GoodsInfoEn = require("./models/GoodsInfoEn");
const CategorizedEn = require("./models/CategorizedEn");

route.use(cors());
db(() => {
  const homeRouter = express.Router();
  homeRouter.use("/", async function (req, res, next) {
    try {
      // 使用 Promise.all() 同时获取两个数据集
      const [data1, data2] = await Promise.all([
        routerModule(GoodsInfoEn).get(),
        routerModule(CategorizedEn).get(),
      ]);

      // 将数据合并到一个对象中，然后发送给客户端
      res.send({
        data1: data1,
        data2: data2,
      });
    } catch (err) {
      next(err);
    }
  });
  // 将新的聚合路由添加到应用程序的路由系统中
  route.use("/home", homeRouter);
});
module.exports = route;
