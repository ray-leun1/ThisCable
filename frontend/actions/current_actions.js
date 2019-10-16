import * as CurrentAPIUtils from '../util/current_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_CURRENT_SERVER = 'RECEIVE_CURRENT_SERVER';
export const RECEIVE_CURRENT_CHANNEL = 'RECEIVE_CURRENT_CHANNEL';
export const CLEAR_CURRENT_USER = 'CLEAR_CURRENT_USER';
export const CLEAR_CURRENT_SERVER = 'CLEAR_CURRENT_SERVER';
export const CLEAR_CURRENT_CHANNEL = 'CLEAR_CURRENT_CHANNEL';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const receiveCurrentServer = server => ({
  type: RECEIVE_CURRENT_SERVER,
  server
});

const receiveCurrentChannel = channel => ({
  type: RECEIVE_CURRENT_CHANNEL,
  channel
});

const clearCurrentUser = () => ({
  type: CLEAR_CURRENT_USER
});

const clearCurrentServer = () => ({
  type: CLEAR_CURRENT_SERVER
});

const clearCurrentChannel = () => ({
  type: CLEAR_CURRENT_CHANNEL
});

export const getCurrentUser = userId => dispatch => (
  CurrentAPIUtils.getCurrentUser(userId)
    .then(user => dispatch(receiveCurrentUser(user)))
);

export const getCurrentServer = serverId => dispatch => (
  CurrentAPIUtils.getCurrentServer(serverId)
    .then(server => dispatch(receiveCurrentServer(server)))
);

export const getCurrentChannel = channelId => dispatch => (
  CurrentAPIUtils.getCurrentChannel(channelId)
    .then(channel => dispatch(receiveCurrentChannel(channel)))
);