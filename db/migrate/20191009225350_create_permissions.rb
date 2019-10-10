class CreatePermissions < ActiveRecord::Migration[5.2]
  def change
    create_table :permissions do |t|
      t.integer :role_id
      t.integer :channel_id

      t.timestamps
    end

    add_index :permissions, :role_id
    add_index :permissions, :channel_id
  end
end
