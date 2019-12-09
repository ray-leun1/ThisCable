class ChangeIndexOnMemberships < ActiveRecord::Migration[5.2]
  def change
    remove_index :memberships, :user_id
    remove_index :memberships, :server_id
    add_index :memberships, [:user_id, :server_id], unique: true
  end
end
