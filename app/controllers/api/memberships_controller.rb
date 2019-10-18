class Api::MembershipsController < ApplicationController
  def create
    @membership = Membership.new(membership_params)

    if @membership.save
      @membership.assoc_create
      @user = current_user
      render 'api/users/show'
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end

  def destroy
    @membership = Membership.find_by(user_id: current_user.id, server_id: params[:server_id])
    @membership.assoc_destroy
    @membership.destroy

    @user = current_user
    render 'api/users/show'
  end

  private
  def membership_params
    params.require(:membership).permit(:user_id, :server_id)
  end
end
