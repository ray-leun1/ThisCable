json.extract! user, :id, :username, :email
if user.profile_img.attached?
  json.profile_img user.profile_img
  json.profile_img_url url_for(user.profile_img)
end
json.joinedServerIds user.server_ids