import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getServers } from '../../../actions/server_actions';
import { openModal } from '../../../actions/modal_actions';
import { logout } from '../../../actions/session_actions';
import { getCurrentUser, getCurrentServer } from '../../../actions/current_actions';
import ServerIndexItem from './server_index_item';
import svgs from '../../svgs';

export default () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUserId = useSelector(state => state.session.id);
  const currentUser = useSelector(state => state.current.user);
  const currentServerId = history.location.pathname.split('/')[2];

  const [servers, setServers] = useState(useSelector(state => state.entities.servers));
  const [currentServer, setCurrentServer] = useState(useSelector(state => state.current.server));
  const [addServerHover, setAddServerHover] = useState(false);
  const [serverDiscoveryHover, setServerDiscoveryHover] = useState(false);
  const [logoutHover, setLogoutHover] = useState(false);


  useEffect(() => {
    dispatch(getServers()).then(data => setServers(data.servers));
    dispatch(getCurrentServer(currentServerId)).then(data => setCurrentServer(data.server));
    dispatch(getCurrentUser(currentUserId));
  }, [])

  let joinedServers = [];

  if (currentUser && currentUser.joinedServerIds && Object.keys(servers).length > 0) {
    joinedServers = currentUser.joinedServerIds.map(serverId => servers[serverId]);
  }

  return (<div className='server-index-container'>
    <div className='server-list-item-container'>
      <button className='home-btn'
        onClick={() => history.push('/channels/@me')}>
        <i className="fas fa-home"></i>
      </button>
      <div className='hover-tooltip server-list-item-hover'
        key={'server-hover-name-home'}>
        Home
      </div>
    </div>
    <div className='server-list-separator'></div>
    {joinedServers.map(server => <ServerIndexItem history={history} server={server} />)}
    <div className='server-list-item-container'>
      <button className={`server-btn add-server${addServerHover ? ' has-tooltip' : ''}`}
        onClick={() => dispatch(openModal('create server'))}
        onMouseEnter={() => setAddServerHover(true)}
        onMouseLeave={() => setAddServerHover(false)}>
        {svgs.addServerPlus}
      </button>
    </div>
    <div className='server-list-item-container'>
      <button className='server-btn server-discovery'
        onClick={() => history.push('/channels/server-discovery')}>
        {svgs.serverDiscovery}
      </button>
      <div className='hover-tooltip server-list-item-hover'
        key={'server-hover-name-server-discovery'}>
        Server Discovery
      </div>
    </div>
    <div className='server-list-item-container'>
      <button className='server-btn logout'
        onClick={() => dispatch(logout())}>
        {svgs.logoutMinus}
      </button>
      <div className='hover-tooltip server-list-item-hover'
        key={'server-hover-name-logout'}>
        Logout
      </div>
    </div>
  </div>);
}