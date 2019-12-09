class Api::RolesController < ApplicationController
  def index
    @roles = Role.all.where(server_id: params[:serverId])
    render :index
  end

  # def show
  #   @role = Role.find(params[:id])
  #   render :show
  # end

  def create
    @role = Role.new(role_params)
    @role.server_id = params[:serverId]

    if @role.save

      render :show
    else
      render json: @role.errors.full_messages, status: 422
    end
  end

  # def update
  #   @role = Role.find(params[:id])

  #   if @role.update(role_params)
  #     render :show
  #   else
  #     render json: @role.errors.full_messages, status: 422
  #   end
  # end

  def destroy
    @role = Role.find(params[:id])
    @role.destroy

    render :show
  end

  private
  def role_params
    params.require(:role).permit(:name)
  end
end
