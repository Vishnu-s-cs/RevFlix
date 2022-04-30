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
import { Cancel,Done } from "@material-ui/icons";
export default function Book(){
    const location = useLocation();
  const movie = location.movie;
  const [rating, setRating] = useState(0)
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
          <MenuItem value={3}>4</MenuItem>
          <MenuItem value={3}>5</MenuItem>
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
