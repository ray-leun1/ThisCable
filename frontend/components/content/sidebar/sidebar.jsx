import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import ChannelListContainer from './channels/channel_list_container';
import DMListContainer from '../servers/dm_list_container';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serverContextMenu: 'hide'
    }

    this.handleLeaveServer = this.handleLeaveServer.bind(this);
    this.handleDeleteServer = this.handleDeleteServer.bind(this);
    this.toggleContextMenu = this.toggleContextMenu.bind(this);
    this.renderTitleTxt = this.renderTitleTxt.bind(this);
  }

  componentDidMount() {
    if (!this.props.currentUser) {
      this.props.getCurrentUser(this.props.currentUserId);
    }
    if (!this.props.currentServer) {
      this.props.getCurrentServer(parseInt(this.props.location.pathname.split('/')[2]));
    }
  }

  componentDidUpdate(prevProps) {
    if (!this.props.currentUser) {
      this.props.getCurrentUser(this.props.currentUserId);
    }
    if (!this.props.currentServer) {
      this.props.getCurrentServer(parseInt(this.props.location.pathname.split('/')[2]));
    }
    if ((prevProps.currentUser && this.props.currentUser) &&
      (prevProps.currentUser.joinedServerIds && this.props.currentUser.joinedServerIds)) {
      if (prevProps.currentUser.joinedServerIds.length
        !== this.props.currentUser.joinedServerIds.length) {
        this.props.getUser(this.props.currentUser.id);
      }
    }
    if (prevProps.match.params.serverId !== this.props.match.params.serverId) {
      this.props.getServer(this.props.match.params.serverId);
    }
  }

  handleLeaveServer() {
    this.props.deleteMembership(this.props.currentServer.id);
    this.props.history.push('/channels/@me');
  }

  handleDeleteServer() {
    this.props.deleteServer(parseInt(this.props.match.params.serverId));
    this.props.history.push('/channels/@me');
  }

  toggleContextMenu() {
    if (this.state.serverContextMenu === 'hide') {
      this.setState({serverContextMenu: 'show'});
    } else {
      this.setState({serverContextMenu: 'hide'});
    }
  }

  renderServerContextMenu() {
    if (this.props.currentServer && this.props.currentUser) {
      if (this.props.currentServer.admin_id === this.props.currentUser.id) {
        return (<div className={`server-menu-container ${this.state.serverContextMenu}`}>
          <div className='server-menu-option noverflow'
            onClick={() => this.props.openModal('create channel')}>
            <div className='server-menu-option-txt'>
              Create Channel
            </div>
            <div className='server-menu-option-icon'>
              <i className="fas fa-plus-circle"></i>
            </div>
          </div>
          <div className='server-menu-option leave-server noverflow'
            onClick={() => this.handleDeleteServer()}>
            <div className='server-menu-option-txt'>
              Delete Server
            </div>
            <div className='server-menu-option-icon'>
              <i className="fas fa-sign-out-alt"></i>
            </div>
          </div>
        </div>)
      } else {
        return (<div className={`server-menu-container ${this.state.serverContextMenu}`}>
          <div className='server-menu-option leave-server noverflow'
            onClick={() => this.handleLeaveServer()}>
            <div className='server-menu-option-txt'>
              Leave Server
            </div>
            <div className='server-menu-option-icon'>
              <i className="fas fa-sign-out-alt"></i>
            </div>
          </div>
        </div>)
      }
    }
  }

  renderTitleTxt() {
    if (this.props.currentServer) {
      return this.props.currentServer.name;
    } else {
      return 'Home';
    }
  }

  renderTitleV() {
    if (this.props.currentServer) {
      if (this.state.serverContextMenu === 'hide') {
        return <i className="fas fa-chevron-down"></i>
      } else {
        return <i className="fas fa-times"></i>
      }
    }
  }

  render() {
    let currentUser = this.props.currentUser;
    if (!currentUser) currentUser = {username: '', id: ''};
    return (<div className='sidebar-container'>
      <div className='sidebar-title-container'
        onClick={() => this.toggleContextMenu()}>
        <div className='sidebar-title-txt noverflow'>
          {this.renderTitleTxt()}
        </div>
        <div className='sidebar-title-v'>
          {this.renderTitleV()}
        </div>
        {this.renderServerContextMenu()}
      </div>
      <Route path='/channels/:serverId(\d+)' render={() => <ChannelListContainer key={parseInt(this.props.location.pathname.split('/')[2])} />} />
      {/* <Route path='/channels/@me' component={DMListContainer} /> */}
      <div className='sidebar-user-ui'>
        <div className='sidebar-user-ui-info'>
          <img className='sidebar-user-ui-info-avatar'
            src='https://i.imgur.com/3jykKJ3.jpg'
            alt={`${currentUser.username} avatar`} />
          <div className='sidebar-user-ui-info-user'>
            <div className='sidebar-user-ui-info-username'>
              {currentUser.username}
            </div>
            <div className='sidebar-user-ui-info-id'>
              #{currentUser.id}
            </div>
          </div>
        </div>
        <div className='sidebar-user-ui-btn-container'>
          <div className='sidebar-user-ui-cog-container'>
            <div className='sidebar-user-ui-btn'
              onClick={() => this.props.openModal('settings')}>
              <i className="fas fa-cog"></i>
            </div>
            <div className='hover-tooltip sidebar-user-ui-btn-hover'
              key={'sidebar-user-ui-btn-settings'}>
              User Settings
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}

export default withRouter(Sidebar);