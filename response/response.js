const routerModule = (dbname) => {
  const mongoose = require("mongoose");

  // 根据 dbname 创建相应的数据模型
  const model = dbname;

  // 返回数据集
  return {
    get: async () => {
      const data = await model.find({});
      return data;
    },
    add: async (newData) => {
      const data = await model.create(newData);
      return data;
    },
    update: async (id, newData) => {
      const data = await model.findByIdAndUpdate(id, newData, { new: true });
      return data;
    },
  };
};

module.exports = routerModule;
