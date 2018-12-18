import {connect} from 'react-redux';
import SearchBar from './search_bar';
import {fetchMovies} from '../../actions/movie_actions';
import {withRouter} from 'react-router-dom';

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar))