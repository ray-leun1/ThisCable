import * as ServerAPIUtil from '../util/server_api_util';

export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const REMOVE_SERVER = 'REMOVE_SERVER';

const receiveServers = servers => ({
  type: RECEIVE_SERVERS,
  servers
});

const receiveServer = server => ({
  type: RECEIVE_SERVER,
  server
});

const removeServer = id => ({
  type: REMOVE_SERVER,
  id
});

export const getServers = () => dispatch => (
  ServerAPIUtil.getServers()
    .then(servers => dispatch(receiveServers(servers)))
);

export const getServer = id => dispatch => (
  ServerAPIUtil.getServer(id)
    .then(server => dispatch(receiveServer(server)))
);

export const createServer = server => dispatch => (
  ServerAPIUtil.createServer(server)
    .then(server => dispatch(receiveServer(server)))
);

export const updateServer = server => dispatch => (
  ServerAPIUtil.updateServer(server)
    .then(server => dispatch(receiveServer(server)))
);

export const deleteServer = id => dispatch => (
  ServerAPIUtil.deleteServer(id)
    .then(server => dispatch(removeServer(server.id)))
);