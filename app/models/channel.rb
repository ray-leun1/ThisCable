class Channel < ApplicationRecord
  validates :name, presence: true

  belongs_to :server
  has_many :messages
  has_many :permissions, :dependent => :destroy
  has_many :roles, through: :permissions, source: :role
  has_many :permitted_users, through: :roles, source: :users

  def assoc_create
    roles = Role.where(server_id: server_id)
    roles.each { |role| Permission.create(role_id: role.id, channel_id: id)}
  end
end
