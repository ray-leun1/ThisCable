export const getUsers = () => $.ajax({
  method: 'GET',
  url: 'api/users'
});

export const getUser = id => $.ajax({
  method: 'GET',
  url: `api/users/${id}`
});

export const editUser = formData => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${formData.get('user[id]')}`,
    data: formData,
    contentType: false,
    processData: false
  })
}

export const createMembership = membership => $.ajax({
  method: 'POST',
  url: `api/servers/${membership.server_id}/memberships`,
  data: {membership}
});

export const deleteMembership = serverId => $.ajax({
  method: 'DELETE',
  url: `api/servers/${serverId}/memberships`
});