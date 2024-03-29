// import { ArrowBackOutlined } from "@material-ui/icons";
// import YouTube from 'react-youtube';
// import { Link, useLocation } from "react-router-dom";
// import "./watch.scss";

// export default function Watch() {
//   const opts = {
//     playerVars: {
//       // https://developers.google.com/youtube/player_parameters
//       autoplay: 1,
//     },
//   };
//   const location = useLocation();
//   const movie = location.movie;
//   return (
//     <div className="watch">
//       <Link to="/">
//         <div className="back">
//           <ArrowBackOutlined />
//           Home
//         </div>
//       </Link>
//       {/* <video className="video" autoPlay progress controls src={movie.video} /> */}
//       <YouTube className="video" videoId="2g811Eo7K8U" opts={opts}/>
//     </div>
//   );
// }
import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";
import React, { useRef, useEffect } from 'react';
import ShakaPlayer from 'shaka-player-react';

export default function Watch() {
  
  const location = useLocation();
  const movie = location.movie;
  // const controllerRef = useRef(null);

  // useEffect(() => {
  //   const {
  //     /** @type {shaka.Player} */ player,
  //     /** @type {shaka.ui.Overlay} */ ui,
  //     /** @type {HTMLVideoElement} */ videoElement
  //   } = controllerRef.current;

  //   async function loadAsset() {
  //     // Load an asset.
  //     await player.load(movie.video);

  //     // Trigger play.
  //     videoElement.play();
  //   }

  //   loadAsset();
  // }, []);
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src={movie.video} />
      {/* <ShakaPlayer autoPlay src={movie.video} />; */}
    </div>
  );
}