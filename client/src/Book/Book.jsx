import "./Book.scss";
import Navbar from "../components/navbar/Navbar";
import { Link, useLocation } from "react-router-dom";
export default function Book(){
    const location = useLocation();
  const movie = location.movie;
   return( 
     <div className="main">
         <Navbar></Navbar>
    <div className="featured">
      <img src={movie.img} alt="" />
      <div className="info">
        <img src={movie.imgTitle} alt="" />
        <span className="desc">{movie.desc}</span>
        <h4>Rating</h4>
      </div>
     
      <div>
       
      </div>
    </div>
    </div>
   )
}
