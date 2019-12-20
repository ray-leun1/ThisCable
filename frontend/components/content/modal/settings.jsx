import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import { logout } from '../../../actions/session_actions';
import { getCurrentUser } from '../../../actions/current_actions';
import MyAccount from './my_account';
import svgs from '../../svgs';

export default () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.current.user);
  const [currentTab, setCurrentTab] = useState('my-account');
  
  const updateCurrentUser = () => dispatch(getCurrentUser(currentUser.id));

  const handleLogout = () => {
    dispatch(logout());
    dispatch(closeModal());
  };

  return (<div className='settings-container'>
    <div className='container-left'>
      <div className='sidebar'>
        <div className={`tab my-account${currentTab === 'my-account' ? ' active' : ''}`}>
          My Account
        </div>
        <div className='divider'></div>
        <div className='tab logout'
          onClick={handleLogout}>
          Log Out
        </div>
      </div>
    </div>
    <div className='container-right'>
      <div className='content'>
        <MyAccount currentUser={currentUser} updateCurrentUser={updateCurrentUser} svgs={svgs} />
      </div>
      <div className='exit-container'>
        <div className='exit-btn'
          onClick={() => dispatch(closeModal())}>
          {svgs.X}
        </div>
        <div className='exit-txt'>
          ESC
        </div>
      </div>
    </div>
  </div>)
}