import React from 'react';
import { Link } from 'react-router-dom';

class Landing extends React.Component {
  render() {
    return(<div className='landing-container'>
      <nav>
        <Link to='/login' className='landing-login'>Log In</Link>
        <button onClick={this.props.logout}>Log Out</button>
      </nav>
    </div >)
  }
}

export default Landing