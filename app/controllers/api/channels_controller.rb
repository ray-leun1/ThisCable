class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.all.where(server_id: params[:serverId])
    render :index
  end

  def show
    @channel = current_user.joined_channels.find(params[:id])
    render :show
  end

  def create
    @channel = Channel.new(channel_params)
    @channel.server_id = params[:serverId]

    if @channel.save

      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def update
    @channel = Channel.find(params[:id])

    if @channel.update(channel_params)
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def destroy
    @channel = Channel.find(params[:id])
    @channel.destroy

    render :show
  end

  private
  def channel_params
    params.require(:channel).permit(:name)
  end
end
