json.extract! movie, :id, :title, :description, :rating, :year
json.photo url_for(movie.photo)
json.video url_for(movie.video)

