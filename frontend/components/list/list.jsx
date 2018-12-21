import React from 'react';
import MovieItem from '../movie_genre_list/movie_item';

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
    return (
      <div>
        <div className="list-movies">
        {movies}
        </div>
      </div>
    );
  }
}

export default List;
