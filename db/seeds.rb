# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
User.create!(email: 'demo@email.com', username: "Demo", password: "password")

Movie.destroy_all
Movie.create!(title: "Star Paws", description: "description placeholder lala", 
              rating: "PG-13", year: 1989)
