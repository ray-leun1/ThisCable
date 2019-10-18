import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, compUnmount } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: 'login',
  navLink: <div className='session-nav'>
    <span className='session-switch-msg'>Need an account? </span>
    <Link to='/signup' className='session-nav-link'>Sign Up</Link>
  </div>
});

const demoUser = {email: 'taehanazono@cable.com', password: 'Oddeye'};

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  processDemo: () => dispatch(login(demoUser)),
  clearErrors: () => dispatch(compUnmount())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm)