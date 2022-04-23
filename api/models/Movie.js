const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgSm: { type: String },
    trailer: { type: String },
    video: { type: String },
    year: { type: String },
    limit: { type: Number },
    genre: { type: String },
    isSeries: { type: Boolean, default: false },
    rating:{type:Number},
    reviews:[{type: new mongoose.Schema({name: { type: String },
    rating: { type: Number, required: true },
    comment: { type: String}},{timestamps: true})}],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);