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
movie1 = Movie.create!(title: "The Sound of Meowsic", description: "sound of meowsic description placeholder lala", 
              rating: "PG", year: 1989)
photo_file = EzDownload.open('https://s3-us-west-1.amazonaws.com/petflix-dev/catsworldphoto.png')
video_file = EzDownload.open('https://s3-us-west-1.amazonaws.com/petflix-dev/cats_world_hd_stock_video.mp4')
movie1.photo.attach(io: photo_file, filename: 'movie1-photo.png')
movie1.video.attach(io: video_file, filename: 'movie1-video.mp4')


movie2 = Movie.create!(title: "Star Paws", description: "star paws description placeholder weeh", 
              rating: "PG-13", year: 1992)
photo_file = EzDownload.open('https://s3-us-west-1.amazonaws.com/petflix-dev/catsworldphoto.png')
video_file = EzDownload.open('https://s3-us-west-1.amazonaws.com/petflix-dev/cats_world_hd_stock_video.mp4')
movie2.photo.attach(io: photo_file, filename: 'movie2-photo.png')
movie2.video.attach(io: video_file, filename: 'movie2-video.mp4')





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

 