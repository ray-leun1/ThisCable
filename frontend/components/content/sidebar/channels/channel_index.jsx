import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getChannels, deleteChannel } from '../../../../actions/channel_actions';
import { getCurrentChannel } from '../../../../actions/current_actions';

export default props => {
  const { currentUser, currentServer, svgs } = props;

  const dispatch = useDispatch();
  const history = useHistory();

  const currentChannelId = history.location.pathname.split('/')[3];

  const [channels, setChannels] = useState(useSelector(state => state.entities.channels));
  const [currentChannel, setCurrentChannel] = useState(useSelector(state => state.current.channel));
  const [contextMenu, setContextMenu] = useState(false);
  const [clickPos, setClickPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    dispatch(getChannels(currentServer.id)).then(data => setChannels(data.channels));
  }, [])

  const handleClick = channelId => {
    dispatch(getCurrentChannel(channelId)).then(data => {
      setCurrentChannel(data.channel);
      history.push(`/channels/${currentServer.id}/${data.channel.id}`)
    })
  }

  const handleDeleteChannel = channelId => dispatch(deleteChannel(channelId));

  const isAdmin = currentServer && currentUser ? currentServer.admin_id === currentUser.id : false;

  const handleContextMenu = e => {
    e.preventDefault();
    setClickPos({ x: e.screenX, y: e.screenY });

    setContextMenu(true);
  }

  const renderContextMenu = () => {
    if (currentServer && currentUser) {
      return (<div className='context-menu-container'>
        {isAdmin ? <div className='menu-option delete-channel noverflow'
          onClick={() => handleDeleteChannel()}>
          <div className='txt'>Delete Channel</div>
        </div> : <div className='menu-option noverflow'>
          <div className='txt'>Nothing here!</div>
          {svgs.logoCat}
        </div>}
      </div>)
    }
  }

  let joinedChannels = [];

  if (Object.keys(channels).length > 0) Object.values(channels).forEach(channel => {
    if (channel.permittedUserIds.includes(currentUser.id)) joinedChannels.push(channel);
  });

  const channelItems = () => (
    joinedChannels.map(channel =>
      <div className={`channel-tab${parseInt(currentChannel.id) === channel.id ? ' active' : ''}`}
        key={`channel-tab-${channel.id}`}
        onClick={() => handleClick(channel.id)}
        onContextMenu={e => handleContextMenu(e)}>
        <div className='title noverflow'>
          {svgs.hash}
          <div className='name noverflow'>
            {channel.name}
          </div>
        </div>
        <div className='x' hidden={!contextMenu}>
          {svgs.closeContextMenu}
        </div>
      </div>)
  );

  return (<div className='channel-index-container'>
    {channelItems()}
    {contextMenu ? renderContextMenu(clickPos) : ''}
  </div>)
}