import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, useHistory } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { deleteMembership } from '../../../actions/user_actions';
import { deleteChannel } from '../../../actions/channel_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { getCurrentServer, getCurrentChannel } from '../../../actions/current_actions';
import ChannelListContainer from './channels/channel_list_container';
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

  const isAdmin = currentServer && currentUser ? currentServer.admin_id === currentUser.id : false;

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
      <div className='title-txt noverflow'>{currentServerId !== '@me' ? currentServer.name : 'Home'}</div>
      {currentServer && !serverContextMenu ? svgs.openContextMenu : svgs.closeContextMenu}
      {serverContextMenu ? renderServerContextMenu() : ''}
    </div>
    <Route path='/channels/:serverId(\d+)' render={() => <ChannelListContainer key={`server-${currentServerId}-channels`} server={currentServer} />} />
    {/* <Route path='/channels/@me' component={DMListContainer} /> */}
    <div className='user-ui-container'>
      <div className='user-info-container'>
        <img className='avatar'
          src='https://i.imgur.com/3jykKJ3.jpg'
          alt={`${currentUser.username} avatar`} />
        <div className='user-info'>
          <div className='username'>
            {currentUser.username}
          </div>
          <div className='id'>
            #{currentUser.id}
          </div>
        </div>
      </div>
      <div className='btn-container'>
        <div className='ui-btn' data-tip
          onClick={() => dispatch(openModal('settings'))}>
          {svgs.gear}
          <ReactTooltip place='top' effect='solid' offset={{ bottom: 4 }}>User Settings</ReactTooltip>
        </div>
      </div>
    </div>
  </div>)
}