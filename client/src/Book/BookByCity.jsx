import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import './BookByCity.scss'
import Navbar from '../components/navbar/Navbar';
import { makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { Grid,Paper } from '@material-ui/core';
import Message from '../components/message';
import { useContext } from 'react';
import { AuthContext } from '../authContext/AuthContext';
import { useState } from 'react';
import Reserve from '../components/reserve/Reserve';
function BookByCity() {
  const navigate = useHistory()
  const {user} = useContext(AuthContext)
  const[openModal,setOpenModal]=useState(false)
  const[theatreId,setTheatreId]=useState('')
    const location = useLocation();
    let item = location;
    
  if(item){
   localStorage.setItem("search",JSON.stringify(location));
  }  else{
    item = JSON.parse(localStorage.getItem("search"))
  }
    
      const{data, loading,error}=useFetch(`theatre${item.search}`);
     
      const useStyles = makeStyles(theme => ({
        paper: {
          // opacity: 0.5,
          
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
  return (
      <><Navbar/>
      <div className='body'>
          {loading?("Loading please Wait"):(<>
        <h2>Theatres in {data[0]?.city}</h2>
        </>)}
    <div className='theatreIn'>
    
        {/* {
            loading?("Loading please wait"):(<>
            <div className='Item'><img src={data[0].photos[0]} alt="" /></div>
            </>)
        }
        <h2>Theatres in {data[0]?.city}</h2>
        {console.log(data[0].city)} */}
        {loading?("Loading please Wait"):(<>
          {data?<Grid container justify="center" className="items"> 
              
          {data.map((review,y) => (<Grid key={y}>
    <Paper key={y} className={classes.paper}><strong>{review.name}</strong> 
     {
      review.photos.map((i,j)=>(
        <Paper key={j} className={classes.paper}><img src={i} alt="" className='paperImg' key={j}/></Paper>
      ))
    } 
                  <p>Description:{review.desc}</p>     <p>Location:{review.location}</p>
                 
                {/* <Link  to={{ pathname: "/reserve", Id: review }}>  */}
                <button className='button' onClick={()=>{
                  if (user) {
                    setOpenModal(true);
                    setTheatreId(review._id)
                  } else {
                    navigate.push("/login");
                  }
                }}>Book Now</button>
                {/* </Link> */}
            </Paper>
                  
                  </Grid>))}
              </Grid>:<Message>No theatres</Message>}</>)}
        

    </div></div>
    {openModal && <Reserve setOpen={setOpenModal} theatreId={theatreId}/>}
  </>)
}

export default BookByCity