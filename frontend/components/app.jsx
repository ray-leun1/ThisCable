import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Modal from './content/modal/modal';
import SessionForm from './session_form';
import Landing from './landing/landing';
import ContentMountContainer from './content/content_mount_container';

const App = () => (
  <div>
    <div className='app-bg'></div>
    <Modal />
    <AuthRoute exact path ='/' component={Landing} />
    <AuthRoute path='/login' component={SessionForm} />
    <AuthRoute path='/register' component={SessionForm} />
    <ProtectedRoute path='/channels' component={ContentMountContainer} />
  </div>
);

export default App;