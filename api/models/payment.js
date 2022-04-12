const mongoose = require("mongoose");

const SubscribeSchema = new mongoose.Schema(
  {
    customerId: { type: String },
    email:{type: String},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", SubscribeSchema);
