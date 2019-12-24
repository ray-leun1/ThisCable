import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, useHistory } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { deleteMembership } from '../../../actions/user_actions';
import { openModal } from '../../../actions/modal_actions';
import { getCurrentServer } from '../../../actions/current_actions';
import ChannelListContainer from './channels/channel_list_container';
import ChannelIndex from './channels/channel_index';
import svgs from '../../svgs';

export default props => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const currentUserId = useSelector(state => state.session.id);
  let { currentUser } = props;
  const currentServer = useSelector(state => state.current.server);
  const currentServerId = history.location.pathname.split('/')[2];

  const [contextMenu, setContextMenu] = useState(false);

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

  const renderContextMenu = () => {
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
      onClick={() => setContextMenu(contextMenu ? false : true)}>
      <div className='title-txt noverflow'>{currentServerId !== '@me' && currentServer ? currentServer.name : 'Home'}</div>
      {currentServer && !contextMenu ? svgs.openContextMenu : svgs.closeContextMenu}
      {contextMenu ? renderContextMenu() : ''}
    </div>
    {currentServer ? <Route path='/channels/:serverId(\d+)' render={() => 
      <ChannelIndex key={`server-${currentServerId}-channels`}
        currentUser={currentUser}
        currentServer={currentServer}
        svgs={svgs} />} /> : ''}
    {/* <Route path='/channels/@me' component={DMListContainer} /> */}
    <div className='user-ui-container'>
      <div className='user-info-container'>
        <div className='avatar'
          style={currentUser.profile_img_url
            ? { backgroundImage: `url(${currentUser.profile_img_url})` }
            : { background: '#7289da' }}>
          {currentUser.profile_img_url ? '' : svgs.logoCat}
        </div>
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