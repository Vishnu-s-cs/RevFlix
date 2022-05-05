import "./Book.scss";
import Navbar from "../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import Rating from "./rating";
// import {FaStar} from 'react-icons/fa'
import { useState,useEffect } from "react";
import Message from "../components/message";
import axios from "axios";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { yellow } from "@material-ui/core/colors";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField,ButtonGroup,Button} from "@material-ui/core";
import { Cancel,Done,PlayArrow} from "@material-ui/icons";
import { Link } from "react-router-dom";
export default function Book(){ 
  const location = useLocation();
  
  let movie = location.movie;
  if(movie){
   localStorage.setItem("movie",JSON.stringify(location.movie));
  }  else{
    movie = JSON.parse(localStorage.getItem("movie"))
  }
  // movie?JSON.parse(localStorage.getItem("movie")):localStorage.setItem("movie",JSON.stringify(location.movie));
  // const state = {
  //   movie: JSON.parse(localStorage.getItem("movie")) || movie
  // }
  // useEffect(() => {
  //   localStorage.setItem("movie", JSON.stringify(state.movie));
  // }, [state.movie]);
   
  const [rating, setRating] = useState('')
  const [comment, setComment] = useState('')
  const[name,setName]=useState('')
const reset = ()=>{
  setRating(0);
  setComment('');
}
const handleChange = (event) => {
  setRating(event.target.value);
};
const useStyles = makeStyles(theme => ({
  paper: {
    // opacity: 0.5,
    color: yellow[500],
    backgroundColor: 'transparent',
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      padding: theme.spacing(3),
    },
  },
}));
const classes = useStyles();
const createReview = async()=>{
  try {
    await axios.put("movies/reviews/"+`${movie._id}`, { name,rating,comment});
    // await login({ email, password }, dispatch);
       await alert('review added succesfully')
  } catch (err) {console.log(err);}
};
  return( 
    <><div className="main">
      <Navbar></Navbar>
    <div className="book">
      <img src={movie.img} alt="" />
      <div className="info">
        <img src={movie.imgTitle} alt="" />
        <span className="desc">{movie.desc}</span>
        <span className="avg">Average Rating:</span>  
        <br />
        <Rating value={movie.rating} />
        <br />
        <div className="buttons">
          <Link to={{ pathname: "/watch", movie: movie }} className="link">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button></Link></div>
        <div className="review">
        <h2>Reviews</h2>
        {movie.reviews?<Grid container justify="center" className="items"> 
            {movie.reviews.length === 0 && <Message>No Reviews</Message>}
              
          {movie.reviews.map((review) => (
    <Paper key={review._id} className={classes.paper}> <strong>{review.name}</strong>   <Rating value={review.rating} />
                  <p>{review.createdAt}</p>     <p>{review.comment}</p>
            </Paper>
                  
                ))}
              </Grid>:<Message>No reviews</Message>}
              
      </div> 
      
    </div>

    </div>
    </div>
    <div className="form"><h2>Write a review</h2>
    <FormControl>
        <TextField variant="outlined" value={name}  placeholder="name" color="primary" className="textField1"  onChange={(e) => setName(e.target.value)}></TextField> 
        </FormControl><br />
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
      
        <InputLabel id="demo-simple-select-filled-label">Rating</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={rating}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select><br /><FormControl>
        <TextField variant="outlined" value={comment}  placeholder="comment" color="primary" className="textField"  onChange={(e) => setComment(e.target.value)}></TextField> 
        </FormControl><br />
        <ButtonGroup className="button"  variant="contained">
    <Button
    startIcon={<Done/>}
           className="button1" onClick={()=>{createReview(rating,comment)}}>Add Review</Button> 
       <Button
    startIcon={<Cancel/>}
        color="primary" onClick={()=>{reset()}}>Cancel</Button>
       </ButtonGroup>
      </FormControl>
    </div>
              
    </>
)
}
