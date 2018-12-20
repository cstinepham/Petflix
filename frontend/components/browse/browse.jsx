import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import MainMovieItem from "./main_movie_item";
import MovieGenreListContainer from "../movie_genre_list/movie_genre_list_container";


class Browse extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    
    if (this.props.movies.length === 0) return null;

    return <div className="browse-overall">
        <MainMovieItem movie={this.props.movies[0]} />

        <div className="genre-text">Ruff Thrillers</div>
        <MovieGenreListContainer genre={"Ruff Thrillers"} />
        <div className="genre-text">Catastrophic Dramas</div>
        <MovieGenreListContainer genre={"Catastrophic Dramas"} />
        <div className="genre-text">Trending</div>
        <MovieGenreListContainer genre={"trending"} />
        <div className="genre-text">Reptile Romance</div>
        <MovieGenreListContainer genre={"Reptile Romance"} />
      </div>;
  };
}

export default Browse;
