json.extract! user, :id, :username, :email
json.profile_img url_for(user.profile_img) if user.photo.attached?
json.joinedServerIds user.server_ids