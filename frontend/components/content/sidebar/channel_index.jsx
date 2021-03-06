import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import { getChannels, deleteChannel } from '../../../actions/channel_actions';
import { getCurrentChannel } from '../../../actions/current_actions';

export default props => {
  const { currentUser, currentServer, svgs } = props;

  const dispatch = useDispatch();
  const history = useHistory();

  const currentChannelId = history.location.pathname.split('/')[3];

  const [channels, setChannels] = useState(useSelector(state => state.entities.channels));
  const [currentChannel, setCurrentChannel] = useState(useSelector(state => state.current.channel));
  useEffect(() => {
    dispatch(getChannels(currentServer.id)).then(data => setChannels(data.channels));
  }, [])

  const handleClick = channelId => {
    dispatch(getCurrentChannel(channelId)).then(data => {
      setCurrentChannel(data.channel);
      history.push(`/channels/${currentServer.id}/${data.channel.id}`)
    })
  }

  const isAdmin = currentServer && currentUser ? currentServer.admin_id === currentUser.id : false;
  let joinedChannels = [];

  if (Object.keys(channels).length > 0) Object.values(channels).forEach(channel => {
    if (channel.permittedUserIds.includes(currentUser.id)) joinedChannels.push(channel);
  });

  const channelItems = () => (
    joinedChannels.map(channel =>
      <div className='context-menu-wrapper' key={`channel-tab-${channel.id}`}>
        <ContextMenuTrigger id={`channel-tab-${channel.id}`}>
          <div className={`channel-tab${parseInt(currentChannel.id) === channel.id ? ' active' : ''} noverflow`}
            onClick={() => handleClick(channel.id)}>
            {svgs.hash}
            <div className='name noverflow'>
              {channel.name}
            </div>
          </div>
        </ContextMenuTrigger>
        <ContextMenu id={`channel-tab-${channel.id}`} className='context-menu-container'>
          {isAdmin ? <MenuItem className='menu-option delete-channel noverflow'
            onClick={() => dispatch(deleteChannel(channel.id))}>
            <div className='txt'>Delete Channel</div>
          </MenuItem> : <MenuItem className='menu-option noverflow'>
              <div className='txt'>Nothing here!</div>
              {svgs.logoCat}
            </MenuItem>}
        </ContextMenu>
      </div>)
  );

  return (<div className='channel-index-container'>
    {channelItems()}
  </div>)
}