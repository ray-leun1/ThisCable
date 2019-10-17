import React from 'react';
import { Route } from 'react-router-dom';
import ServerListContainer from './servers/server_list_container';
import SidebarContainer from './sidebar/sidebar_container';
import ChatContainer from './chat/chat_container';
import ServerDiscoveryContainer from './server_discovery/server_discovery_container';

const ContentMountContainer = () => {
  return(<div className='content-mount-container'>
    <ServerListContainer />
    <Route path='/channels/:serverId(\d+)' component={SidebarContainer} />
    <Route path='/channels/:serverId(\d+)/:channelId(\d+)' component={ChatContainer} />
    <Route path='/channels/server-discovery' component={ServerDiscoveryContainer} />
  </div>)
}

export default ContentMountContainer;