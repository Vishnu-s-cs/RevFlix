const router = require('express').Router();
// const Seats = require('../models/Seats');
const Movie = require('../models/Movie');

router.get('/book/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  const hello= movie.seats
  try {
     
     res.status(200).json(hello);
  } catch (err) {
    console.log(err);
    // res.status(500).json(err);
    
  }
});

router.put('/add/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id)
  movie.seats.push(req.body)
  try {
    const saveSeats = await movie.save();
    res.status(200).json(saveSeats);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

// insert many
router.post('/insertmany', async (req, res) => {
  try {
    const multiUser = await Seats.insertMany(req.body);
    res.status(200).json(multiUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id/:user', async (req, res) => {
  // console.log(req.params.user);
  const user = await Seats.findById(req.params.id);
  try {
    if (!user.isReserved) {
      const updateSeat = await Seats.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            isReserved: true,
            name: req.params.user,
          },
        },
        { new: true }
      );
      res.status(200).json(updateSeat);
    } else {
      res.status(200).json('its already booked');
      console.log('its already booked');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.patch('/updateAll', async (req, res) => {
  try {
    const updateAll = await Seats.updateMany(
      { isReserved: true },
      { $set: { isReserved: false, name: '' } }
    );
    res.status(200).json(updateAll);
  } catch (err) {
    res.status(500).json('Error' + err);
  }
});

router.delete('/delete', async (req, res) => {
  try {
    const deleteAll = await Seats.deleteMany();
    res.status(200).json(deleteAll);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;