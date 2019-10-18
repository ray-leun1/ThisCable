import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.channel.name,
      server_id: this.props.currentServerId,
      private: 'deselected',
      roles: this.props.currentServer.roles.map(role => ({
        id: role.id,
        name: role.name,
        permit: 'deselected'
      }))
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnEnter = this.handleOnEnter.bind(this);
    this.togglePrivate = this.togglePrivate.bind(this);
    this.toggleRole = this.toggleRole.bind(this);
    this.renderRoles = this.renderRoles.bind(this);
  }

  componentDidMount() {
    this.state.roles[0].permit = 'selected';
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createChannel({name: this.state.name, server_id: this.state.server_id})
      .then(channel => {
        this.state.roles.forEach(role => {
          if (this.state.private === 'selected') {
            if (role.permit === 'selected') {
              this.props.createPermission({role_id: role.id, channel_id: channel.channel.id});
            }
          } else {
            this.props.createPermission({role_id: role.id, channel_id: channel.channel.id});
          }
        })
        this.props.getChannel(channel.channel.id);
      })
        
    this.props.closeModal();
  }

  handleOnEnter(e) {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      this.handleSubmit(e);
    }
  }

  togglePrivate() {
    if (this.state.private === 'deselected') {
      this.setState({private: 'selected'});
    } else {
      this.setState({private: 'deselected'});
    }
  }

  toggleRole(id) {
    let roleIndex = this.state.roles.map(role => role.id).indexOf(id);
    let roles = Array.from(this.state.roles);

    if (roles[roleIndex].permit === 'deselected') {
      roles[roleIndex].permit = 'selected';
      this.setState({roles: roles});
    } else {
      roles[roleIndex].permit = 'deselected';
      this.setState({roles: roles});
    }
  }

  renderRoles() {
    if (this.state.private === 'selected') {
      return (<div className='create-channel-roles-container'>
        <div className='create-channel-label roles-container'>
          WHO CAN ACCESS THIS CHANNEL?
        </div>
        <div className='create-channel-private-role-container'>
          <div className='create-channel-private-role-selection'
            key={`create-channel-private-role-selection-${this.state.roles[0].id}`}>
            <div className='role-name'>
              {this.state.roles[0].name}
            </div>
            <button className={`role-selector-${this.state.roles[0].id} ${this.state.roles[0].permit}`}
              type='button'>
              <div className='role-slider'></div>
            </button>
          </div>
          {this.state.roles.slice(1).map(role => {
            return (<div className='create-channel-private-role-selection'
              key={`create-channel-private-role-selection-${role.id}`}>
              <div className='role-name'
                onClick={() => this.toggleRole(role.id)}>
                {role.name}
              </div>
              <button className={`role-selector-${role.id} ${role.permit}`}
                type='button'
                onClick={() => this.toggleRole(role.id)}>
                <div className='role-slider'></div>
              </button>
            </div>)
          })}
        </div>
      </div>)
    }
  }

  render() {
    return (<div className='create-channel-form-container'>
      <form className='create-channel-form'
        onSubmit={this.handleSubmit}>
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
              value={this.state.name}
              onChange={this.handleChange('name')}
              onKeyDown={this.handleOnEnter} />
          </label>
          <div className='create-channel-private-container'>
            <div className='create-channel-private-input-container'>
              <div className='create-channel-private-header-container'
                onClick={() => this.togglePrivate()}>
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
              <button className={`create-channel-private-checkbox ${this.state.private}`}
                type='button'
                onClick={() => this.togglePrivate()}>
                <div className='create-channel-private-slider'></div>
              </button>
            </div>
            <div className='create-channel-private-description'>
              By making a channel private, permissions to access this channel must be manually assigned to roles
            </div>
          </div>
          {this.renderRoles()}
        </div>
        <div className='create-channel-form-bottom-container'>
          <button className='create-channel-form-cancel'
            onClick={() => this.props.closeModal()}>
            Cancel
          </button>
          <input className='default-btn create-channel-form-submit'
            type='submit'
            value='Create Channel' />
        </div>
      </form>
    </div>)
  }
}

export default withRouter(CreateChannelForm);