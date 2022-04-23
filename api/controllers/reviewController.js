import Movie from "../models/Movie";
import asyncHandler from 'express-async-handler'
const createMovieReview = asyncHandler(async (req, res) => {
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
        name: req.user.name,
        rating: Number(rating),
        comment,
        user: req.user._id,
      }
  
      movie.reviews.push(review)
  
      movie.numReviews = movie.reviews.length
  
      movie.rating =
        movie.reviews.reduce((acc, item) => item.rating + acc, 0) /
        movie.reviews.length
  
      await movie.save()
      res.status(201).json({ message: 'Review added' })
    } else {
      res.status(404)
      throw new Error('Movie not found')
    }
  })