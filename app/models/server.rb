class Server < ApplicationRecord
  validates :name, presence: true
  
  belongs_to :user, class_name: :User, foreign_key: :admin_id
  has_many :memberships, :dependent => :destroy
  has_many :users, through: :memberships, source: :user
  has_many :channels, :dependent => :destroy
  has_many :roles, :dependent => :destroy

  def assoc_create
    Membership.create(user_id: admin_id, server_id: id)
    channel = Channel.create(name: 'General', server_id: id)
    role_admin = Role.create(name: 'admin', server_id: id)
    role_user = Role.create(name: 'user', server_id: id)
    Permission.create(role_id: role_admin.id, channel_id: channel.id)
    Permission.create(role_id: role_user.id, channel_id: channel.id)
    UserRole.create(user_id: admin_id, role_id: role_admin.id)
  end
end
