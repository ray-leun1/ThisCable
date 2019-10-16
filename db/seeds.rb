# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([
  {email: 'testEmail@cord.com', username: 'testUser', password: 'password'},
  {email: 'fakeEmail@cord.com', username: 'testUser', password: 'hunter12'}
])

Server.create([
  {name: 'testServer0', admin_id: 1},
  {name: 'testServer1', admin_id: 1},
  {name: 'testServer2', admin_id: 2}
])

Membership.create([
  {user_id: 1, server_id: 1},
  {user_id: 2, server_id: 1},
  {user_id: 2, server_id: 2}
])

Channel.create([
  {name: 'testChannel00', server_id: 1},
  {name: 'testChannel01', server_id: 1},
  {name: 'testChannel10', server_id: 2},
  {name: 'testChannel11', server_id: 2},
  {name: 'testChannel12', server_id: 2},
  {name: 'testChannel20', server_id: 3}
])

Role.create([
  {name: 'admin', server_id: 1},
  {name: 'user', server_id: 1},
  {name: 'admin', server_id: 2},
  {name: 'user', server_id: 2},
  {name: 'admin', server_id: 3},
  {name: 'user', server_id: 3},
])

Permission.create([
  {role_id: 1, channel_id: 1},
  {role_id: 1, channel_id: 2},
  {role_id: 2, channel_id: 1},
  {role_id: 2, channel_id: 2},
  {role_id: 3, channel_id: 3},
  {role_id: 3, channel_id: 4},
  {role_id: 3, channel_id: 5},
  {role_id: 4, channel_id: 3},
  {role_id: 4, channel_id: 4},
  {role_id: 4, channel_id: 5},
  {role_id: 5, channel_id: 6},
  {role_id: 6, channel_id: 6},
])

UserRole.create([
  {user_id: 1, role_id: 1},
  {user_id: 2, role_id: 2},
  {user_id: 2, role_id: 3}
])