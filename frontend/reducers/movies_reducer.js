import { RECEIVE_ALL_MOVIES, RECEIVE_MOVIE} from '../actions/movie_actions';


const moviesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_MOVIES:
      return action.movies;
    case RECEIVE_MOVIE:
      return action.movie;
    default:
      return oldState;
  }
};

export default moviesReducer;
