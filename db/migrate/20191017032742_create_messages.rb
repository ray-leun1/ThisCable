class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.text :body, null: false
      t.integer :author_id
      t.integer :channel_id

      t.timestamps
    end

    add_index :messages, :body
    add_index :messages, :author_id
    add_index :messages, :channel_id
  end
end