import React from 'react';
import MovieItem from "../movie_genre_list/movie_item";

class Search extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMovies();
  }

  getQueryString() {
    return this.props.history.location.search.split("=")[1];


  }

  getMovies() {
    const movies = this.props.movies.map((movie) => {
      let lowerCaseTitle= (movie.title).toLowerCase();
      let lowerCaseGenre= (movie.genre).toLowerCase();
      if (lowerCaseTitle.includes(this.getQueryString().toLowerCase()) ||
        lowerCaseGenre.includes(this.getQueryString().toLowerCase())) {
        return (<MovieItem
          key={movie.title}
          movie={movie}
        />
        )
      }
    })
    return movies;
  }

  render() {
    
    if (this.props.movies.length === 0) return null;

    return <div>
        <div className="movie-search-results">
          <div className="row__inner_search ">
            {this.getMovies()}
          </div>
        </div>
      </div>;
  }
}

export default Search;
