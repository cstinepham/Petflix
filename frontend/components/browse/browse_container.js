import {connect} from "react-redux";
import Browse from "./browse";
import {fetchMovies} from '../../actions/movie_actions';
import {logout} from '../../actions/session_actions';


const mapStateToProps = (state) => {
  let movies = Object.values(state.entities.movies);
  return {
    movies: movies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
