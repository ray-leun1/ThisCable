export const getCurrentUser = userId => $.ajax({
  method: 'GET',
  url: `api/users/${userId}`
});

export const getCurrentServer = serverId => $.ajax({
  method: 'GET',
  url: `api/servers/${serverId}`
});

export const getCurrentChannel = channelId => $.ajax({
  method: 'GET',
  url: `api/channels/${channelId}`
});