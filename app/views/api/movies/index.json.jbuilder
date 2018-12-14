@movies.each do |currmovie|
  json.set! currmovie.id do 
    json.partial! 'api/movies/movie', movie: currmovie
  end
end