const router = require("express").Router();
const Theatre = require('../models/Theatres');
const verify = require("../verifyToken");
//create
router.post("/register",verify, async (req, res,next) => {
  
    const newTheatre = new Theatre(req.body);

  try {
    const savedTheatre = await newTheatre.save();
    res.status(200).json(savedTheatre);
  } catch (err) {
    next(err);
  }
    
  });
  router.post("/update",verify, async (req, res,next) => {
  
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedHotel);
      } catch (err) {
        next(err);
      }
    
  });
export default router