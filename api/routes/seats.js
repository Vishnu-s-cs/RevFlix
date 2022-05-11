const router = require('express').Router();
const Theatre = require('../models/Theatres')
const Seats = require('../models/Seats')

router.post('/setSeat/:theatreid', async (req, res,next) => {
  const theatreId = req.params.theatreid;
  const newSeat = new Seats(req.body);
try {
    const savedSeat = await newSeat.save();
    try {
      await Theatre.findByIdAndUpdate(theatreId, {
        $push: { seats: savedSeat._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedSeat);
  } catch (err) {
    next(err);
  }
});

router.post('/add/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id)
  movie.seats.push(req.body)
  console.log(req.body);
  try {
    const saveSeats = await movie.save();
    res.status(200).json(saveSeats);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

router.put('/availability/:id', async (req, res) => {
  try {
    const updatedSeat = await Seats.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedSeat);
  } catch (err) {
    next(err);
  }
});

module.exports = router;