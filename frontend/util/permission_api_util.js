export const getPermissions = () => $.ajax({
  method: 'GET',
  url: 'api/permissions'
});

export const getPermission = id => $.ajax({
  method: 'GET',
  url: `api/permissions/${id}`
});

export const createPermission = permission => $.ajax({
  method: 'POST',
  url: 'api/permissions',
  data: { permission }
});

export const updatePermission = permission => $.ajax({
  method: 'PATCH',
  url: `api/permissions/${permission.id}`,
  data: { permission }
});

export const deletePermission = id => $.ajax({
  method: 'DELETE',
  url: `api/permissions/${id}`
});