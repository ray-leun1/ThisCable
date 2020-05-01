import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChannels, createChannel } from '../../../actions/channel_actions';
import { createPermission } from '../../../actions/permission_actions';
import { closeModal } from '../../../actions/modal_actions';

export default props => {
  const dispatch = useDispatch();

  const currentServer = useSelector(state => state.current.server);
  const serverId = useSelector(state => state.current.server.id);

  const [name, setName] = useState('');
  const [privateSlider, setPrivateSlider] = useState('deselected');
  const [roles, setRoles] = useState(currentServer.roles.map(role => ({
    id: role.id,
    name: role.name,
    permit: 'deselected'
  })));

  useEffect(() => {
    let roleList = roles;
    roleList[0].permit = 'selected';
    setRoles(roleList);
  }, [])

  const handleSubmit = () => {
    e.preventDefault();

    dispatch(createChannel({ name, server_id: serverId }))
      .then(data => {
        roles.forEach(role => {
          if (privateSlider === 'selected' && role.permit === 'selected') {
            dispatch(createPermission({ role_id: role.id, channel_id: data.channel.id }));
          }
        })

        dispatch(getChannels(data.channel.server_id));
      });

    dispatch(closeModal());
  }

  const handleOnEnter = e => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      handleSubmit(e);
    }
  }

  const togglePrivate = () => setPrivateSlider(privateSlider === 'selected' ? 'deselected' : 'selected');

  const toggleRole = id => {
    let roleIdx = roles.map(role => role.id).indexOf(id);
    let roleList = Array.from(roles);

    if (roleList[roleIdx].permit === 'deselected') roleList[roleIdx].permit = 'selected';
    else roleList[roleIdx].permit = 'deselected';

    setRoles(roleList);
  }

  const renderRoles = () => {
    if (privateSlider === 'selected') {
      return (<div className='roles-container'>
        <div className='create-channel-label roles-label'>
          WHO CAN ACCESS THIS CHANNEL?
        </div>
        <div className='private-role-container'>
          <div className='role-selection'
            key={`role-selection-${roles[0].id}`}>
            <div className='role-name'>
              {roles[0].name}
            </div>
            <button className={`role-selector-${roles[0].id} ${roles[0].permit}`}
              type='button'>
              <div className='role-slider'></div>
            </button>
          </div>
          {roles.slice(1).map(role => {
            return (<div className='role-selection'
              key={`role-selection-${role.id}`}>
              <div className='role-name'
                onClick={() => toggleRole(role.id)}>
                {role.name}
              </div>
              <button className={`role-selector-${role.id} ${role.permit}`}
                type='button'
                onClick={() => toggleRole(role.id)}>
                <div className='role-slider'></div>
              </button>
            </div>)
          })}
        </div>
      </div>)
    }
  }

  return (<div className='create-channel-form-container'>
    <form onSubmit={handleSubmit}>
      <div className='header'>
        CREATE TEXT CHANNEL
      </div>
      <div className='input-container'>
        <div className='checkbox-container'>
          <div className='create-channel-label'>
            CHANNEL TYPE
          </div>
          <div className='text-container'>
            <label className='form-checkbox-wrapper checkbox'>
              {/* <input className='form-checkbox-input'
                type='radio'
                checked /> */}
              <i className="fas fa-check"></i>
            </label>
            <div className='input-text'>
              <div className='hash'>
                <i className='fas fa-hashtag'></i>
              </div>
              <div className='txt'>
                Text Channel
              </div>
            </div>
          </div>
        </div>
        <label className='name-container'>
          <div className='create-channel-label'>
            CHANNEL NAME
          </div>
          <input className='input-name'
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
            onKeyDown={handleOnEnter} />
        </label>
        <div className='private-container'>
          <div className='slider-container'>
            <div className='header-container'
              onClick={() => togglePrivate()}>
              <div className='lock'>
                <i className="fas fa-lock"></i>
              </div>
              <div className='txt'>
                Private Channel
              </div>
            </div>
            <button className={`checkbox ${privateSlider}`}
              type='button'
              onClick={() => togglePrivate()}>
              <div className='slider'></div>
            </button>
          </div>
          <div className='description'>
            By making a channel private, permissions to access this channel must be manually assigned to roles
          </div>
        </div>
        {renderRoles()}
      </div>
      <div className='bottom-container'>
        <button className='cancel-btn'
          onClick={() => dispatch(closeModal())}>
          Cancel
        </button>
        <input className='default-btn submit-btn'
          type='submit'
          value='Create Channel' />
      </div>
    </form>
  </div>)
}