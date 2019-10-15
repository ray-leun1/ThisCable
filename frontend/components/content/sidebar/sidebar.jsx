import React from 'react';
import { withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../../util/route_util';
import ChannelListContainer from './channels/channel_list_container';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serverContextMenu: 'hide'
    }

    this.handleLeave = this.handleLeave.bind(this);
    this.toggleContextMenu = this.toggleContextMenu.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.serverId !== this.props.match.params.serverId) {
      this.props.getServer(this.props.match.params.serverId);
    }
  }

  handleLeave() {
    this.props.deleteMembership(this.props.currentServer.id);
    this.props.history.push(`/channels`);
  }

  toggleContextMenu() {
    if (this.state.serverContextMenu === 'hide') {
      this.setState({serverContextMenu: 'show'});
    } else {
      this.setState({serverContextMenu: 'hide'});
    }
  }

  renderServerContextMenu() {
    return (<div className={`server-menu-container ${this.state.serverContextMenu}`}>
      <div className='server-menu-option leave-server noverflow'
        onClick={() => this.handleLeave()}>
        <div className='server-menu-option-txt'>
          Leave Server
        </div>
        <div className='server-menu-option-icon'>
          <i class="fas fa-sign-out-alt"></i>
        </div>
      </div>
    </div>)
  }

  renderTitleV() {
    if (this.state.serverContextMenu === 'hide') {
      return <i class="fas fa-chevron-down"></i>
    } else {
      return <i class="fas fa-times"></i>
    }
  }

  render() {
    return (<div className='sidebar-container'>
      <div className='sidebar-title-container'
        onClick={() => this.toggleContextMenu()}>
        <div className='sidebar-title-txt noverflow'>
          {this.props.currentServer ? this.props.currentServer.name : ""}
        </div>
        <div className='sidebar-title-v'>
          {this.renderTitleV()}
        </div>
        {this.renderServerContextMenu()}
      </div>
      <ProtectedRoute path='/channels/:serverId' component={ChannelListContainer} />
      <div className='sidebar-user-ui'>
        <div className='sidebar-user-ui-info'>
          <img className='sidebar-user-ui-info-avatar'
            src='https://i.imgur.com/3jykKJ3.jpg'
            alt={`${this.props.currentUser.username} avatar`}  />
          <div className='sidebar-user-ui-info-user'>
            <div className='sidebar-user-ui-info-username'>
              {this.props.currentUser.username}
            </div>
            <div className='sidebar-user-ui-info-id'>
              #{this.props.currentUser.id}
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