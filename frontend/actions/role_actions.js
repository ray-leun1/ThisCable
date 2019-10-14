import * as RoleAPIUtil from '../util/role_api_util';

export const RECEIVE_ROLES = 'RECEIVE_ROLES';
export const RECEIVE_ROLE = 'RECEIVE_ROLE';
export const REMOVE_ROLE = 'REMOVE_ROLE';

const receiveRoles = roles => ({
  type: RECEIVE_ROLES,
  roles
});

const receiveRole = role => ({
  type: RECEIVE_ROLE,
  role
});

const removeRole = id => ({
  type: REMOVE_ROLE,
  id
});

export const getRoles = () => dispatch => (
  RoleAPIUtil.getRoles()
    .then(roles => dispatch(receiveRoles(roles)))
);

export const getRole = id => dispatch => (
  RoleAPIUtil.getRole(id)
    .then(role => dispatch(receiveRole(role)))
);

export const createRole = role => dispatch => (
  RoleAPIUtil.createRole(role)
    .then(role => dispatch(receiveRole(role)))
);

export const updateRole = role => dispatch => (
  RoleAPIUtil.updateRole(role)
    .then(role => dispatch(receiveRole(role)))
);

export const deleteRole = id => dispatch => (
  RoleAPIUtil.deleteRole(id)
    .then(role => dispatch(removeRole(role.id)))
);