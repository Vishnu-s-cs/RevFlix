const mongoose = require("mongoose");

const SubscribeSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        subscriberId: {
          type: String,
        },
        months: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: { type: Number, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", SubscribeSchema);
