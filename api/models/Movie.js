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
    rating: { type: Number },
    reviews: [{
      type: new mongoose.Schema({
        name: { type: String },
        rating: { type: Number },
        comment: { type: String }
      }, { timestamps: true })
    }],
    seats: [{
      type: new mongoose.Schema({
        seatNumber: { type: String, required: true },
        isReserved: { type: Boolean, default: false },
        price: { type: Number, required: true },
        category: { type: String, required: true },
        name: { type: String, default: '' }
      }, { timestamps: true }, { expireAfterSeconds: 10 })
    }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);