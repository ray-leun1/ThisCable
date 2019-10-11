import React from 'react';
import ServerListContainer from './servers/server_list_container';
import SidebarContainer from './sidebar/sidebar_container';

const ContentMountContainer = () => {
  return(<div className='content-mount-container'>
    <ServerListContainer />
    <SidebarContainer />
  </div>)
}

export default ContentMountContainer;