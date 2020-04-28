import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createServer } from '../../../actions/server_actions';
import { closeModal } from '../../../actions/modal_actions';
import { getCurrentServer, getCurrentChannel } from '../../../actions/current_actions';

export default props => {
  const { updateServerIndex } = props;

  const dispatch = useDispatch();
  const history = useHistory();

  const adminId = useSelector(state => state.session.id);

  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(createServer({ name, adminId }))
      .then(data => {
        history.push(`/channels/${data.server.id}/${data.server.joinedChannelIds[0]}`);
        dispatch(getCurrentServer(data.server.id));
        dispatch(getCurrentChannel(data.server.joinedChannelIds[0]));
        updateServerIndex();
      });

    closeModal();
  }

  const handleOnEnter = e => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      handleSubmit(e);
    }
  }

  return (<div className='create-server-form-container'>
    <form className='create-server-form'
      onSubmit={handleSubmit}>
      <div className='create-server-form-container-top'>
        <div className='create-server-form-title'>CREATE YOUR SERVER</div>
        <div className='create-server-form-text'>
          By creating a server you will have access to <strong>free</strong> text chat to use amongst yourself.
        </div>

        <div className='create-server-form-input-container'>
          <div className='create-server-form-input-container-left'>
            <label className='create-server-label'>SERVER NAME
              <input className='create-server-input-name'
                type='text'
                value={name}
                placeholder='Enter a server name'
                onChange={e => setName(e.target.value)}
                onKeyDown={handleOnEnter} />
            </label>
            <div className='create-server-input-region-container'>
              <label className='create-server-label'>SERVER REGION
                <div className='create-server-input-region-btn'>
                  <div className='create-server-input-region'>
                    <div className='create-server-input-region-flag'></div>
                    <span className='create-server-input-region-text'>
                      US West
                    </span>
                  </div>
                  <div className='create-server-input-region-change-btn'>
                    Change
                  </div>
                </div>
              </label>
            </div>
            <div className='create-server-input-fineprint'>
              By creating a server, you.. create a server, really.
            </div>
          </div>
          <div className='create-server-form-input-container-right'>
            <div className='create-server-input-icon-container'>
              <div className='create-server-input-icon-btn'>
                <div className='create-server-input-icon'></div>
              </div>
              <span className='create-server-input-icon-txt'>
                Minimum Size: <strong>128x128</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='create-server-form-bottom-container'>
        <button className='create-server-form-back'
          onClick={() => { updateServerIndex(); dispatch(closeModal()) }}>
          <i className="fas fa-arrow-left"></i>
          BACK
        </button>
        <input className='default-btn create-server-form-submit'
          type='submit'
          value='Create' />
      </div>
    </form>
  </div>)
}