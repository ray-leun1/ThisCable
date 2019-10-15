import React from 'react';
import { withRouter } from 'react-router-dom';

class ChannelListItem extends React.Component {
  render() {
    return (<div className='channel-list-item-container channels-tab noverflow'
      key={`channel-list-item-container-${this.props.channel.id}`}
      onClick={() => this.props.history.push(`/channels/${this.props.match.params.serverId}/${this.props.channel.id}`)}>
      <div className='channel-list-item-hash'>
        <i className='fas fa-hashtag'></i>
      </div>
      <div className='channel-list-item-name'>
        {this.props.channel.name}
      </div>
    </div>)
  }
}

export default withRouter(ChannelListItem);