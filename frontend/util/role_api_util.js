export const getRoles = () => $.ajax({
  method: 'GET',
  url: 'api/servers/:serverId/roles'
});

export const getRole = id => $.ajax({
  method: 'GET',
  url: `api/roles/${id}`
});

export const createRole = role => $.ajax({
  method: 'POST',
  url: 'api/servers/:serverId/roles',
  data: {role}
});

export const updateRole = role => $.ajax({
  method: 'PATCH',
  url: `api/roles/${role.id}`,
  data: {role}
});

export const deleteRole = id => $.ajax({
  method: 'DELETE',
  url: `api/roles/${id}`
});