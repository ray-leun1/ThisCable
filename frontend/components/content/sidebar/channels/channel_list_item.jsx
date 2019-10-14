import React from 'react';
import { withRouter } from 'react-router-dom';

class ChannelListItem extends React.Component {

  render() {
    return (<div className='channel-list-item-container channels-tab'
      key={`channel-list-item-container-${this.props.channel.id}`}
      onClick={() => this.props.history.push(`/channels/${this.props.match.params.serverId}/${this.props.channel.id}`)}>
      <i class="fas fa-hashtag"></i>
      <div className='hover-tooltip channel-list-item-hover'
        key={`channel-hover-name-${this.props.channel.id}`}>
        {this.props.channel.name}
      </div>
    </div>)
  }
}

export default withRouter(ChannelListItem);