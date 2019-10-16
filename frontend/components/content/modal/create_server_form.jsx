import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.server.name,
      admin_id: this.props.currentUserId
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => this.setState({[field]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createServer(this.state)
      .then(server => {
        this.props.history.push(`/channels/${server.server.id}/${server.server.joinedChannelIds[0]}`);
        this.props.getCurrentServer(server.server.id);
        this.props.getCurrentChannel(server.server.joinedChannelIds[0]);
      });

    this.props.closeModal();
  }

  render() {
    return (<div className='create-server-form-container'>
      <form className='create-server-form'
        onSubmit={this.handleSubmit}>
        <div className='create-server-form-container-top'>
          <div className='create-server-form-title'>CREATE YOUR SERVER</div>
          <div className='create-server-form-text'>
            By creating a server you will have access to <strong>free</strong> text chat to use amongst yourself.
          </div>

          <div className='create-server-form-input-container'>
            <div className='create-server-form-input-container-left'>
              <label className='create-server-label'>SERVER NAME
                <input className='create-server-input-name'
                  type='text'
                  value={this.state.name}
                  placeholder='Enter a server name'
                  onChange={this.handleChange('name')} />
              </label>
              <div className='create-server-input-region-container'>
                <label className='create-server-label'>SERVER REGION
                  <div className='create-server-input-region-btn'>
                    <div className='create-server-input-region'>
                      <img className='create-server-input-region-flag'
                        src='#'
                        alt='US West Flag' />
                      <span className='create-server-input-region-text'>
                        US West
                      </span>
                    </div>
                    <div className='create-server-input-region-change-btn'>
                      Change
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div className='create-server-form-input-container-right'>
              <div className='create-server-input-icon-container'>
                <div className='create-server-input-icon-btn'>
                  <img className='create-server-input-icon'
                    src='#'
                    alt='Server Icon'/>
                </div>
                <span className='create-server-input-icon-txt'>
                  Minimum Size: <strong>128x128</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='create-server-form-bottom-container'>
          <button className='create-server-form-back'
            onClick={() => this.props.closeModal()}>
            BACK
          </button>
          <input className='default-btn create-server-form-submit'
            type='submit'
            value='Create' />
        </div>
      </form>
    </div>)
  }
}

export default withRouter(CreateServerForm);