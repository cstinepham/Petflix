export const selectMoviesByGenre = (movies, genre) => {
  return movies.filter(movie => movie.genre === genre);
}