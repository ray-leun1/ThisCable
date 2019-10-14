import React from 'react';
import { withRouter } from 'react-router-dom';

class ServerDiscoveryItem extends React.Component {
  render() {
    return (<div className='server-discovery-list-item-container'
      key={`server-discovery-list-item-container-${this.props.server.id}`}>
      <img className='server-discovery-list-item-icon'
        key={`server-discovery-list-item-icon-${this.props.server.id}`}
        src='https://i.imgur.com/Jvh1OQm.jpg'
        alt={`${this.props.server.name} icon`} />
      <div className='server-discovery-list-item-name'
        key={`server-discovery-list-item-name-${this.props.server.id}`}>
        {this.props.server.name}
      </div>
      <div className='server-discovery-list-item-join'
        key={`server-discovery-list-item-join-${this.props.server.id}`}>
        <div className='no-select default-btn server-discovery-list-item-join-btn'>
          Join
        </div>
      </div>
    </div>)
  }
}

export default withRouter(ServerDiscoveryItem);