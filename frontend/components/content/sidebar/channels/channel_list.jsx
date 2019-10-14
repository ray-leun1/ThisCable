import React from 'react';
import { withRouter } from 'react-router-dom';
import ChannelListItem from './channel_list_item';

class ChannelList extends React.Companent {
  render() {
    return (<div className='channel-list-container'>
      {this.props.channels.map(channel => 
        <ChannelListItem channel={channel} />)}
    </div>)
  }
}

export default withRouter(ChannelList);