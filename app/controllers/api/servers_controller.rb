class Api::ServersController < ApplicationController
  def index
    @servers = Server.all
    render :index
  end

  def show
    @server = current_user.servers.find(params[:id])
    render :show
  end

  def create
    @server = Server.new(server_params)
    @server.admin_id = current_user.id

    if @server.save
      Membership.create(user_id: current_user.id, server_id: @server.id)
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def update
    @server = current_user.servers.find(params[:id])

    if @server.update(server_params)
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def destroy
    @server = current_user.servers.find(params[:id])
    @server.destroy

    render :show
  end

  private
  def server_params
    params.require(:server).permit(:name)
  end
end
