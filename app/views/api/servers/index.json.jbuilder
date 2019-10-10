@servers.each do |server|
  json.set! server.id do
    json.extract! :id, :name
  end
end