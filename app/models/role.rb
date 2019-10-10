class Role < ApplicationRecord
  validates :name, presence: true

  belongs_to :server
  has_many :permissions
  has_many :channels, through: :permissions, source: :channel
  has_many :user_roles
  has_many :users, through: :user_roles, source: :user
end
