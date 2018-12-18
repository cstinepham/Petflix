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

dog1 = Movie.create!(title: "Pup Fiction", description: "The lives of a dog and a leash intertwine in four tales of violence and redemption.", 
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


dog3 = Movie.create!(title: "Fast and the Furrious", description: "Doggy Diesel enjoys the adrenaline of llegal racing, street heists, and espionage.", 
              rating: "PG", year: 2011, genre: "dog")
photo_file3 = open('https://s3-us-west-1.amazonaws.com/petflix-public/dog3-thumb.png')
video_file3 = open('https://s3-us-west-1.amazonaws.com/petflix-public/dog3.mp4')
dog3.photo.attach(io: photo_file3, filename: 'dog-movie3-photo.png')
dog3.video.attach(io: video_file3, filename: 'dog-movie3-video.mp4')

dog4 = Movie.create!(title: "Jurassic Bark III", description: "Things go wrong with a disastrous attempt to create a forest park of cloned dogs.", 
              rating: "PG-13", year: 2018, genre: "dog")
photo_file4 = open('https://s3-us-west-1.amazonaws.com/petflix-public/dog4-thumb.png')
video_file4 = open('https://s3-us-west-1.amazonaws.com/petflix-public/dog4.mp4')
dog4.photo.attach(io: photo_file4, filename: 'dog-movie4-photo.png')
dog4.video.attach(io: video_file4, filename: 'dog-movie4-video.mp4')


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
              rating: "PG", year: 2016, genre: "cat")
photo_file3 = open('https://s3-us-west-1.amazonaws.com/petflix-public/cat3-thumb.png')
video_file3 = open('https://s3-us-west-1.amazonaws.com/petflix-public/cat3.mp4')
cat3.photo.attach(io: photo_file3, filename: 'cat-movie3-photo.png')
cat3.video.attach(io: video_file3, filename: 'cat-movie3-video.mp4')

cat4 = Movie.create!(title: "The Sound of Meowsic", description: "A silent musical for the sleeping.", 
              rating: "PG", year: 2007, genre: "cat")
photo_file4 = open('https://s3-us-west-1.amazonaws.com/petflix-public/cat4-thumb.png')
video_file4 = open('https://s3-us-west-1.amazonaws.com/petflix-public/cat4.mp4')
cat4.photo.attach(io: photo_file4, filename: 'cat-movie4-photo.png')
cat4.video.attach(io: video_file4, filename: 'cat-movie4-video.mp4')

# #####################        REPTILES         #####################################

reptile1 = Movie.create!(title: "Sssilent Night", description: "A journey of a sneaky hunt for the right meal.", 
              rating: "R", year: 2010, genre: "reptile")
photo_file1 = open('https://s3-us-west-1.amazonaws.com/petflix-public/reptile1-thumb.png')
video_file1 = open('https://s3-us-west-1.amazonaws.com/petflix-public/reptile1.mp4')
reptile1.photo.attach(io: photo_file1, filename: 'reptile-movie1-photo.png')
reptile1.video.attach(io: video_file1, filename: 'reptile-movie1-video.mp4')

reptile2 = Movie.create!(title: "Snakes on a Submarine", description: "It all goes wrong when they go for a dive.", 
              rating: "R", year: 2017, genre: "reptile")
photo_file2 = open('https://s3-us-west-1.amazonaws.com/petflix-public/reptile2-thumb.png')
video_file2 = open('https://s3-us-west-1.amazonaws.com/petflix-public/reptile2.mp4')
reptile2.photo.attach(io: photo_file2, filename: 'reptile-movie2-photo.png')
reptile2.video.attach(io: video_file2, filename: 'reptile-movie2-video.mp4')

reptile3 = Movie.create!(title: "Godzilla's Little Brother", description: "Small body. Big goals. Lizardzilla reunites with his family.", 
              rating: "PG-13", year: 2009, genre: "reptile")
photo_file3 = open('https://s3-us-west-1.amazonaws.com/petflix-public/reptile3-thumb.png')
video_file3 = open('https://s3-us-west-1.amazonaws.com/petflix-public/reptile3.mp4')
reptile3.photo.attach(io: photo_file3, filename: 'reptile-movie3-photo.png')
reptile3.video.attach(io: video_file3, filename: 'reptile-movie3-video.mp4')

reptile4 = Movie.create!(title: "Godzilla's Big Brother", description: "Big body. Small goals. Dinozilla reunites with a tiny human.", 
              rating: "PG-13", year: 2018, genre: "reptile")
photo_file4 = open('https://s3-us-west-1.amazonaws.com/petflix-public/reptile4-thumb.png')
video_file4 = open('https://s3-us-west-1.amazonaws.com/petflix-public/reptile4.mp4')
reptile4.photo.attach(io: photo_file4, filename: 'reptile-movie4-photo.png')
reptile4.video.attach(io: video_file4, filename: 'reptile-movie4-video.mp4')


#####################        TRENDING NOW         #####################################

trending1 = Movie.create!(title: "Seal of Approval", description: "Navy special operation forces go East to save a lost pup.", 
              rating: "PG-13", year: 2018, genre: "trending")
photo_file1 = open('https://s3-us-west-1.amazonaws.com/petflix-public/misc1-thumb.png')
video_file1 = open('https://s3-us-west-1.amazonaws.com/petflix-public/misc1.mp4')
trending1.photo.attach(io: photo_file1, filename: 'misc-movie1-photo.png')
trending1.video.attach(io: video_file1, filename: 'misc-movie1-video.mp4')

trending2 = Movie.create!(title: "Clockwork Banana", description: "A juvenile monkey undergoes psychological rehabilitation for his aberrant behaviour.", 
              rating: "R", year: 2018, genre: "trending")
photo_file2 = open('https://s3-us-west-1.amazonaws.com/petflix-public/misc2-thumb.png')
video_file2 = open('https://s3-us-west-1.amazonaws.com/petflix-public/misc2.mp4')
trending2.photo.attach(io: photo_file2, filename: 'misc-movie2-photo.png')
trending2.video.attach(io: video_file2, filename: 'misc-movie2-video.mp4')

trending3 = Movie.create!(title: "Lady Bird", description: "Birdion McBirdy works tirelessly to keep her family afloat.", 
              rating: "R", year: 2017, genre: "trending")
photo_file3 = open('https://s3-us-west-1.amazonaws.com/petflix-public/misc3-thumb.png')
video_file3 = open('https://s3-us-west-1.amazonaws.com/petflix-public/misc3.mp4')
trending3.photo.attach(io: photo_file3, filename: 'misc-movie3-photo.png')
trending3.video.attach(io: video_file3, filename: 'misc-movie3-video.mp4')


trending4 = Movie.create!(title: "Sonic Meets Reality", description: "Game character Sonic gets tired of always being the fast guy.", 
              rating: "R", year: 2011, genre: "trending")
photo_file4 = open('https://s3-us-west-1.amazonaws.com/petflix-public/misc4-thumb.png')
video_file4 = open('https://s3-us-west-1.amazonaws.com/petflix-public/misc4.mp4')
trending4.photo.attach(io: photo_file4, filename: 'misc-movie4-photo.png')
trending4.video.attach(io: video_file4, filename: 'misc-movie4-video.mp4')