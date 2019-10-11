import React from 'react';
import { withRouter } from 'react-router-dom';

class Sidebar extends React.Component {
  render() {
    return (<div className='settings-container'>
      <div className='sidebar-title'>

      </div>
      <div className='sidebar-user-ui'>
        <i className="fas fa-cog"
          onClick={() => this.props.openModal('settings')}></i>
      </div>
    </div>)
  }
}

export default withRouter(Sidebar);