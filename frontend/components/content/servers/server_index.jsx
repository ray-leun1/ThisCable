import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { getServers } from '../../../actions/server_actions';
import { openModal } from '../../../actions/modal_actions';
import { logout } from '../../../actions/session_actions';
import { getCurrentServer, getCurrentChannel } from '../../../actions/current_actions';
import svgs from '../../svgs';

export default props => {
  const { currentUser, updateCurrentUser } = props;

  const dispatch = useDispatch();
  const history = useHistory();
  const currentServerId = history.location.pathname.split('/')[2];

  const [servers, setServers] = useState(useSelector(state => state.entities.servers));
  const [currentServer, setCurrentServer] = useState(useSelector(state => state.current.server));
  const [createServer, setCreateServer] = useState(false);

  useEffect(() => updateServerIndex(), [])
  
  const updateServerIndex = () => {
    dispatch(getServers()).then(data => setServers(data.servers))
      .then(updateCurrentUser());
    setCreateServer(false);
  }

  let joinedServers = [];

  if (currentUser && currentUser.joinedServerIds && Object.keys(servers).length > 0) {
    joinedServers = currentUser.joinedServerIds.map(serverId => servers[serverId]);
  }

  const handleClick = serverId => {
    dispatch(getCurrentServer(serverId)).then(data => {
      setCurrentServer(data.server);
      dispatch(getCurrentChannel(data.server.joinedChannelIds[0]))
      .then(() => history.push(`/channels/${data.server.id}/${data.server.joinedChannelIds[0]}`));
    })
  };

  const serverItems = () => (
    joinedServers.map(server => 
      server ? <div className={`server-item-container${parseInt(currentServerId) === server.id ? ' active' : ''}`}
        key={`server-item-${server.id}`}>
        <div className='active-tab'></div>
        <div className='server-item' data-tip data-for={`server-item-${server.id}`}
          onClick={() => handleClick(server.id)}>
          {server.name.split(' ').map(word => word[0].toUpperCase()).join('').slice(0, 3)}
        </div>
        <ReactTooltip id={`server-item-${server.id}`} place='right' effect='solid' offset={{ left: 2 }}>
          {server.name}
        </ReactTooltip>
      </div> : '')
  );

  return (<div className='server-index-container'>
    <div className={`server-item-container${currentServerId === '@me' ? ' active' : ''}`}>
      <div className='active-tab'></div>
      <button className='home-btn' data-tip data-for='home'
        onClick={() => history.push('/channels/@me')}>
        {svgs.logoCat}
      </button>
      <ReactTooltip id='home' place='right' effect='solid' offset={{ left: 2 }}>
        Home
      </ReactTooltip>
    </div>
    <div className='divider'></div>
    {serverItems()}
    <div className={`server-item-container${createServer ? ' active' : ''}`}>
      <div className='active-tab'></div>
      <button className='server-btn' data-tip data-for='add-server'
        onClick={() => {
          setCreateServer(true);
          dispatch(openModal('createServer', {updateServerIndex}));
        }}>
        {svgs.addServerPlus}
      </button>
      <ReactTooltip id='add-server' place='right' effect='solid' offset={{left: 2}}>
        Add a Server
      </ReactTooltip>
    </div>
    <div className={`server-item-container${currentServerId === 'server-discovery' ? ' active' : ''}`}>
      <div className='active-tab'></div>
      <button className='server-btn' data-tip data-for='server-discovery'
        onClick={() => history.push('/channels/server-discovery')}>
        {svgs.serverDiscovery}
      </button>
      <ReactTooltip id='server-discovery' place='right' effect='solid' offset={{ left: 2 }}>
        Server Discovery
      </ReactTooltip>
    </div>
    <div className='server-item-container'>
      <div className='active-tab'></div>
      <button className='server-btn' data-tip data-for='logout'
        onClick={() => dispatch(logout())}>
        {svgs.logoutMinus}
      </button>
      <ReactTooltip id='logout' place='right' effect='solid' offset={{ left: 2 }}>
        Logout
      </ReactTooltip>
    </div>
  </div>);
}