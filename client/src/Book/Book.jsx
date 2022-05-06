import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import Navbar from '../components/navbar/Navbar'
import './Book.scss'
function Book() {
 const [email,setEmail]=useState('')
  return (
      <div className='main'>
        <Navbar></Navbar>
        <div className='form'>
    <TextField placeholder='Email' type='email' onChange={(e) => setEmail(e.target.value)}></TextField>
    </div>
    </div>
  )
}

export default Book