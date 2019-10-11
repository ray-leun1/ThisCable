import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class ServerList extends React.Component {

  componentDidMount() {
    this.props.getServers();
  }

  render() {
    return (
      <div className='server-list'>
        {this.props.servers.map(server =>
          <Link to={`/channels/${server.id}`}
            key={`server-li-${server.id}`}>
            <img className='server-list-item'
              src="https://i.imgur.com/Jvh1OQm.jpg"
              alt={server.name} />
          </Link>
        )}
        <button className='server-list-item add-server-btn'
          onClick={() => this.props.openModal('create server')}>
          +
        </button>
        <button className='server-list-item logout-btn'
          onClick={() => this.props.logout()}>
          -
        </button>
      </div>
    );
  }
}

export default withRouter(ServerList);
