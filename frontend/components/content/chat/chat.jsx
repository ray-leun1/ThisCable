import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, useHistory } from 'react-router-dom';
import { createMessage } from '../../../actions/message_actions';
import { getCurrentChannel } from '../../../actions/current_actions';
import MessageIndex from './message_index';
import MemberIndex from './member_index';

export default props => {
  const { currentUser } = props;

  const dispatch = useDispatch();
  const history = useHistory();

  const currentChannelId = history.location.pathname.split('/')[3];
  const [currentChannel, setCurrentChannel] = useState(useSelector(state => state.current.channel));
  const [messageBody, setMessageBody] = useState('');

  const handleSubmit = () => {
    let message = {
      body: messageBody,
      author_id: currentUser.id,
      channel_id: currentChannel.id
    };

    dispatch(createMessage(message))
    setMessageBody('');
  }

  const handleOnEnter = e => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      handleSubmit();
    }
  }

  useEffect(() => {
    dispatch(getCurrentChannel(currentChannelId))
      .then(data => setCurrentChannel(data.channel));
  }, [])

  useEffect(() => {
    if (currentChannel && (parseInt(currentChannelId) !== currentChannel.id)) {
      dispatch(getCurrentChannel(currentChannelId))
        .then(data => setCurrentChannel(data.channel));
    }
  })

  return (<div className='chat-container'>
    <div className='chat-title-container'>
      <div className='chat-title-hash'>
        <i className='fas fa-hashtag'></i>
      </div>
      <div className='chat-title-txt'>
        {currentChannel ? currentChannel.name : ''}
      </div>
    </div>
    <div className='chat-content-container'>
      <div className='chat-area-container'>
        <Route path='/channels/:serverId/:channelId' render={() => <MessageIndex key={parseInt(currentChannelId)} currentChannelId={currentChannelId} />} />
        <form className='chat-form-container'>
          <textarea className='chat-form-input'
            placeholder={`Message #${currentChannel ? currentChannel.name : ''}`}
            value={messageBody}
            onChange={e => setMessageBody(e.target.value)}
            onKeyDown={handleOnEnter} />
        </form>
      </div>
      <Route path='/channels/:serverId/:channelId' render={() => <MemberIndex currentChannel={currentChannel} />} />
    </div>
  </div>)
}