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
      </div>
      <div>
<<<<<<< HEAD
        
=======
        <h4>Review</h4>
>>>>>>> d33451b91b1827504f45dfdc909d9f1e89034449
      </div>
    </div>
    </div>
   )
}
