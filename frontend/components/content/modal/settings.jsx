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
          <div className='no-select settings-tab logout'>
            Log Out
          </div>
        </div>
      </div>
      <div className='settings-container-right'>
        <div className='settings-content'>

        </div>
      </div>
    </div>)
  }
}

export default withRouter(Settings);