import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }
  
  handleDemo(e) {
    e.preventDefault();
    this.props.processDemo();
  }

  handleChange(field) {
    return e => this.setState({[field]: e.currentTarget.value})
  }

  renderErrors() {
    return (<div className='errors'>
      {this.props.errors.map((error, i) => 
        <li key={`error-${i}`}>{error}</li>
      )}
    </div>)
  }

  render() {
    let submitStr = this.props.formType === 'login' ? 'Login' : 'Sign Up';
    let titleStr = this.props.formType === 'login' ? 'Welcome back!' : 'Create an account'

    return (<div className='session-form-container'>
      <form className='session-form'
        onSubmit={this.handleSubmit}>
        <div className='session-form-title'>{titleStr}</div>
        
        {this.renderErrors()}

        <div className='session-input-container'>
          <label className='session-label'>Email:
            <input className='session-input'
              type="text"
              value={this.state.email}
              onChange={this.handleChange('email')} />
          </label>
          <label className='session-label'
            hidden={this.props.formType === 'login'}>Username:
            <input className='session-input'
              type="text"
              value={this.state.username}
              onChange={this.handleChange('username')} />
          </label>
          <label className='session-label'>Password:
            <input className='session-input'
              type="password"
              value={this.state.password}
              onChange={this.handleChange('password')} />
          </label>
          <input className='default-btn session-form-submit-btn'
            type="submit"
            value={submitStr} />
          <button
            className='default-btn session-form-submit-btn'
            onClick={this.handleDemo}>
            Demo Login
          </button>
        </div>
      </form>
      {this.props.navLink}
    </div>)
  }
}

export default withRouter(SessionForm);