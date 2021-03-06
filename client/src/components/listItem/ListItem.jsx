import "./listItem.scss";
import {
  PlayArrow,
  InfoOutlined,
  LocalActivityOutlined,
} from "@material-ui/icons";
// import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
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
  }, [item]);
  return (
   
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie?.imgSm} alt="" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} muted loop />
            <div className="itemInfo">
              <div className="icons">
                <Link to={{ pathname: "/watch", movie: movie }} className="link">
                <PlayArrow className="icon" /></Link>
                <Link to={{ pathname: "/review", movie: movie }} className="link">
                < InfoOutlined className="icon" /> 
                </Link>
                {/* <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" /> */}
              <Link to={{ pathname: "/Book", movie: movie }} className="link">  <LocalActivityOutlined/></Link>
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
   
  );
}
