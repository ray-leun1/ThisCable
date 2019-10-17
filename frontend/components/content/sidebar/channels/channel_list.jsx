import React from 'react';
import { withRouter } from 'react-router-dom';
import ChannelListItem from './channel_list_item';

class ChannelList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentChannel: this.props.currentChannel
    }
  }

  componentDidMount() {
    this.props.getChannels(this.props.match.params.serverId);
    this.props.getCurrentChannel(parseInt(this.props.location.pathname.split('/')[3]))
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.serverId !== this.props.match.params.serverId) {
      this.props.getChannels(this.props.match.params.serverId);
    }
    
    if (this.props.currentChannel) {
      if (this.props.currentChannel.id !== parseInt(this.props.location.pathname.split('/')[3])) {
        this.props.getCurrentChannel(parseInt(this.props.location.pathname.split('/')[3]))
          .then(channel => {
            this.setState({currentChannel: channel});
          })
      }
    }
  }

  render() {
    return (<div className='channel-list-container'>
      {this.props.channels.map(channel => 
        <ChannelListItem {...this.props} channel={channel} />)}
    </div>)
  }
}

export default withRouter(ChannelList);