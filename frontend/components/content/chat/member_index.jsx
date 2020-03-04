import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../actions/user_actions';
import svgs from '../../svgs';

export default props => {
  const { currentChannel } = props;

  const dispatch = useDispatch();

  const [users, setUsers] = useState(useSelector(state => state.entities.users));

  useEffect(() => {
    dispatch(getUsers()).then(data => setUsers(data.users));
  }, [])

  const renderMembers = () => {
    if (currentChannel && users) {
      let channelUsers = [];

      currentChannel.permittedUserIds.forEach(userId => {
        let user = users[userId];

        if (user) {
          channelUsers.push(<div className='member-index-item'
            key={`member-index-item-${userId}`}>
            <div className='member-index-item-icon'
              style={user.profile_img_url
                ? { backgroundImage: `url(${user.profile_img_url})` }
                : { background: '#7289da' }}>
              {user.profile_img_url ? '' : svgs.logoCat}
            </div>
            <div className='member-index-item-username noverflow'>
              {user.username}
            </div>
          </div>)
        }
      })

      return channelUsers;
    }
  }

  return (<div className='member-index-container'>
    {renderMembers()}
  </div>)
}