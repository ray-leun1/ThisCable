import React from 'react';
import { ProtectedRoute } from '../../util/route_util';
import ServerListContainer from './servers/server_list_container';
import SidebarContainer from './sidebar/sidebar_container';
import ServerDiscoveryContainer from './server_discovery/server_discovery_container';

const ContentMountContainer = () => {
  return(<div className='content-mount-container'>
    <ServerListContainer />
    <ProtectedRoute path='/channels/:serverId(\d+)' component={SidebarContainer} />
    <ProtectedRoute path='/channels/server-discovery' component={ServerDiscoveryContainer} />
  </div>)
}

export default ContentMountContainer;