import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../navbar/navbar";

const MainMovieItem = props =>  {
  if (props.movie === undefined) return null;

  return <div>
      <div className="main-movie">
        
        <div className="main-movie-thumb" />
        
   
        <div className="pup-fiction-text">Pup Fiction</div>
        <Link className="play-main-movie" to={`/watch/${props.movie.id}`}>
          ▶ Play
        </Link>
        <Link className="list-main-movie" to="/browse">
          + My List
        </Link>
      </div>
    </div>;
};

export default MainMovieItem;


