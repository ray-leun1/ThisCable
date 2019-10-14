json.extract! server, :id, :name, :admin_id
json.joinedChannelIds current_user.joined_channels.where(server_id: server.id)