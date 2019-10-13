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
          <div className='no-select settings-tab my-account'>
            My Account
          </div>
          <div className='no-select settings-tab logout'
            onClick={this.handleLogout}>
            Log Out
          </div>
        </div>
      </div>
      <div className='settings-container-right'>
        <div className='settings-content'>
          Stuff here
        </div>
      </div>
      <div className='settings-exit-container'>
        <div className='settings-exit-btn'>

        </div>
        <div className='settings-exit-txt'>
          ESC
        </div>
      </div>
    </div>)
  }
}

export default withRouter(Settings);