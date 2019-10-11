import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import ServerListContainer from './servers/server_list_container';

const ContentMountContainer = () => {
  return(<div>
    <ServerListContainer />
  </div>)
}

export default ContentMountContainer