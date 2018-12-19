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
  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User
  
  
end
