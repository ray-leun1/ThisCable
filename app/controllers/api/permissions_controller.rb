class Api::PermissionsController < ApplicationController
  def create
    @permission = Permission.new(permission_params)
    @permission.save
  end

  def destroy
    @permission = Permission.find(permission_params)
    @permission.destroy
  end

  private
  def permission_params
    params.require('permission').permit(:role_id, :channel_id)
  end
end
