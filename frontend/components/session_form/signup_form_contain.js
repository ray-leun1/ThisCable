import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
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

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm)