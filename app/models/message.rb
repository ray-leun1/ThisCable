class Message < ApplicationRecord
  validates :body, presence: true

  belongs_to :user, class_name: :User, foreign_key: :author_id
  belongs_to :channel
end