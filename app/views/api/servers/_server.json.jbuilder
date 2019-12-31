json.extract! server, :id, :name, :admin_id
json.joinedChannelIds current_user.joined_channels.where(server_id: server.id).ids.reverse
json.roles server.roles.each do |role|
  json.extract! role, :id, :name
end