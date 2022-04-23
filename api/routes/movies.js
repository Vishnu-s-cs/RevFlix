const router = require("express").Router();
const Movie = require("../models/Movie");
const verify = require("../verifyToken");
const Stripe = require("stripe")
const dotenv = require("dotenv");
dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY,{
    apiVersion:"2020-08-27"
})
//CREATE

router.post("/", verify, async (req, res) => {
  
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body);
    try {
      const savedMovie = await newMovie.save();
      res.status(201).json(savedMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

//UPDATE

router.put("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

//DELETE

router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json("The movie has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

//GET

router.get("/find/:id", verify, async (req, res) => {
  
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET RANDOM

router.get("/random", verify, async (req, res) => {
  const type = req.query.type;
  let movie;
  try {
    if (type === "series") {
      movie = await Movie.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ]);
    } else if(type=="movies") {
      movie = await Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
      }else{
        movie = await Movie.aggregate([
          // { $match: { isSeries: false } },
          { $sample: { size: 1 } },
        ]);

      }
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL

router.get("/", verify, async (req, res) => {
  // console.log(req.user.isAdmin);
 try {
      if (req.user.isAdmin) {
      const movies = await Movie.find();
      res.status(200).json(movies.reverse());
    } else {
      res.status(403).json("You are not allowed!");
    }
  } 
  catch (err) {
      res.status(500).json(err);
    }
});
router.put('/reviews/:id',async(req,res)=>{
  const { rating, comment } = req.body
  
    const movie = await Movie.findById(req.params.id)
  
    if (movie) {
    //   const alreadyReviewed = movie.reviews.find(
    //     (r) => r.user.toString() === req.user._id.toString()
    //   )
  
    //   if (alreadyReviewed) {
    //     res.status(400)
    //     throw new Error('Movie already reviewed')
    //   }
  
      const review = {
        name: req.body.name,
        rating: Number(rating),
        comment,
      }
  
      movie.reviews.push(review)
  
      movie.numReviews = movie.reviews.length
  
      movie.rating =
        movie.reviews.reduce((acc, item) => item.rating + acc, 0) /
        movie.reviews.length
  
      await movie.save()
      res.status(201).json({ message: 'Review added' })
    } else {
      res.status(404).json('Movie not found');
    }
})

module.exports = router;
