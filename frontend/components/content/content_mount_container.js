import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { getCurrentUser } from '../../actions/current_actions';
import ServerIndex from './servers/server_index';
import Sidebar from './sidebar/sidebar';
import Chat from './chat/chat';
import ServerDiscovery from './server_discovery/new_server_discovery';

export default () => {
  const dispatch = useDispatch();
  const currentUserId = useSelector(state => state.session.id);
  const [currentUser, setCurrentUser] = useState(useSelector(state => state.current.user));

  useEffect(() => {
    if (!currentUser || !currentUser.joinedServerIds) updateCurrentUser();
  })

  const updateCurrentUser = () => dispatch(getCurrentUser(currentUserId)).then(data => setCurrentUser(data.user));

  if (currentUser) {
    return(<div className='content-mount-container'>
      <Route path='/channels/:serverId' render={() => <ServerIndex currentUser={currentUser} updateCurrentUser={updateCurrentUser} />} />
      <Route path='/channels/:serverId(\d+)' render={() => <Sidebar currentUser={currentUser} updateCurrentUser={updateCurrentUser} />} />
      <Route path='/channels/:serverId(\d+)/:channelId(\d+)' render={() => <Chat currentUser={currentUser} />} />
      <Route path='/channels/@me' render={() => <Sidebar currentUser={currentUser}/>} />
      <Route path='/channels/server-discovery' component={ServerDiscovery} />
    </div>)
  } else {
    return <div>Loading</div>
  }
}