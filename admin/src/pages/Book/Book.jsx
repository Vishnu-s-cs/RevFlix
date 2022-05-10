import React, { useState } from 'react'
import "./Book.css"
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import { Cancel,Done} from "@material-ui/icons";
import Select from '@mui/material/Select';
import { TextField,ButtonGroup,Button} from "@material-ui/core";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
function Book() {
    const [row,setRow]=useState('')
    const[col,setCol]=useState('');
    const[price,setPrice]=useState(0);
    const[category,setCat]=useState('');
    const[isReserved,setReserved]=useState(false)
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
        const seatNumber=row+col
        await axios.post("http://localhost:8800/api/seats/add/"+`${movie._id}`, {seatNumber,isReserved,price,category});
    // await login({ email, password }, dispatch);
       await alert('seat added succesfully');
      
  } catch (err) {console.log(err);}
};
 function reset (){
  setPrice(0);
  setCol('');
  setRow('');
  setCat('');
  setReserved(false);
}
const handleChange = (event) => {
  setReserved(event.target.value);
};
  return (
    <div className='main'>
        <div className='body'>
            <h1>Add Seats</h1>
            <div className="form">
    <FormControl>
        <TextField variant="outlined" value={row}  placeholder="row" color="primary" className="textField1"  onChange={(e) => setRow(e.target.value)}></TextField> 
        </FormControl><br />
        <FormControl>
        <TextField variant="outlined" value={col}  placeholder="column" color="primary" className="textField1"  onChange={(e) => setCol(e.target.value)}></TextField> 
        </FormControl><br />
        <FormControl>
        <TextField variant="outlined" value={price}  placeholder="price" color="primary" className="textField"  onChange={(e) => setPrice(e.target.value)}></TextField> 
        </FormControl><br />
        <FormControl>
        <TextField variant="outlined" value={category}  placeholder="Category" color="primary" className="textField"  onChange={(e) => setCat(e.target.value)}></TextField> 
        </FormControl><br />
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
      
        <InputLabel id="demo-simple-select-filled-label">Is Reserved</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={isReserved}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={true}>true</MenuItem>
          <MenuItem value={false}>false</MenuItem>
        </Select><br />
        <ButtonGroup className="button"  variant="contained">
    <Button
    startIcon={<Done/>}
           className="button1" onClick={()=>{addSeat(row,col,price,category,isReserved)}}>Add Seats</Button> 
       <Button
    startIcon={<Cancel/>}
        color="primary" onClick={()=>{reset()}}>Cancel</Button>
       </ButtonGroup>
      </FormControl>
    </div>
        </div>
    </div>
  )
}

export default Book