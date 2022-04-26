import "./Book.scss";
import Navbar from "../components/navbar/Navbar";
import { Link, useLocation } from "react-router-dom";
import Rating from "./rating";
import {FaStar} from 'react-icons/fa'
import { ListGroup } from "react-bootstrap";
import { useState,useEffect } from "react";
import Message from "../components/message";
import axios from "axios";
export default function Book(){
    const location = useLocation();
  const movie = location.movie;
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
 const submitHandler = ()=>{
  //  axios.put('/reviews'+movie._id)
 }
 console.log(movie.reviews);
   return( 
     <div className="main">
         <Navbar></Navbar>
    <div className="featured">
      <img src={movie.img} alt="" />
      <div className="info">
        <img src={movie.imgTitle} alt="" />
        <span className="desc">{movie.desc}</span>
        <div className="review">
        <h2>Reviews</h2>
            {movie.reviews.length === 0 && <Message>No Reviews</Message>}
               <ListGroup variant='flush'>
                 {movie.reviews.map((review) => (
                   <ListGroup.Item key={review._id}>
                     <strong>{review.name}</strong>
                     <Rating value={review.rating} />
                     <p>{review.createdAt}</p>
                     <p>{review.comment}</p>
                   </ListGroup.Item>
                 ))}
                 <ListGroup.Item>
                 
                   
                     <form className="form" onSubmit={submitHandler}>
                     <div className="h2">
                       <h2>Write a customer review</h2>
                       </div>
                     <div>
                       <label htmlFor="rating">Rating</label>
                       <select id="rating" value={rating}
                        onChange={(e) => setRating(e.target.value)}>
                           <option value="">Select</option>
                           <option value="1">1- Bad</option>
                           <option value="2">2- Fair</option>
                           <option value="3">3- Good</option>
                           <option value="4">4- Very good</option>
                           <option value="5">5- Excellent</option>

                       </select>
                     </div>
                       <div>
                       <label htmlFor="comment">Comment</label>
                       <textarea
                         id="comment"
                         value={comment}
                         onChange={(e) => setComment(e.target.value)}
                       ></textarea>
                     </div>
                    
                     <div>
                       <label />
                       <button className="primary" type="submit">
                         Submit
                       </button>
                     </div>
                     
                   </form>
                     
                 
                   
                 </ListGroup.Item>
              </ListGroup>
      </div>
     
      <div>
       
      </div>
    </div>
    </div></div>
   )
}
