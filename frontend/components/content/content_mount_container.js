import React from 'react';
import { Route } from 'react-router-dom';
import ServerIndex from './servers/server_index';
import SidebarContainer from './sidebar/sidebar_container';
import ChatContainer from './chat/chat_container';
import ServerDiscoveryContainer from './server_discovery/server_discovery_container';

const ContentMountContainer = () => {
  return(<div className='content-mount-container'>
    <Route path='/channels/:serverId' component={ServerIndex} />
    <Route path='/channels/:serverId(\d+)' component={SidebarContainer} />
    <Route path='/channels/:serverId(\d+)/:channelId(\d+)' component={ChatContainer} />
    <Route path='/channels/@me' component={SidebarContainer} />
    <Route path='/channels/server-discovery' component={ServerDiscoveryContainer} />
  </div>)
}

export default ContentMountContainer;