class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password])
    
    if @user
      log_in(@user)
      render json: current_user
    else
      render json: ['Invalid parameters'], status: 401
    end
  end

  def destroy
    ensure_logged_in
    if logged_in?
      log_out
      render json: {}
    else
      render json: ['No current_user'], status: 404
    end
  end
end
