const mongoose = require("mongoose");
const user = mongoose.Schema({
  username: String,
  password: String,
});

const users = mongoose.model("username", user);

module.exports = users;
