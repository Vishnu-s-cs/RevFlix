import React from 'react'
import Navbar from '../components/navbar/Navbar'
import './Book.scss'
import { useHistory, useLocation } from 'react-router-dom'
import { useContext,useEffect,useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../authContext/AuthContext'
import { makeStyles } from '@material-ui/core'
import { yellow } from '@mui/material/colors'
import Rating from '../Review/rating'
import Message from '../components/message'
import { Grid } from '@mui/material'
import { Paper } from '@material-ui/core'
import useFetch from '../hooks/useFetch'
function Book() {
      const history = useHistory()
      const location = useLocation();
      const { user } = useContext(AuthContext);
      const [movie,setMovie]=useState({})
      const{data, loading,error}=useFetch("theatre/countByCity?cities=Alappuzha,Harippad,Cherthala");
      const{data0, loading0,error0}=useFetch("theatre?new=false");
      let item = location.movie;
      if(item){
       localStorage.setItem("movieBook",JSON.stringify(location.movie));
      }  else{
        item = JSON.parse(localStorage.getItem("movieBook"))
      }
      // console.log(item);
      useEffect(() => {
        const getMovie = async () => {
          try {
            const res = await axios.get("/movies/find/" + item._id, {
              headers: {
                token:
                "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
              },
            });
            setMovie(res.data);
            
          } catch (err) {
            console.log(err);
          }
        };
        getMovie();
      }, []);
       
         
       
      const name = user.username;
    const reset = ()=>{
      
    }
    const handleChange = (event) => {
      
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
        <div className="book">
          <img src={movie.img} alt="" />
          <div className="info">
            <img src={movie.imgTitle} alt="" />
            <span className="desc">{movie.desc}</span>
            <span className="avg">Average Rating:</span>  
            <br />
            <Rating value={movie.rating} />
            <br />
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
        <div className='theatres'>
        <h2>Book Tickets</h2>
        <div className="featuredx">
          
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://pbs.twimg.com/media/EjAf4XkU4AE2CCG.jpg"
              alt=""
              className="featuredImg"
              onClick={()=>{
                history.push({
                  pathname: '/BookByCity',
                  search: '?city=Alappuzha'})
              }}
            />
            <div className="featuredTitles">
              <h1>Alappuzha Town</h1>
              <h2>{data[0]} Theatres</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://uploads.tapatalk-cdn.com/20181125/73a0442dd547983ffebc9bc7b8bb74ab.jpg"
              alt=""
              className="featuredImg" onClick={()=>{
                history.push({
                  pathname: '/BookByCity',
                  search: '?city=Harippad'})
              }}
            />
            <div className="featuredTitles">
              <h1>Haripad</h1>
              <h2>{data[1]} Theatres</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipMWGCTDj2hC7fVtKJH1WCxKvn-yQchzdVixcnUd=s1600-w400"
              alt=""
              className="featuredImg" onClick={()=>{
                history.push({
                  pathname: '/BookByCity',
                  search: '?city=Cherthala'})
              }}
            />
            <div className="featuredTitles">
              <h1>Cherthala</h1>
              <h2>{data[2]} Theatres</h2>
            </div>
          </div>
        </>
      )}
    </div> <h2>All Theatres</h2>
    <div className='all'>
     
      {/* <img src={data0[0]?.photos[0]} alt="" /> */}
      {loading0 ? ("loading please wait "):(<>
      {data0 && data0.map((i)=>{
        return <div key={Math.random()} className='Item'> <img src={i?.photos[0]} alt="" className='Img'/>
        <div className='Titles'><h3>{i.name}</h3></div>
        </div>
        
      })}
      </>)}
    </div>
      </div>
      </>
    
  )
}

export default Book