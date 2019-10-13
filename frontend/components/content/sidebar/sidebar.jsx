import React from 'react';
import { withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../../util/route_util';
// import ChannelListContainer from './channels/channel_list_container';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (<div className='sidebar-container'>
      <div className='sidebar-title-container'>
        <div className='sidebar-title'>
          {this.props.currentServer ? this.props.currentServer.name : ""}
        </div>
      </div>
      {/* <ProtectedRoute path='/channels/:serverId' component={ChannelListContainer} /> */}
      <div className='sidebar-user-ui'>
        <div className='sidebar-user-ui-info'>
          <img className='sidebar-user-ui-info-avatar'
            src='https://i.imgur.com/3jykKJ3.jpg'
            alt={`${this.props.currentUser.username} avatar`}  />
          <div className='sidebar-user-ui-info-username'>
            {this.props.currentUser.username}
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