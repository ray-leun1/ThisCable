import React from 'react';

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

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }
  
  handleDemo() {
    const demoUser = {email: 'testEmail@cord.com', password: 'password'};
    this.props.processForm(demoUser);
  }

  handleChange(field) {
    return e => this.setState({[field]: e.currentTarget.value})
  }

  render() {
    const inputUsername = this.props.formType === 'signup' ? 
      (<label className='session-input'>Username:
        <input type="text"
        value={this.state.username}
        onChange={this.handleChange('username')} />
      </label>)
      : '';
    
    let loginStr = 'Login';
    let signupStr = 'Sign Up';
    let formTypeStr = this.props.formType === 'login' ? loginStr : signupStr;
    let hidden = this.props.formType === 'signup';

    return (<div className='session-form-container'>
      <form className='session-form'
        onSubmit={this.handleSubmit}>
        <div className='title'>{formTypeStr}</div>
        
        <div className='errors'>{this.props.errors.map((error, i) => {
          return (<li key={`error-${i}`}>{error}</li>)
        })}</div>

        <div className='session-input-container'>
          <label className='session-input'>Email:
            <input type="text"
              value={this.state.email}
              onChange={this.handleChange('email')}/>
          </label>
          {inputUsername}
          <label className='session-input'>Password:
            <input type="text"
              value={this.state.password}
              onChange={this.handleChange('password')} />
          </label>
          <input type="submit"
            value={formTypeStr}
            className='session-submit'/>
          <button hidden={hidden}
            onClick={this.handleDemo}
            className='session-submit'>
            Demo Login
          </button>
        </div>
      </form>
      {this.props.navLink}
    </div>)
  }
}

export default SessionForm;