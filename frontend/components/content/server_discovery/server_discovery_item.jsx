import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createMembership } from '../../../actions/user_actions';
import { getCurrentServer, getCurrentChannel } from '../../../actions/current_actions';

export default props => {
  const { currentUser, server } = props;

  const dispatch = useDispatch();
  const history = useHistory();

  const handleJoin = join => {
    if (join === 'join') {
      dispatch(createMembership({
        user_id: currentUser.id,
        server_id: server.id
      })).then(() => {
        dispatch(getCurrentServer(server.id)).then(data => {
          history.push(`/channels/${server.id}/${data.server.joinedChannelIds[0]}`);
          dispatch(getCurrentChannel(data.server.joinedChannelIds[0]));
        })
      })
    } else {
      dispatch(getCurrentServer(server.id)).then(data => {
        history.push(`/channels/${server.id}/${data.server.joinedChannelIds[0]}`);
        dispatch(getCurrentChannel(data.server.joinedChannelIds[0]));
      })
    }
  }

  const renderJoinBtn = () => {
    if (currentUser.joinedServerIds.includes(server.id)) {
      return (<div className='item-join-btn joined'
        onClick={() => handleJoin('joined')}>
        <div className='join-btn-txt'>
          Joined
        </div>
        <div className='join-btn-check'>
          <i className='fas fa-check'></i>
        </div>
      </div>)
    } else {
      return (<div className='item-join-btn join'
        onClick={() => handleJoin('join')}>
        <div className='join-btn-txt'>
          Join
        </div>
      </div>)
    }
  }

  return (<div className='list-item-container'>
    <img className='item-icon'
      key={`item-icon-${server.id}`}
      src='https://i.imgur.com/Jvh1OQm.jpg'
      alt={`${server.name} icon`} />
    <div className='item-name noverflow'>
      {server.name}
    </div>
    <div className='item-join'>
      {renderJoinBtn()}
    </div>
  </div>)
}