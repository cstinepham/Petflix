# == Schema Information
#
# Table name: list_items
#
#  id         :bigint(8)        not null, primary key
#  list_id    :integer          not null
#  movie_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ListItem < ApplicationRecord
  belongs_to :list,
  foreign_key: :list_id,
  class_name: :List

  belongs_to :movie,
  foreign_key: :movie_id,
  class_name: :Movie


end
