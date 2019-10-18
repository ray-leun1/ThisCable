import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login, compUnmount } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: 'signup',
  navLink: <div className='session-nav'>
    <Link to='/login' className='session-nav-link'>
      Already have an account?
    </Link>
  </div>
});

let demoLogin = { email: 'arisaichigaya@cable.com', password: 'thisisdumb' };

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  processDemo: () => dispatch(login(demoLogin)),
  clearErrors: () => dispatch(compUnmount())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm)