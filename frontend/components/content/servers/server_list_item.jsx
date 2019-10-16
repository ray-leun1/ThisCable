import React from 'react';
import { withRouter } from 'react-router-dom';

class ServerListItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.getCurrentServer(this.props.server.id)
      .then(server => {
        this.props.history.push(`/channels/${this.props.server.id}/${server.server.joinedChannelIds[0]}`)
      });
  }

  render() {
    return (<div className='server-list-item-container'
      key={`server-list-item-container-${this.props.server.id}`}
      onClick={() => this.handleClick()}>
      <img className='server-list-item'
        key={`server-list-item-${this.props.server.id}`}
        src='https://i.imgur.com/Jvh1OQm.jpg'
        alt={`${this.props.server.name} icon`} />
      <div className='hover-tooltip server-list-item-hover'
        key={`server-hover-name-${this.props.server.id}`}>
        {this.props.server.name}
      </div>
    </div>)
  }
}

export default withRouter(ServerListItem);