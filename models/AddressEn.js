const mongoose = require("mongoose");
const addressen = mongoose.Schema({
  recipients: String,
  District: String,
  DetailedAddress: String,
  PhoneNumbers: Number,
});

const address = mongoose.model("gdAddress", addressen);

module.exports = address;
