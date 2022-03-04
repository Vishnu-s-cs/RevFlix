import React from 'react'
import { Redirect } from 'react-router-dom'
function Success() {
  return (
    <div><button style={{border:"none",width:120,borderRadius:5,padding:"20px",
    backgroundColor:"black",color:"white",fontWeight:"600",cursor:"pointer"}} onClick={<Redirect to="/login"/>}>Back to login</button></div>
  )
}

export default Success