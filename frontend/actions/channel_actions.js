import * as ChannelAPIUtil from '../util/channel_api_util';

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';

const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels
});

const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

const removeChannel = id => ({
  type: REMOVE_CHANNEL,
  id
});

export const getChannels = serverId => dispatch => (
  ChannelAPIUtil.getChannels(serverId)
    .then(channels => dispatch(receiveChannels(channels)))
);

export const getChannel = id => dispatch => (
  ChannelAPIUtil.getChannel(id)
    .then(channel => dispatch(receiveChannel(channel)))
);

export const createChannel = channel => dispatch => (
  ChannelAPIUtil.createChannel(channel)
    .then(channel => dispatch(receiveChannel(channel)))
);

export const updateChannel = channel => dispatch => (
  ChannelAPIUtil.updateChannel(channel)
    .then(channel => dispatch(receiveChannel(channel)))
);

export const deleteChannel = id => dispatch => (
  ChannelAPIUtil.deleteChannel(id)
    .then(channel => dispatch(removeChannel(channel.id)))
);