import React from 'react';
import useDispatch from 'react-redux';
import useHistory from 'react-router-dom';
import createMembership from '../../../actions/user_actions';
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
      dispatch(getCurrentServer(server.id)).then(server => {
        history.push(`/channels/${server.id}/${server.server.joinedChannelIds[0]}`);
        dispatch(getCurrentChannel(server.server.joinedChannelIds[0]));
      })
    }
  }

  const renderJoinBtn = () => {
    if (currentUser.joinedServerIds.includes(server.id)) {
      return (<div className='server-discovery-list-item-join-btn joined'
        onClick={() => this.handleJoin('joined')}>
        <div className='join-btn-txt'>
          Joined
        </div>
        <div className='join-btn-check'>
          <i className="fas fa-check"></i>
        </div>
      </div>)
    } else {
      return (<div className='server-discovery-list-item-join-btn join'
        onClick={() => this.handleJoin('join')}>
        <div className='join-btn-txt'>
          Join
        </div>
      </div>)
    }
  }

  return (<div className='server-discovery-list-item-container'
    key={`server-discovery-list-item-container-${server.id}`}>
    <img className='server-discovery-list-item-icon'
      key={`server-discovery-list-item-icon-${server.id}`}
      src='https://i.imgur.com/Jvh1OQm.jpg'
      alt={`${server.name} icon`} />
    <div className='server-discovery-list-item-name noverflow'
      key={`server-discovery-list-item-name-${server.id}`}>
      {server.name}
    </div>
    <div className='server-discovery-list-item-join'
      key={`server-discovery-list-item-join-${server.id}`}>
      {this.renderJoinBtn()}
    </div>
  </div>)
}