const router = require("express").Router();
const Theatre = require('../models/Theatres');
const verify = require("../verifyToken");
//create
const Seats = require("../models/Seats")
router.post("/register",verify, async (req, res,next) => {
  
    const newTheatre = new Theatre(req.body);

  try {
    const savedTheatre = await newTheatre.save();
    res.status(200).json(savedTheatre);
  } catch (err) {
    next(err);
  }
    
  });
  router.put("/update:id",verify, async (req, res,next) => {
  
    try {
        const updatedTheatre = await Theatre.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedTheatre);
      } catch (err) {
        next(err);
      }
    
  });
  router.delete("/delete/:id",verify, async (req, res,next) => {
  
    try {
      await Theatre.findByIdAndDelete(req.params.id);
      res.status(200).json("Theatre has been deleted.");
    } catch (err) {
      next(err);
    }
  });
  router.get("/find/:id",verify, async (req, res,next) => {
    try {
      const Theatre = await Theatre.findById(req.params.id);
      res.status(200).json(Theatre);
    } catch (err) {
      next(err);
    }
  });
  router.get("/", verify, async (req, res) => {
    const query = req.query.new;
    
      try {
        const theatres = query
          ? await Theatre.find().sort({ _id: -1 }).limit(5)
          : await Theatre.find();
        res.status(200).json(theatres);
      } catch (err) {
        res.status(500).json(err);
      }
    }
  );
  router.get("/countByCity",verify, async (req, res,next) => {
    const cities = req.query.cities.split(",");
    try {
      const list = await Promise.all(
        cities.map((city) => {
          return Theatre.countDocuments({ city: city });
        })
      );
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  });
  router.get("/seat/:id",verify, async (req, res,next) => {
    try {
      const Theatre = await Theatre.findById(req.params.id);
      const list = await Promise.all(
        Theatre.Seats.map((Seat) => {
          return Seats.findById(Seat);
        })
      );
      res.status(200).json(list)
    } catch (err) {
      next(err);
    }
  });
  router.get("/random", verify, async (req, res) => {
    const city = req.query.city;
    let theatre;
    try {
      
        theatre = await Theatre.aggregate([
          { $match: { city: city } },
          { $sample: { size: 1 } },
        ]);
      
      
      res.status(200).json(theatre);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  module.exports = router;