import React from "react";

const MainMovieItem = props => (
  <div>
    <h1>{props.movie.title}</h1>

    <div className="main-movie">
      <div className="main-movie-thumb" />
      <button className="play-main-movie">Play</button>
      <button className="list-main-movie">My List</button>
    </div>
  </div>
);

export default MainMovieItem;


