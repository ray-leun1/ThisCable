import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Landing extends React.Component {
  render() {
    let hidden = this.props.currentUserId;
    let currentUsername = this.props.currentUser ?
      this.props.currentUser.username : null;

    return(<div className='landing-container'>
      <nav>
        <div className='nav-left'>
          <div className='logo-container'>
            <div className='logo-image'></div>
            <div className='logo-txt'></div>
          </div>
          <div className='github-link'>
            <a href='https://github.com/ray-leun1/ThisCable'>
              <i className="fab fa-github"></i>
              GitHub
            </a>
          </div>
        </div>
        <div className='nav-right'>
          <div hidden={hidden}>
            <Link to='/login'><button>Log In</button></Link>
          </div>
          <div hidden={hidden}>
            <button onClick={this.props.loginDemo}>Demo Login</button>
          </div>
          <div hidden={!hidden}>
            <button onClick={this.props.logout}>Log Out</button>
          </div>
          <span hidden={!hidden}>{currentUsername}</span>
        </div>
      </nav>

    </div >)
  }
}

export default withRouter(Landing)