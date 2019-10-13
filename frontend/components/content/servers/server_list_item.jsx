import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class ServerListItem extends React.Component {

  render() {
    return (
      <div className='server-list-item-container'>
        <Link to={`/channels/${this.props.server.id}`}
          key={`server-li-${this.props.server.id}`}>
          <img className='server-list-item'
            src="https://i.imgur.com/Jvh1OQm.jpg"
            alt={this.props.server.name} />
        </Link>
        <div className='hover-tooltip server-list-item-hover'
          key={`server-hover-name-${this.props.server.id}`}>
          {this.props.server.name}
        </div>
      </div>
    )
  }
}

export default withRouter(ServerListItem);