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
export default function Book(){
    const location = useLocation();
  const movie = location.movie;
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
const submitHandler = ()=>{
  //  axios.put('/reviews'+movie._id)
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
  return( 
    <><div className="main">
      <Navbar></Navbar>
    <div className="featured">
      <img src={movie.img} alt="" />
      <div className="info">
        <img src={movie.imgTitle} alt="" />
        <span className="desc">{movie.desc}</span>
        <div className="review">
        <h2>Reviews</h2>
        <Grid container justify="center" className="items"> 
            {movie.reviews.length === 0 && <Message>No Reviews</Message>}
              
          {movie.reviews.map((review) => (
    <Paper key={review._id} className={classes.paper}> <strong>{review.name}</strong>   <Rating value={review.rating} />
                  <p>{review.createdAt}</p>     <p>{review.comment}</p>
            </Paper>
                  
                ))}
              </Grid>
    
      </div> 
      
    </div>

    </div>
    </div>
    <div className="form">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={rating}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
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
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
                     
    </>
)
}
