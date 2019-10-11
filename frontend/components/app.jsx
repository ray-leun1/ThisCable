import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Modal from './content/modal/modal';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_contain';
import LandingContainer from './landing/landing_container';
import ContentMountContainer from './content/content_mount_container';

const App = () => (
  <div>
    <Modal />
    <AuthRoute exact path ='/' component={LandingContainer} />
    <AuthRoute path='/login' component={LoginFormContainer} />
    <AuthRoute path='/signup' component={SignupFormContainer} />
    <ProtectedRoute path='/channels' component={ContentMountContainer} />
  </div>
);

export default App;