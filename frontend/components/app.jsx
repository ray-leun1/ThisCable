import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_contain';
import { logout } from '../actions/session_actions';

const App = () => (
  <div>
    <h1>I'm done now, right?</h1>

    <Route exact path ='/' render={() => (
    <span class='landing'>
      <button onClick={() => logout}>Log Out</button>
    </span>)} />
    <AuthRoute path='/login' component={LoginFormContainer} />
    <AuthRoute path='/signup' component={SignupFormContainer} />
  </div>
);

export default App;