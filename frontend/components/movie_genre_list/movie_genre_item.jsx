import React from "react";

const MovieGenreItem = props => (
  <div className="tile">
    <div className="tile__media">
      <img className="tile__img" src={props.movie.photo} alt="" />
    </div>
    <div className="tile__details">
      <div className="tile__title">
        {props.movie.title} 
        <br></br>
        {props.movie.description}
      </div>
    </div>
  </div>
);

export default MovieGenreItem;
