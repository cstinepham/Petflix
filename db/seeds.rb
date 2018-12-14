# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(email: 'demo@email.com', username: "Demo", password: "password")


Movie.create!(title: "Star Paws", descrption: "description placeholder lala", 
              rating: "PG-13", year: 1989)
Movie.create!(title: "50 Shades of Greyhound", descrption: "description placeholder lala", 
              rating: "PG-13", year: 1989)
Movie.create!(title: "Jurassic Bark", descrption: "description placeholder lala", 
              rating: "PG-13", year: 1989)
Movie.create!(title: "The Good The Bad and The Pugly", descrption: "description placeholder lala", 
              rating: "PG-13", year: 1989)
Movie.create!(title: "The Sound of Meowsic", descrption: "description placeholder lala", 
              rating: "PG-13", year: 1989)
Movie.create!(title: "The Great Catzby", descrption: "description placeholder lala", 
              rating: "PG-13", year: 1989)
Movie.create!(title: "Kitty Kitty Bang Bang", descrption: "description placeholder lala", 
              rating: "PG-13", year: 1989)
Movie.create!(title: "Meowcolm X", descrption: "description placeholder lala", 
              rating: "PG-13", year: 1989)