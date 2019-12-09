@roles.each do |role|
  json.set! role.id do
    json.extract! role, :id, :name
  end
end