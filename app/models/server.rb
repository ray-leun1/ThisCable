class Server < ApplicationRecord
  validates :name, presence: true
  
  belongs_to :user, class_name: :User, foreign_key: :admin_id
  has_many :memberships, :dependent => :destroy
  has_many :users, through: :memberships, source: :user
  has_many :channels, :dependent => :destroy
  has_many :roles, :dependent => :destroy
end
