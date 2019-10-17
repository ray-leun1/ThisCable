import React from 'react';
import { withRouter } from 'react-router-dom';

class ChannelListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channelContextMenu: 'hide',
      active: 'deselected'
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleDeleteChannel = this.handleDeleteChannel.bind(this);
    this.handleContextMenu = this.handleContextMenu.bind(this);
  }

  // componentDidMount() {
  //   let currentChannelId = this.props.location.pathname.split('/')[3];

  //   if (this.props.channel.id === parseInt(currentChannelId)) {
  //     this.setState({active: 'selected'});
  //   } else {
  //     this.setState({active: 'deselected'});
  //   }
  // }

  // componentDidUpdate() {
  //   if (this.props.location.pathname !== this.props.history.location.pathname) {
  //     if (this.props.channel.id === parseInt(this.props.location.pathname.split('/')[this.props.location.pathname.split('/').length - 1])) {
  //       this.setState({ active: 'selected' });
  //       this.forceUpdate();
  //     } else {
  //       this.setState({ active: 'deselected' });
  //       this.forceUpdate();
  //     }
  //   }
  // }

  handleClick() {
    if (this.state.channelContextMenu === 'hide') {
      this.props.history.push(`/channels/${this.props.match.params.serverId}/${this.props.channel.id}`)
      
      // let currentChannelId = this.props.location.pathname.split('/')[3];

      // if (this.props.channel.id === parseInt(currentChannelId)) {
      //   this.setState({ active: 'selected' });
      // } else {
      //   this.setState({ active: 'deselected' });
      // }
    } else {
      this.setState({
        channelContextMenu: 'hide',
        // active: 'selected'
      });
    }
  }

  handleDeleteChannel() {
    this.props.deleteChannel(this.props.channel.id);
  }

  handleContextMenu(e) {
    e.preventDefault();

    if (this.state.channelContextMenu === 'hide') {
      this.setState({
        channelContextMenu: 'show',
      });
    }
  }

  renderChannelContextMenu() {
    if (this.props.currentServer && this.props.currentUser) {
      if (this.props.currentServer.admin_id === this.props.currentUser.id) {
        return (<div className={`channel-menu-container ${this.state.channelContextMenu}`}>
          <div className='channel-menu-option delete-channel noverflow'
            onClick={() => this.handleDeleteChannel()}>
            <div className='channel-menu-option-txt'>
              Delete Channel
            </div>
          </div>
        </div>)
      } else {
        return (<div className={`channel-menu-container ${this.state.channelContextMenu}`}>
          <div className='channel-menu-option noverflow'>
            <div className='channel-menu-option-txt'>
              Nothing here!
            </div>
            <div className='channel-menu-option-icon'>
              <i className="fas fa-cat"></i>
            </div>
          </div>
        </div>)
      }
    }
  }

  render() {
    return (<div style={{position: 'relative'}}>
      <div className={`channel-list-item-container channels-tab ${this.state.active}`}
        key={`channel-list-item-container-${this.props.channel.id}`}
        onClick={() => this.handleClick()}
        onContextMenu={e => this.handleContextMenu(e)}>
        <div className='channel-list-item-title noverflow'>
          <div className='channel-list-item-hash'>
            <i className='fas fa-hashtag'></i>
          </div>
          <div className='channel-list-item-name noverflow'>
            {this.props.channel.name}
          </div>
        </div>
        <div className='channel-list-item-x' hidden={this.state.channelContextMenu === 'hide'}>
          <i class="fas fa-times"></i>
        </div>
      </div>
      {this.renderChannelContextMenu()}
    </div>)
  }
}

export default withRouter(ChannelListItem);