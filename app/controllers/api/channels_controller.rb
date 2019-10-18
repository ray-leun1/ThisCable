class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.where(server_id: params[:server_id])
    render :index
  end

  def show
    @channel = Channel.find(params[:id])
    render :show
  end

  def create
    @channel = Channel.new(channel_params)
    @channel.name = @channel.name.split.join('-')
    @channel.server_id = params[:server_id]

    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def update
    @channel = Channel.find(params[:id])
    @channel.name = @channel.name.split.join('-')

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
