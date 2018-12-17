import {connect} from 'react-redux';
import MovieGenreList from './movie_genre_list';
import {fetchMovies} from '../../actions/movie_actions';
import {selectMoviesByGenre} from '../../reducers/selectors'

const mapStateToProps = (state, ownProps) => {
  let movies = Object.values(state.entities.movies);
  return ({
    movies: selectMoviesByGenre(movies, ownProps.genre)
  })
};


const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: (genre) => dispatch(fetchMovies(genre))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieGenreList)