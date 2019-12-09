export const getChannels = serverId => $.ajax({
  method: 'GET',
  url: `api/servers/${serverId}/channels`
});

export const getChannel = id => $.ajax({
  method: 'GET',
  url: `api/channels/${id}`
});

export const createChannel = channel => $.ajax({
  method: 'POST',
  url: `api/servers/${channel.server_id}/channels`,
  data: {channel}
});

export const updateChannel = channel => $.ajax({
  method: 'PATCH',
  url: `api/channels/${channel.id}`,
  data: {channel}
});

export const deleteChannel = id => $.ajax({
  method: 'DELETE',
  url: `api/channels/${id}`
});