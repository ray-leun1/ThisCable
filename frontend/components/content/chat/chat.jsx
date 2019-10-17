import React from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import MessageIndexContainer from './message_index_container';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnEnter = this.handleOnEnter.bind(this);
  }

  handleChange(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit() {
    let currentChannelId = this.props.location.pathname.split('/')[3];
    console.log(this.state.body);
    
    let message = {
      body: this.state.body,
      author_id: this.props.currentUserId,
      channel_id: currentChannelId
    };

    this.props.createMessage(message)
    this.setState({body: ''});
  }

  handleOnEnter(e) {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      this.handleSubmit();
    }
  }

  componentDidMount() {
    this.props.getCurrentChannel(this.props.location.pathname.split('/')[3]);
  }

  render() {
    return (<div className='chat-container'>
      <div className='chat-title-container'>
        <div className='chat-title-hash'>
          <i className='fas fa-hashtag'></i>
        </div>
        <div className='chat-title-txt'>
          {this.props.currentChannel ? this.props.currentChannel.name : ''}
        </div>
      </div>
      <Route path='/channels/:serverId/:channelId' render={() => <MessageIndexContainer key={parseInt(this.props.location.pathname.split('/')[3])} />} />
      <form className='chat-form-container'>
        <textarea className='chat-form-input'
          placeholder={`Message #${this.props.currentChannel ? this.props.currentChannel.name : ''}`}
          value={this.state.body}
          onChange={this.handleChange('body')}
          onKeyDown={this.handleOnEnter} />
      </form>
    </div>)
  }
}

export default withRouter(Chat);