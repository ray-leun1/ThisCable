import React from 'react';
import { withRouter } from 'react-router-dom';
import svgs from '../../svgs';

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);

    this.renderMessages = this.renderMessages.bind(this);
    this.dateParser = this.dateParser.bind(this);
  }

  componentDidMount() {
    let currentChannelId = parseInt(this.props.location.pathname.split('/')[3]);
    this.props.getCurrentChannel(currentChannelId);
    this.props.getUsers();
    this.props.getMessages(currentChannelId);
  }

  componentDidUpdate() {
    if (Object.values(this.props.users).length === 1) {
      this.props.getUsers();
    }
    if (this.props.messages.length > 0) {
      let container = document.getElementsByClassName('message-index-container')[0];
      container.scrollTop = container.scrollHeight;
    }
  }

  dateParser(date) {
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

  renderMessages() {
    let author
    let users = this.props.users;
    
    if (this.props.currentChannel && this.props.users && this.props.messages
      && Object.values(this.props.users).length > 1) {
      return (this.props.messages.map(message => {
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
                {this.dateParser(message.created_at)}
              </div>
            </div>
            <div className='message-body'>
              {message.body}
            </div>
          </div>
        </div>)
      })
    )}
  }

  render() {
    return (<div className='message-index-container'>
      {this.renderMessages()}
    </div>)
  }
}

export default withRouter(MessageIndex);