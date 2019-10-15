import React from 'react';
import { withRouter } from 'react-router-dom';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
    this.props.closeModal();
  }

  render() {
    return (<div className='settings-container'>
      <div className='settings-container-left'>
        <div className='settings-sidebar'>
          <div className='settings-tab my-account'>
            My Account
          </div>
          <div className='settings-tab logout'
            onClick={this.handleLogout}>
            Log Out
          </div>
        </div>
      </div>
      <div className='settings-container-right'>
        <div className='settings-content'>
          <div className='settings-content-my-account'>
            <div className='settings-content-title'>
              MY ACCOUNT
            </div>
            <div className='settings-content-user-info'>
              <div className='user-info-avatar-container'>
                <img className='user-info-avatar'
                  src='https://i.imgur.com/3jykKJ3.jpg'
                  alt={`${this.props.currentUser.username} avatar`} />
              </div>
                <div className='user-info-txt-container'>
                  <div className='user-info-username'>
                    <div className='user-info-label'>
                      USERNAME
                    </div>
                    <div className='user-info-input'>
                      {this.props.currentUser.username}
                      <span className='user-info-id'>
                        #{this.props.currentUser.id}
                      </span>
                    </div>
                  </div>
                  <div className='user-info-email'>
                    <div className='user-info-label'>
                      EMAIL
                    </div>
                    <div className='user-info-input'>
                      {this.props.currentUser.email}
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className='settings-exit-container'>
          <div className='settings-exit-btn'
            onClick={() => this.props.closeModal()}>
            <i class="fas fa-times"></i>
          </div>
          <div className='settings-exit-txt'>
            ESC
          </div>
        </div>
      </div>
    </div>)
  }
}

export default withRouter(Settings);