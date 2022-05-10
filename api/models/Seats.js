const mongoose = require('mongoose');
const {Schema} = mongoose;

const SeatSchema = new Schema(
  {
    seatNumber:  [{ number: Number, unavailableDates: {type: [Date]}}],
    isReserved: { type: Boolean, default: false },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    name: { type: String, default: '' },
  },
  { timestamps: true }
);

const Seats = mongoose.model('Seats',SeatSchema);
module.exports = Seats;