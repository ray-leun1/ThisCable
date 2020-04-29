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
  const [private, setPrivate] = useState('deselected');
  const [roles, setRoles] = useState(currentServer.roles.map(role => ({
    id: role.id,
    name: role.name,
    permit: 'deselected'
  })));

  useEffect(() => roles[0].permit = 'selected', [])

  const handleSubmit = () => {
    e.preventDefault();

    dispatch(createChannel({ name, server_id: serverId }))
      .then(data => {
        roles.forEach(role => {
          if (private === 'selected' && role.permit === 'selected') {
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

  const togglePrivate = () => setPrivate(private === 'selected' ? 'deselected' : 'selected');

  const toggleRole = id => {
    let roleIdx = roles.map(role => role.id).indexOf(id);
    let roleList = Array.from(roles);

    if (roleList[roleIdx].permit === 'deselected') roleList[roleIdx].permit = 'selected';
    else roleList[roleIdx].permit = 'deselected';

    setRoles(roleList);
  }

  const renderRoles = () => {
    if (private === 'selected') {
      return (<div className='create-channel-roles-container'>
        <div className='create-channel-label roles-container'>
          WHO CAN ACCESS THIS CHANNEL?
        </div>
        <div className='create-channel-private-role-container'>
          <div className='create-channel-private-role-selection'
            key={`create-channel-private-role-selection-${roles[0].id}`}>
            <div className='role-name'>
              {roles[0].name}
            </div>
            <button className={`role-selector-${roles[0].id} ${roles[0].permit}`}
              type='button'>
              <div className='role-slider'></div>
            </button>
          </div>
          {roles.slice(1).map(role => {
            return (<div className='create-channel-private-role-selection'
              key={`create-channel-private-role-selection-${role.id}`}>
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
    <form className='create-channel-form'
      onSubmit={handleSubmit}>
      <div className='create-channel-form-header'>
        CREATE TEXT CHANNEL
      </div>
      <div className='create-channel-form-input-container'>
        <div className='create-channel-checkbox-container'>
          <div className='create-channel-label'>
            CHANNEL TYPE
          </div>
          <div className='create-channel-checkbox-text-container'>
            <label className='form-checkbox-wrapper create-channel-checkbox'>
              {/* <input className='form-checkbox-input'
                type='radio'
                checked /> */}
              <i className="fas fa-check"></i>
            </label>
            <div className='create-channel-input-text'>
              <div className='create-channel-input-text-hash'>
                <i className='fas fa-hashtag'></i>
              </div>
              <div className='create-channel-input-text-txt'>
                Text Channel
              </div>
            </div>
          </div>
        </div>
        <label className='create-channel-input-name-container'>
          <div className='create-channel-label'>
            CHANNEL NAME
          </div>
          <input className='create-channel-input-name'
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
            onKeyDown={handleOnEnter} />
        </label>
        <div className='create-channel-private-container'>
          <div className='create-channel-private-input-container'>
            <div className='create-channel-private-header-container'
              onClick={() => togglePrivate()}>
              <div className='create-channel-private-header-lock'>
                <i className="fas fa-lock"></i>
              </div>
              <div className='create-channel-private-header-txt'>
                Private Channel
              </div>
            </div>
            {/* <button className='create-channel-private-checkbox'
              type='button'
              onClick={() => this.togglePrivate()} /> */}
            <button className={`create-channel-private-checkbox ${private}`}
              type='button'
              onClick={() => togglePrivate()}>
              <div className='create-channel-private-slider'></div>
            </button>
          </div>
          <div className='create-channel-private-description'>
            By making a channel private, permissions to access this channel must be manually assigned to roles
          </div>
        </div>
        {renderRoles()}
      </div>
      <div className='create-channel-form-bottom-container'>
        <button className='create-channel-form-cancel'
          onClick={() => dispatch(closeModal())}>
          Cancel
        </button>
        <input className='default-btn create-channel-form-submit'
          type='submit'
          value='Create Channel' />
      </div>
    </form>
  </div>)
}