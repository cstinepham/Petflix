export const fetchMovies = () => (
  $.ajax({
    url: '/api/movies'
  })
);

export const fetchMovie = id => (
  $.ajax({
    url: `/api/movies/${id}`
  })
);