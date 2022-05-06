import React, { useState } from 'react'
import "./Book.css"
import axios from 'axios'
import { useLocation } from 'react-router-dom';
function Book() {
    const [row,setRow]=useState('')
    const[col,setCol]=useState('');
    const[price,setPrice]=useState(0);
    const[cat,setCat]=useState('');
    const[reserved,setReserved]=useState(false)
    const location = useLocation();
  let movie = location.movie;
  if(movie){
    localStorage.setItem("movie",JSON.stringify(location.movie));
   }  else{
     movie = JSON.parse(localStorage.getItem("movie"))
   }
//    console.log(movie._id);
const addSeat= async()=> {try
    {   
        const seat=row+col
        await axios.put("seats/add/"+`${movie._id}`, {seat,reserved,price,cat});
    // await login({ email, password }, dispatch);
       await alert('seat added succesfully')
  } catch (err) {console.log(err);}
};
  return (
    <div className='main'>
        <div className='body'>
            <h1>Book</h1>
            <form action="">
                <textarea name="" id="" placeholder='row' cols="30" rows="10" onChange={(e)=>{setRow(e.target.value)}}></textarea>
                <textarea name="" id="" placeholder='col' cols="30" rows="10" onChange={(e)=>{setCol(e.target.value)}}></textarea>
                <textarea name="" id="" placeholder='price' cols="30" rows="10" onChange={(e)=>{setPrice(e.target.value)}}></textarea>
                <textarea name="" id="" placeholder='category' cols="30" rows="10" onChange={(e)=>{setCat(e.target.value)}}></textarea>
                <textarea name="" id="" placeholder='reserved' cols="30" rows="10" onChange={(e)=>{setReserved(e.target.value)}}></textarea>
                <button onClick={()=>{addSeat(row,col,reserved,price,cat)}}>book</button>
            </form>
        </div>
    </div>
  )
}

export default Book