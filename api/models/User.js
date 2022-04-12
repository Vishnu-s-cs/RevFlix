const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg" },
    isAdmin: { type: Boolean, default: false },
    isPayed: {type:Boolean,default:false},
    customerId: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
