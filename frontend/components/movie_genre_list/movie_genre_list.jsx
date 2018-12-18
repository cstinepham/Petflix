import React from 'react';
import MovieGenreItem from './movie_genre_item';


class MovieGenreList extends React.Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
   
  }

  render() {
    let movies = this.props.movies.map(movie => {
      return(
        <MovieGenreItem movie={movie} key={movie.title}/>
      );
    })
    return (
      <div>

        <div className="contain">
          <div className="row">
            <div className="row__inner">
            {movies}
            </div>
          </div>
        </div>

      
      </div>
    );
  }
}

export default MovieGenreList;
