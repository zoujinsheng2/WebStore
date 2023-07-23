const mongoose = require("mongoose");

const balance = mongoose.Schema({
  balance: Number,
});

const Wallet = mongoose.model("gdWallet", balance);

module.exports = Wallet;
