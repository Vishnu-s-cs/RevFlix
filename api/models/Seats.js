const mongoose = require('mongoose');
const {Schema} = mongoose;

const SeatSchema = new Schema(
  {
    seatNumber:  [{ number: String, unavailableDates: {type: [Date]}}],
    isReserved: { type: Boolean, default: false },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    
  },
  { timestamps: true }
);

const Seats = mongoose.model('Seats',SeatSchema);
module.exports = Seats;