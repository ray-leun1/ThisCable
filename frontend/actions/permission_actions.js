import * as PermissionAPIUtil from '../util/permission_api_util';

export const RECEIVE_PERMISSIONS = 'RECEIVE_PERMISSIONS';
export const RECEIVE_PERMISSION = 'RECEIVE_PERMISSION';
export const REMOVE_PERMISSION = 'REMOVE_PERMISSION';

const receivePermissions = permissions => ({
  type: RECEIVE_PERMISSIONS,
  permissions
});

const receivePermission = permission => ({
  type: RECEIVE_PERMISSION,
  permission
});

const removePermission = id => ({
  type: REMOVE_PERMISSION,
  id
});

export const getPermissions = () => dispatch => (
  PermissionAPIUtil.getPermissions()
    .then(permissions => dispatch(receivePermissions(permissions)))
);

export const getPermission = id => dispatch => (
  PermissionAPIUtil.getPermission(id)
    .then(permission => dispatch(receivePermission(permission)))
);

export const createPermission = permission => dispatch => (
  PermissionAPIUtil.createPermission(permission)
    .then(permission => dispatch(receivePermission(permission)))
);

export const updatePermission = permission => dispatch => (
  PermissionAPIUtil.updatePermission(permission)
    .then(permission => dispatch(receivePermission(permission)))
);

export const deletePermission = id => dispatch => (
  PermissionAPIUtil.deletePermission(id)
    .then(permission => dispatch(removePermission(permission.id)))
);