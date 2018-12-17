import React from 'react';
import NavBar from '../navbar/navbar';
import MainMovieItem from "./main_movie_item";
import MovieGenreListContainer from "../movie_genre_list/movie_genre_list_container";


class Browse extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout();
  }

  componentDidMount() {
    
    this.props.fetchMovies();

  }

  render() {
    
    if (this.props.movies.length === 0) return null;

    return <div>
        <NavBar />
        <button onClick={this.handleSubmit}>Logout</button>
        <MainMovieItem movie={this.props.movies[0]} />
        <div className="genre-text">Ruff Days</div>
        <MovieGenreListContainer genre={"dog"} />
        <div className="genre-text">Cattitude</div>
        <MovieGenreListContainer genre={"cat"} />
        <div className="genre-text">Action</div>
      <MovieGenreListContainer />
        <div className="genre-text">Comedy</div>
      <MovieGenreListContainer />
      </div>;
  };
}

export default Browse;
