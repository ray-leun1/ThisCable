class Membership < ApplicationRecord
  belongs_to :user
  belongs_to :server

  def assoc_create
    role_user = Role.where(name: 'user', server_id: server_id)[0]
    UserRole.create(user_id: user_id, role_id: role_user.id)
  end
end