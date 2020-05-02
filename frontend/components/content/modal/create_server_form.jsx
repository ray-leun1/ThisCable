import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createServer } from '../../../actions/server_actions';
import { closeModal } from '../../../actions/modal_actions';
import { getCurrentServer, getCurrentChannel } from '../../../actions/current_actions';
import svgs from '../../svgs';

export default props => {
  const { updateServerIndex } = props;

  const dispatch = useDispatch();
  const history = useHistory();

  const adminId = useSelector(state => state.session.id);

  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(createServer({ name, admin_id: adminId }))
      .then(data => {
        dispatch(getCurrentServer(data.server.id));
        dispatch(getCurrentChannel(data.server.joinedChannelIds[0]));
        updateServerIndex();
        history.push(`/channels/${data.server.id}/${data.server.joinedChannelIds[0]}`);
      });

    dispatch(closeModal());
  }

  const handleOnEnter = e => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      handleSubmit(e);
    }
  }

  return (<div className='create-server-form-container'>
    <form onSubmit={handleSubmit}>
      <div className='top-container'>
        <div className='title'>CREATE YOUR SERVER</div>
        <div className='text'>
          By creating a server you will have access to <strong>free</strong> text chat to use amongst yourself.
        </div>

        <div className='input-container'>
          <div className='left-container'>
            <label>SERVER NAME
              <input className='input-name'
                type='text'
                value={name}
                placeholder='Enter a server name'
                onChange={e => setName(e.target.value)}
                onKeyDown={handleOnEnter} />
            </label>
            <div className='region-container'>
              <label>SERVER REGION
                <div className='region-btn'>
                  <div className='region'>
                    <div className='region-flag'></div>
                    <span className='region-text'>
                      US West
                    </span>
                  </div>
                  <div className='region-change-btn'>
                    Change
                  </div>
                </div>
              </label>
            </div>
            <div className='input-fineprint'>
              By creating a server, you.. create a server, really.
            </div>
          </div>
          <div className='right-container'>
            <div className='icon-container'>
              <div className='icon-btn'>
                <div className='icon'></div>
              </div>
              <span className='icon-txt'>
                Minimum Size: <strong>128x128</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-container'>
        <button className='back-btn'
          onClick={() => { updateServerIndex(); dispatch(closeModal()) }}>
          {svgs.backArrow}
          BACK
        </button>
        <input className='default-btn submit-btn'
          type='submit'
          value='Create' />
      </div>
    </form>
  </div>)
}