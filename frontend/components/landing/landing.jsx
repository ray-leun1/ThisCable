import React from 'react';
import { Link } from 'react-router-dom';

class Landing extends React.Component {
  render() {
    let hidden = this.props.currentUserId;
    let currentUsername = this.props.currentUser ?
      this.props.currentUser.username : null;

    return(<div className='landing-container'>
      <nav>
        <div className='nav-left'>
          Download Nitro Jobs Developers Community Support
        </div>
        <ul className='nav-right'>
          <li hidden={hidden}>
            <Link to='/login'>Log In</Link>
          </li>
          <li hidden={hidden}>
            <button onClick={this.props.loginDemo}>Demo Login</button>
          </li>
          <li hidden={!hidden}>
            <button onClick={this.props.logout}>Log Out</button>
          </li>
          <span hidden={!hidden}>{currentUsername}</span>
        </ul>
      </nav>
    </div >)
  }
}

export default Landing