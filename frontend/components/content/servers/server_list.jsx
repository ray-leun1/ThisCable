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
    // if (!this.props.currentUser) {
    //   this.props.getServers();
    //   this.props.getUser(this.props.currentUserId);
    //   this.props.getCurrentUser(this.props.currentUserId);
    // }
    // if (prevProps.currentUser
    //   && prevProps.currentUser.joinedServerIds) {
    //   if (prevProps.currentUser.joinedServerIds.length
    //     !== this.props.currentUser.joinedServerIds.length) {
    //     this.props.getServers();
    //     this.props.getUser(this.props.currentUserId);
    //     this.props.getCurrentUser(this.props.currentUserId);
    //   }
    // }
    // let prevCurrentUser = prevProps.users[this.props.currentUserId - 1];
    // let currCurrentUser = this.props.users[this.props.currentUserId - 1];
    // if (prevCurrentUser.joinedServerIds
    //   && prevCurrentUser.joinedServerIds.length !== currCurrentUser.joinedServerIds.length) {
    //   this.props.getUser(this.props.currentUserId);
    // }
  }

  render() {
    let servers = [];
    let currentUser = this.props.users[this.props.currentUserId - 1];
    if (currentUser.joinedServerIds) {
      servers = this.props.servers.filter(server =>
        currentUser.joinedServerIds.includes(server.id))
    }

    return (<div className='server-list'>
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
