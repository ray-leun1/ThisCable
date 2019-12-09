import React from 'react';
import { withRouter } from 'react-router-dom';
import ServerListItem from './server_list_item';

class ServerList extends React.Component {
  componentDidMount() {
    this.props.getServers();
    this.props.getUser(this.props.currentUserId);
    this.props.getCurrentUser(this.props.currentUserId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.servers.length !== this.props.servers.length) {
      this.props.getServers();
      this.props.getUser(this.props.currentUserId);
      this.props.getCurrentUser(this.props.currentUserId);
    }
  }

  render() {
    
    let servers = [];
    let currentUser = this.props.currentUser;
    if (currentUser && currentUser.joinedServerIds && this.props.servers) {
      servers = this.props.servers.filter(server =>
        currentUser.joinedServerIds.includes(server.id))
    }

    return (<div className='server-list'>
      <div className='server-list-bg'></div>
      <div className='server-list-item-container'>
        <button className='home-btn'
          onClick={() => this.props.history.push('/channels/@me')}>
          <i className="fas fa-home"></i>
        </button>
        <div className='hover-tooltip server-list-item-hover'
          key={'server-hover-name-home'}>
          Home
        </div>
      </div>
      <div className='server-list-separator'></div>
      {servers.map(server => 
        <ServerListItem {...this.props} server={server} />
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
        <button className='server-discovery-btn'
        onClick={() => this.props.history.push('/channels/server-discovery')}>
          <i className="fas fa-search"></i>
        </button>
        <div className='hover-tooltip server-list-item-hover'
          key={'server-hover-name-server-discovery'}>
          Server Discovery
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
