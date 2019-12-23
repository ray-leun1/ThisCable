import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { getCurrentUser } from '../../actions/current_actions';
import ServerIndex from './servers/server_index';
import Sidebar from './sidebar/new_sidebar';
import ChatContainer from './chat/chat_container';
import ServerDiscoveryContainer from './server_discovery/server_discovery_container';

export default () => {
  const dispatch = useDispatch();
  const currentUserId = useSelector(state => state.session.id);
  const [currentUser, setCurrentUser] = useState(useSelector(state => state.current.user));

  useEffect(() => {
    if (!currentUser) dispatch(getCurrentUser(currentUserId)).then(data => setCurrentUser(data.user))
  })

  if (currentUser) {
    return(<div className='content-mount-container'>
      <Route path='/channels/:serverId' component={ServerIndex} />
      <Route path='/channels/:serverId(\d+)' render={props => <Sidebar {...props} currentUser={currentUser}/>} />
      <Route path='/channels/:serverId(\d+)/:channelId(\d+)' component={ChatContainer} />
      <Route path='/channels/@me' render={props => <Sidebar {...props} currentUser={currentUser}/>} />
      <Route path='/channels/server-discovery' component={ServerDiscoveryContainer} />
    </div>)
  } else {
    return <div>Loading</div>
  }
}