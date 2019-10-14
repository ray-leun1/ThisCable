class Channel < ApplicationRecord
  validates :name, presence: true

  belongs_to :server
  has_many :permissions
  has_many :roles, through: :permissions, source: :role
  has_many :permitted_users, through: :roles, source: :users
end
