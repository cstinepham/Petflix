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

#####################        DOGS         #####################################

dog1 = Movie.create!(title: "Pup Fiction", description: "The lives of a dog, a leash, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.", 
              rating: "PG", year: 1994, genre: "dog")
photo_file1 = open('https://s3-us-west-1.amazonaws.com/petflix-public/dog1-photo.png')
video_file1 = open('https://s3-us-west-1.amazonaws.com/petflix-public/dog1.mp4')
dog1.photo.attach(io: photo_file1, filename: 'dog-movie1-photo.png')
dog1.video.attach(io: video_file1, filename: 'dog-movie1-video.mp4')

dog2 = Movie.create!(title: "Paw and Order", description: "Adventures with a police pup and his boat - Will he keep the waters safe?", 
              rating: "PG", year: 2012, genre: "dog")
photo_file2 = open('https://s3-us-west-1.amazonaws.com/petflix-public/dog2-thumb.png')
video_file2 = open('https://s3-us-west-1.amazonaws.com/petflix-public/dog2.mp4')
dog2.photo.attach(io: photo_file2, filename: 'dog-movie2-photo.png')
dog2.video.attach(io: video_file2, filename: 'dog-movie2-video.mp4')


dog3 = Movie.create!(title: "The Fast and the Furrious", description: "Doggy Diesel enjoys the adrenaline of llegal racing, street heists, and espionage.", 
              rating: "PG", year: 2012, genre: "dog")
photo_file3 = open('https://s3-us-west-1.amazonaws.com/petflix-public/dog3-thumb.png')
video_file3 = open('https://s3-us-west-1.amazonaws.com/petflix-public/dog3.mp4')
dog3.photo.attach(io: photo_file3, filename: 'dog-movie3-photo.png')
dog3.video.attach(io: video_file3, filename: 'dog-movie3-video.mp4')


# #####################        CATS         #####################################

cat1 = Movie.create!(title: "The Great Catzby", description: "Nick Cattaway becomes curious about his neighbor after being invited to one of his famous parties.", 
              rating: "PG", year: 2010, genre: "cat")
photo_file1 = open('https://s3-us-west-1.amazonaws.com/petflix-public/cat1-thumb.png')
video_file1 = open('https://s3-us-west-1.amazonaws.com/petflix-public/cat1.mp4')
cat1.photo.attach(io: photo_file1, filename: 'cat-movie1-photo.png')
cat1.video.attach(io: video_file1, filename: 'cat-movie1-video.mp4')

cat2 = Movie.create!(title: "Catman Begins", description: "Bruce returns to Gotham intent on fighting crime.", 
              rating: "PG", year: 2012, genre: "cat")
photo_file2 = open('https://s3-us-west-1.amazonaws.com/petflix-public/cat2-thumb.png')
video_file2 = open('https://s3-us-west-1.amazonaws.com/petflix-public/cat2.mp4')
cat2.photo.attach(io: photo_file2, filename: 'cat-movie2-photo.png')
cat2.video.attach(io: video_file2, filename: 'cat-movie2-video.mp4')

cat3 = Movie.create!(title: "Catception", description: "Carl always had an itch - Is he cat? Or is he doll?", 
              rating: "PG", year: 2012, genre: "cat")
photo_file3 = open('https://s3-us-west-1.amazonaws.com/petflix-public/cat3-thumb.png')
video_file3 = open('https://s3-us-west-1.amazonaws.com/petflix-public/cat3.mp4')
cat3.photo.attach(io: photo_file3, filename: 'cat-movie3-photo.png')
cat3.video.attach(io: video_file3, filename: 'cat-movie3-video.mp4')

