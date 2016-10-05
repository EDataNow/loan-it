class AddGroupFkToUsers < ActiveRecord::Migration[5.0]
  def change
  	add_foreign_key :users, :groups
  end
end
