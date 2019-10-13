import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import ServerListItem from './server_list_item';

class ServerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.getServers();
  }

  render() {
    return (<div className='server-list'>
      {this.props.servers.map(server => 
        <ServerListItem server={server} />
      )}
      <div className='server-list-item-container'>
        <button className='add-server-btn'
          onClick={() => this.props.openModal('create server')}>
          +
        </button>
        <div className='hover-tooltip server-list-item-hover'
          key={'server-hover-name-add-a-server'}>
          Add a Server
        </div>
      </div>
      <div className='server-list-item-container'>
        <button className='logout-btn'
          onClick={() => this.props.logout()}>
          -
        </button>
        <div className='hover-tooltip server-list-item-hover'
          key={'server-hover-name-logout'}>
          Logout
        </div>
      </div>
    </div>);
  }
}

export default withRouter(ServerList);
