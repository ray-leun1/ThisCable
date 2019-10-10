class Server < ApplicationRecord
  validates :name, presence: true
  
  belongs_to :user, class_name: :User, foreign_key: :admin_id
  has_many :memberships
  has_many :users, through: :memberships, source: :user
  has_many :channels
  has_many :roles
end
