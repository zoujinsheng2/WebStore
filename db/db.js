module.exports = function (actions, error) {
  if (typeof error !== "function") {
    error = () => {
      console.log("数据库连接失败！");
    };
  }

  const mongoose = require("mongoose");
  const { protocol, url, database } = require("../config/url");
  mongoose.set("strictQuery", true);
  mongoose.connect(`${protocol}://${url}/${database}`);

  mongoose.connection.once("open", () => {
    actions();
  });
  mongoose.connection.on("error", () => {
    error();
  });
  mongoose.connection.on("close", () => {
    console.log("数据库关闭");
  });
};
