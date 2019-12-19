import * as UserAPIUtils from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const getUsers = () => dispatch => (
  UserAPIUtils.getUsers()
    .then(users => dispatch(receiveUsers(users)))
);

export const getUser = id => dispatch => (
  UserAPIUtils.getUser(id)
    .then(user => dispatch(receiveUser(user)))
);

export const editUser = user => dispatch => (
  UserAPIUtils.editUser(user)
    .then(user => dispatch(receiveUser(user)))
);

export const createMembership = membership => dispatch => (
  UserAPIUtils.createMembership(membership)
    .then(user => dispatch(receiveUser(user)))
);

export const deleteMembership = serverId => dispatch => (
  UserAPIUtils.deleteMembership(serverId)
    .then(user => dispatch(receiveUser(user)))
);