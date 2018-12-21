export const selectMoviesByGenre = (movies, genre) => {
  return movies.filter(movie => movie.genre === genre);
}


export const selectListItemsByList = (listItems, list) => {
  return listItems.filter(item => item.list_id === list.id);
}

export const selectMoviesByListItems = (movies, listItems) => {
  let movieIds = [];
  listItems.forEach(item => movieIds.push(item.movie_id));
  
  let movieResults = [];
  movies.forEach(movie => {
    if (movieIds.includes(movie.id)) {
      movieResults.push(movie);
    }
  })
  return movieResults;
}