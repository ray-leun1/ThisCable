export const getMessages = channelId => $.ajax({
  method: 'GET',
  url: `api/channels/${channelId}/messages`
});

export const getMessage = id => $.ajax({
  method: 'GET',
  url: `api/messages/${id}`
});

export const createMessage = message => $.ajax({
  method: 'POST',
  url: `api/channels/${message.channel_id}/messages`,
  data: {message}
});

export const updateMessage = message => $.ajax({
  method: 'PATCH',
  url: `api/messages/${message.id}`,
  data: {message}
});

export const deleteMessage = id => $.ajax({
  method: 'DELETE',
  url: `api/messages/${id}`
});