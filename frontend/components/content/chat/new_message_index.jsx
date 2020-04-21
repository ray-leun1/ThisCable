import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../actions/user_actions';
import { getMessages } from '../../../actions/message_actions';
import svgs from '../../svgs';

export default props => {
  const { currentChannelId } = props;

  const dispatch = useDispatch();

  const [users, setUsers] = useState(useSelector(state => state.entities.users));
  const [messages, setMessages] = useState(useSelector(state => state.entities.messages));

  useEffect(() => {
    dispatch(getUsers()).then(data => setUsers(data.users));
    dispatch(getMessages(currentChannelId).then(data => setMessages(data.messages)));
  }, [])

  useEffect(() => {
    if (messages.length > 0) {
      let container = document.getElementsByClassName('message-index-container')[0];
      container.scrollTop = container.scrollHeight;
    }
  })

  const dateParser = date => {
    const today = new Date();
    const dateObject = new Date(date);
    let timeString = dateObject.toLocaleTimeString('en-US', {
      hour: 'numeric', minute: 'numeric'
    });

    if (today.getFullYear() === dateObject.getFullYear()
      && today.getMonth() === dateObject.getMonth()
      && today.getDate() - dateObject.getDate() <= 6) {
      let dateDifference = today.getDate() - dateObject.getDate();
      if (dateDifference === 0) return 'Today at ' + timeString;
      if (dateDifference === 1) return 'Yesterday at ' + timeString;
      if (dateDifference > 1) {
        switch (today.getDay()) {
          case 0: return 'Monday at ' + timeString;
          case 1: return 'Tuesday at ' + timeString;
          case 2: return 'Wednesday at ' + timeString;
          case 3: return 'Thursday at ' + timeString;
          case 4: return 'Friday at ' + timeString;
          case 5: return 'Saturday at ' + timeString;
          case 6: return 'Sunday at ' + timeString;
        }
      }
    } else {
      return dateObject.toLocaleDateString();
    }
  }

  const renderMessages = () => {
    let author;

    if (users && messages && Object.values(users).length > 1) {
      return (messages.map(message => {
        author = users[message.author_id];

        return (<div className='message-container'
          key={`message-container-${message.id}`}>
          <div className='message-user-icon'
            style={author.profile_img_url
              ? { backgroundImage: `url(${author.profile_img_url})` }
              : { background: '#7289da' }}>
            {author.profile_img_url ? '' : svgs.logoCat}
          </div>
          <div className='message-info'>
            <div className='message-user-header'>
              <div className='message-username'>
                {author.username}
              </div>
              <div className='message-timestamp'>
                {dateParser(message.created_at)}
              </div>
            </div>
            <div className='message-body'>
              {message.body}
            </div>
          </div>
        </div>)
      })
      )
    }
  }

  return (<div className='message-index-container'>
    {renderMessages()}
  </div>)
}

export default withRouter(MessageIndex);