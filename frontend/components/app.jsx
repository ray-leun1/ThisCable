import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Modal from './content/modal/modal';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_contain';
import Landing from './landing/landing';
import ContentMountContainer from './content/content_mount_container';

const App = () => (
  <div>
    <div className='app-bg'></div>
    <Modal />
    <AuthRoute exact path ='/' component={Landing} />
    <AuthRoute path='/login' component={LoginFormContainer} />
    <AuthRoute path='/signup' component={SignupFormContainer} />
    <ProtectedRoute path='/channels' component={ContentMountContainer} />
  </div>
);

export default App;