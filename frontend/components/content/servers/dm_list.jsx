import React from 'react';
import { withRouter } from 'react-router-dom';
// import DMListItem from './dm_list_item';

class DMList extends React.Component {
  // componentDidMount() {
  //   this.props.getChannels(this.props.match.params.serverId);
  //   this.props.getCurrentChannel(parseInt(this.props.location.pathname.split('/')[3]))
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.match.params.serverId !== this.props.match.params.serverId) {
  //     this.props.getChannels(this.props.match.params.serverId);
  //   }

  //   if (this.props.currentChannel) {
  //     if (this.props.currentChannel.id !== parseInt(this.props.location.pathname.split('/')[3])) {
  //       this.props.getCurrentChannel(parseInt(this.props.location.pathname.split('/')[3]))
  //         .then(channel => {
  //           this.setState({ currentChannel: channel });
  //         })
  //     }
  //   }
  // }

  render() {
    return null
    // return (<div className='channel-list-container'>
    //   {this.props.channels.map(channel =>
    //     <DMListItem {...this.props} channel={channel} />)}
    // </div>)
  }
}

export default withRouter(DMList);