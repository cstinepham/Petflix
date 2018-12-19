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

require 'test_helper'

class ListItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
