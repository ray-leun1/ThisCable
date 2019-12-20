import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { signup, login, compUnmount } from '../actions/session_actions';

export default () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const clearErrors = () => dispatch(compUnmount());
  const errors = useSelector(state => state.errors.session);
  
  const formType = location.pathname.split('/')[1];
  const demoUser = { email: 'arisaichigaya@cable.com', password: 'thisisdumb' };
  const processForm = user => formType === 'login' ? dispatch(login(user)) : dispatch(signup(user));

  const navLink = () => {
    if (formType === 'login') {
      return <div className='session-nav'>
        <span className='switch-msg'>Need an account? </span>
        <Link to='/register' className='nav-link'>Register</Link>
      </div>
    } else {
      return <div className='session-nav'>
        <Link to='/login' className='nav-link'>
          Already have an account?
        </Link>
      </div>
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    const user = { email, username, password };
    clearErrors();
    processForm(user);
  }

  const handleChange = (e, setFunc) => {
    errors.length > 0 ? clearErrors() : '';
    setFunc(e.currentTarget.value);
  }

  const renderErrors = () => <ul className='errors'>
    {errors.map((error, i) => <li key={`error-${i}`}>{error}</li>)}
  </ul>

  const submitStr = formType === 'login' ? 'Login' : 'Continue';
  const titleStr = formType === 'login' ? 'Welcome back!' : 'Create an account'

  return (<div className='session-form-container'>
    <form onSubmit={e => handleSubmit(e)}>
      <div className='title'>{titleStr}</div>
      {formType === 'login' ? <div className='subtitle'>
        We're so excited to see you again!
      </div> : ''}

      {errors.length > 0 ? renderErrors() : ''}

      <div className='input-container'>
        <label>
          <div>EMAIL</div>
          <input type='text'
            value={email}
            onChange={e => handleChange(e, setEmail)} />
        </label>
        {formType === 'register' ? <label>
          <div>USERNAME</div>
          <input type='text'
            value={username}
            onChange={e => handleChange(e, setUsername)} />
        </label> : ''}
        <label>
          <div>PASSWORD</div>
          <input type='password'
            value={password}
            onChange={e => handleChange(e, setPassword)} />
        </label>
        {formType === 'login' ? <div className='forgot-password' data-tip>
          Forgot your password?
        </div> : ''}
        {formType === 'login' ? <ReactTooltip place='right' effect='solid' offset={{ right: 3 }}>
          Too bad.
        </ReactTooltip> : ''}
        <button className='default-btn'
          type='submit'>
          {submitStr}
        </button>
        <button className='default-btn'
          type='button'
          onClick={() => dispatch(login(demoUser))}>
          Demo Login
        </button>
      </div>
      {navLink()}
    </form>
  </div>)
}