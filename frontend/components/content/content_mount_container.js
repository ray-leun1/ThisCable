import React from 'react';
import { ProtectedRoute } from '../../util/route_util';
import ServerListContainer from './servers/server_list_container';
import SidebarContainer from './sidebar/sidebar_container';

const ContentMountContainer = () => {
  return(<div className='content-mount-container'>
    <ServerListContainer />
    <ProtectedRoute path='/channels/:serverId' component={SidebarContainer} />
  </div>)
}

export default ContentMountContainer;