import React from "react";
import { Link } from "react-router-dom";
const MovieGenreItem = props => (
  <div className="tile">
    <div className="tile__media">
      <img className="tile__img" src={props.movie.photo} alt="" />
    </div>
      <Link to={`/watch/${props.movie.id}`}>
        <div className="tile__details">
          <div className="tile__title">
            {props.movie.title} 
            <br></br>
            {props.movie.description}
          </div>
        </div>
      </Link>
  </div>
);

export default MovieGenreItem;
