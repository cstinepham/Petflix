# == Schema Information
#
# Table name: lists
#
#  id         :bigint(8)        not null, primary key
#  title      :string
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class List < ApplicationRecord
  
  has_many :list_items,
  foreign_key: :list_id,
  class_name: :ListItem

  has_many :movies,
  through: :list_items,
  source: :movie
  
  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  
  
  
end
