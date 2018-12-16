# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#https://www.talkphotography.co.uk/threads/dog-film-title-puns.591593/
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
User.create!(email: 'demo@email.com', username: "Demo", password: "password")

Movie.destroy_all
dog1 = Movie.create!(title: "Pup Fiction", description: "pup fiction description placeholder lala", 
              rating: "PG", year: 1989)
photo_file = open('https://s3-us-west-1.amazonaws.com/petflix-public/dog1-photo.png')
video_file = open('https://s3-us-west-1.amazonaws.com/petflix-public/dog1.mp4')
dog1.photo.attach(io: photo_file, filename: 'movie1-photo.png')
dog1.video.attach(io: video_file, filename: 'movie1-video.mp4')




# movie2 = Movie.create!(title: "Star Paws", description: "description placeholder lala", 
#               rating: "PG-13", year: 1989)
# movie3 = Movie.create!(title: "Pup Fiction", description: "description placeholder lala", 
#               rating: "R", year: 1989)
# movie4 =Movie.create!(title: "The Good, The Bad, and The Pugly", description: "description placeholder lala", 
#               rating: "R", year: 1989)





# track2 = Track.new(title: 'Talk To me', artist_id: artist1.id)
#  file = EzDownload.open('https://s3.amazonaws.com/sonorise-dev/02+Talk+to+Me.mp3')
#  track2.audio.attach(io: file, filename: '02_Talk_to_Me.mp3')
#  track2.save!

 