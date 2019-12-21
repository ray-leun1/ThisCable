import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUser, deleteMembership } from '../../../actions/user_actions';
import { getServer, deleteServer } from '../../../actions/server_actions';
import { deleteChannel } from '../../../actions/channel_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { getCurrentUser, getCurrentServer, getCurrentChannel } from '../../../actions/current_actions';
import svgs from '../../svgs';

// const mapDispatchToProps = dispatch => ({
//   getUser: id => dispatch(getUser(id)),
//   deleteMembership: serverId => dispatch(deleteMembership(serverId)),
//   getServer: id => dispatch(getServer(id)),
//   deleteServer: id => dispatch(deleteServer(id)),
//   deleteChannel: id => dispatch(deleteChannel(id)),
//   openModal: item => dispatch(openModal(item)),
//   closeModal: () => dispatch(closeModal()),
//   getCurrentUser: userId => dispatch(getCurrentUser(userId)),
//   getCurrentServer: serverId => dispatch(getCurrentServer(serverId)),
//   getCurrentChannel: channelId => dispatch(getCurrentChannel(channelId))
// });

export default props => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const currentUserId = useSelector(state => state.session.id);
  let { currentUser } = props;
  const currentServer = useSelector(state => state.current.server);
  const currentServerId = history.location.pathname.split('/')[2];

  const [serverContextMenu, setServerContextMenu] = useState(false);

  useEffect(() => {
    if (!currentUser) dispatch(getCurrentUser(currentUserId));
    if (!currentServer) dispatch(getCurrentServer(parseInt(currentServerId)));
  }, [])

  const handleLeaveServer = () => {
    dispatch(deleteMembership(currentServerId));
    history.push('/channels/@me');
  }

  const handleDeleteServer = () => {
    dispatch(deleteServer(parseInt(currentServerId)));
    history.push('/channels/@me');
  }
debugger
  const isAdmin = currentServer && currentUser ? currentServer.admin_id === currentUser.id : false;
  debugger
  const renderServerContextMenu = () => {
    if (currentServer && currentUser) {
      return (<div className='context-menu-container'>
        {isAdmin ? <div className='menu-option noverflow'
          onClick={() => dispatch(openModal('create channel'))}>
          <div className='txt'>Create Channel</div>
          {svgs.createChannel}
        </div> : ''}
        <div className='menu-option leave-server noverflow'
          onClick={() => isAdmin ? handleDeleteServer() : handleLeaveServer()}>
          <div className='txt'>{isAdmin ? 'Delete Server' : 'Leave Server'}</div>
          {svgs.leaveServer}
        </div>
      </div>)
    }
  }

  return (<div className='sidebar-container'>
    <div className='title-container'
      onClick={() => setServerContextMenu(serverContextMenu ? false : true)}>
      <div className='title-txt noverflow'>{currentServer ? currentServer.name : 'Home'}</div>
      {currentServer && !serverContextMenu ? svgs.openContextMenu : svgs.closeContextMenu}
      {serverContextMenu ? renderServerContextMenu() : ''}
    </div>
    {/* <Route path='/channels/:serverId(\d+)' render={() => <ChannelListContainer key={parseInt(this.props.location.pathname.split('/')[2])} />} /> */}
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