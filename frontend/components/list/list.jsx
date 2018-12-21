import React from 'react';
import MovieItem from '../movie_genre_list/movie_item';
import { Link } from "react-router-dom";

class List extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchList(this.props.match.params.listId);
    this.props.fetchMovies();
    this.props.fetchListItems();
  }



  render() {
    let movies = this.props.movies.map(movie => {
      return <MovieItem movie={movie} key={movie.title} />;
    })

    if (this.props.list === undefined) return null;

    return (
      <div>
        <Link to='/lists'>
          <div className="back-button-list" />
        </Link>
        <div className="my-lists">{this.props.list.title}</div>
        <div className="list-movies">
          {movies}
        </div>
      </div>
    );
  }
}

export default List;
