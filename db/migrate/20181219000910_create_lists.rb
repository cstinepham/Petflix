class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.string :title
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :lists, :user_id

  end
end
