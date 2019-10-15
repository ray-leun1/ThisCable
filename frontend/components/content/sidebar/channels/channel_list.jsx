import React from 'react';
import { withRouter } from 'react-router-dom';
import ChannelListItem from './channel_list_item';

class ChannelList extends React.Component {
  componentDidMount() {
    this.props.getChannels(this.props.match.params.serverId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.serverId !== this.props.match.params.serverId) {
      this.props.getChannels(this.props.match.params.serverId);
    }
  }

  render() {
    return (<div className='channel-list-container'>
      {this.props.channels.map(channel => 
        <ChannelListItem channel={channel} />)}
    </div>)
  }
}

export default withRouter(ChannelList);