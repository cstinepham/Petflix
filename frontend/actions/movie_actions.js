import * as MovieAPIUtil from '../util/movies_api_util';

export const RECEIVE_ALL_MOVIES = 'RECEIVE_ALL_MOVIES';
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';

export const receiveMovies = (movies) => ({
  type: RECEIVE_ALL_MOVIES,
  movies
});


export const receiveMovie = (movie) => ({
  type: RECEIVE_MOVIE,
  movie
});

export const fetchMovie = id => dispatch => (
  MovieAPIUtil.fetchMovie(id)
  .then(movie => dispatch(receiveMovie(movie)))
);

export const fetchMovies = () => dispatch => (
  MovieAPIUtil.fetchMovies()
  .then(movies => dispatch(receiveMovies(movies)))
);

