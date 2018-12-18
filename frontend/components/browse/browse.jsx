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

        <div className="genre-text">Rufffff Thrillers</div>
        <MovieGenreListContainer genre={"dog"} />
        <div className="genre-text">Catastrophic Dramas</div>
        <MovieGenreListContainer genre={"cat"} />
        <div className="genre-text">Trending</div>
        <MovieGenreListContainer genre={"trending"} />
        <div className="genre-text">Reptilic Romance</div>
      <MovieGenreListContainer genre={"reptile"} />
      </div>;
  };
}

export default Browse;
