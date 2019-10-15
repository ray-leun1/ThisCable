class Role < ApplicationRecord
  validates :name, presence: true

  belongs_to :server
  has_many :permissions, :dependent => :destroy
  has_many :channels, through: :permissions, source: :channel
  has_many :user_roles, :dependent => :destroy
  has_many :users, through: :user_roles, source: :user
end
