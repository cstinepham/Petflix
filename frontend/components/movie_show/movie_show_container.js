import {connect} from 'react-redux';
import MovieShow from './movie_show';
import {fetchMovie} from '../../actions/movie_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  
  let movieId = ownProps.match.params.movieId;
  let movie = state.entities.movies[movieId];
  
  return ({
    movie: movie
  });
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchMovie: (id) => dispatch(fetchMovie(id))
  })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieShow))