import React from 'react';
import { withRouter } from 'react-router-dom';
import svgs from '../../svgs';

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);

    this.renderMessages = this.renderMessages.bind(this);
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
                {`${message.created_at.split('T')[0]} at ${message.created_at.split('T')[1].slice(0, 5)}`}
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