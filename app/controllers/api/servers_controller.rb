class Api::ServersController < ApplicationController
  before_action :ensure_logged_in

  def index
    @servers = current_user.servers
    render :index
  end

  def show
    @server = Server.find(params[:id])

    if @server
      render :show
    else
      render json: ['Server does not exist'], status: 404
    end
  end

  def create
    @server = Server.new(server_params)

    if @server.save
      render :show
    else
      
    end
  end

  def update

  end

  def destroy

  end

  private
  def server_params
    params.require(:server).permit(:name)
  end
end
