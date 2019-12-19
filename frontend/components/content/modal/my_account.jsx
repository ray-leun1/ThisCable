import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editUser } from '../../../actions/user_actions';
import { getCurrentUser } from '../../../actions/current_actions';
import svgs from '../../svgs';

export default props => {
  const dispatch = useDispatch();
  const { currentUser, updateCurrentUser } = props;

  const [updateUser, setUpdateUser] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [profileImg, setProfileImg] = useState('');
  const [profileImgUrl, setProfileImgUrl] = useState(currentUser.profile_img_url)
  const [username, setUsername] = useState(currentUser.username);
  const [email, setEmail] = useState(currentUser.email);

  const handleFile = e => {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setProfileImgUrl(fileReader.result);
      setProfileImg(file);
    }
    file ? fileReader.readAsDataURL(file) : '';
  }

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('user[id]', currentUser.id);
    formData.append('user[username]', username);
    formData.append('user[email]', email);

    if (profileImg) formData.append('user[profile_img]', profileImg);

    dispatch(editUser(formData)).then(() => {
      updateCurrentUser().then(() => setUpdateUser(false))
    });
  }

  const handleCancel = () => {
    setUpdateUser(false);
    setProfileImgUrl(currentUser.profile_img_url);
    setUsername(currentUser.username);
    setEmail(currentUser.email);
  }

  const inputUsernameClass = 'input' + (usernameFocus ? ' focus' : '');

  const userInfoPort = () => {
    if (updateUser) {
      return <form className='update-user-form'
        onSubmit={e => handleSubmit(e)}>
        <div className='form-input-container'>
          <div className='icon-upload-container'
            style={{ backgroundImage: `url(${profileImgUrl})`}}>
            <div className='tip'>CHANGE AVATAR</div>
            <div className='upload-indicator'>{svgs.uploadIndicator}</div>
            <input type='file'
              onChange={e => handleFile(e)} />
          </div>
          <div className='txt-container'>
            <div className='input-container username'>
              <div className='label'>USERNAME</div>
              <div className={inputUsernameClass}>
                <input type='text'
                  value={username}
                  onChange={e => setUsername(e.currentTarget.value)}
                  onFocus={() => setUsernameFocus(true)}
                  onBlur={() => setUsernameFocus(false)} />
                <div type='text' disabled>#{currentUser.id}</div>
              </div>
            </div>
            <div className='input-container email'>
              <div className='label'>EMAIL</div>
              <input type='text'
                value={email}
                onChange={e => setEmail(e.currentTarget.value)} />
            </div>
            <div className='input-container password'>
              <div className='label'>CURRENT PASSWORD</div>
              <input type='text'
                value={'Don\'t actually change it or look at it.'}
                disabled />
            </div>
          </div>
        </div>
        <div className='divider'></div>
        <div className='buttons'>
          <div className='cancel'
            onClick={handleCancel}>
            Cancel
          </div>
          <button className='default-btn save'
            type='submit'>
            Save
          </button>
        </div>
      </form>;
    } else {
      return <div className='user-info'>
        <div className='icon-container'
          style={{ backgroundImage: `url(${currentUser.profile_img_url})` }}>
        </div>
        <div className='txt-container'>
          <div className='username'>
            <div className='label'>USERNAME</div>
            <div className='input'>
              {currentUser.username}
              <span className='id'>#{currentUser.id}</span>
            </div>
          </div>
          <div className='email'>
            <div className='label'>EMAIL</div>
            <div className='input'>{currentUser.email}</div>
          </div>
        </div>
        <button className='default-btn'
          onClick={() => setUpdateUser(true)}>Edit</button>
      </div>
    }
  }

  return <div className='my-account'>
    <div className='title'>MY ACCOUNT</div>
    {userInfoPort()}
  </div>
}