import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={props => (
    !loggedIn ? <Component {...props} /> : <Redirect to="/channels" />
  )} />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={props => (
    loggedIn ? <Component {...props} /> : <Redirect to="/login" />
  )} />
);

// const UserProtected = ({ component: Component, path, loggedIn, matchUser, exact }) => (
//   <Route path={path} exact={exact} render={props => (
//     (loggedIn && matchUser) ? <Component {...props} /> : <Redirect to="/login" />
//   )} />
// );

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.id),
  // matchUser: state.users[state.session.id]
  //   .joinedServerIds.includes(state.currentServer.id)
});

export const AuthRoute = withRouter(
  connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(
  connect(mapStateToProps)(Protected));

// export const UserProtectedRoute = withRouter(
//   connect(mapStateToProp)(UserProtected))