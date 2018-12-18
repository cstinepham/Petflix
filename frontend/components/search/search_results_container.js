import {connect} from 'react-redux';
import SearchResults from './search_results';
import {fetchMovies} from '../../actions/movie_actions';


const mapStateToProps = (state) => {
  let movies = Object.values(state.entities.movies);
  return {
    movies: movies
  };
};


const mapDispatchToProps = dispatch => {
  return {
   fetchMovies: () => dispatch(fetchMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)