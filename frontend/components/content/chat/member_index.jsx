import React from 'react';
import { withRouter } from 'react-router-dom';

class MemberIndex extends React.Component {
  constructor(props) {
    super(props);
    
    this.renderMembers = this.renderMembers.bind(this);
  }

  componentDidMount() {
    let currentChannelId = this.props.location.pathname.split('/')[3];

    this.props.getUsers();
    this.props.getCurrentChannel(currentChannelId);
  }

  componentDidUpdate(prevProps) {
    if (!(prevProps.currentChannel && this.props.currentChannel) ||
      (this.props.currentChannel.id !== parseInt(this.props.location.pathname.split('/')[3]))) {
      this.props.getCurrentChannel(parseInt(this.props.location.pathname.split('/')[3]));
    } else if ((!this.props.users || Object.values(this.props.users).length === 0) ||
      (this.props.currentChannel.permittedUserIds.length > Object.values(this.props.users).length)) {
      this.props.getUsers();
    }
  }

  renderMembers() {
    if (this.props.currentChannel && this.props.users) {
      let users = [];
      
      this.props.currentChannel.permittedUserIds.forEach(userId => {
        if (this.props.users[userId]) {
          let user = this.props.users[userId];

          if (user) {
            users.push(<div className='member-index-item'
              key={`member-index-item-${user.id}`}>
              <div className='member-index-item-icon'></div>
              <div className='member-index-item-username noverflow'>
                {user.username}
              </div>
            </div>)
          }
        }
      })

      return users;
    }
  }

  render() {
    return (<div className='member-index-container'>
      {this.renderMembers()}
    </div>)
  }
}

export default withRouter(MemberIndex);