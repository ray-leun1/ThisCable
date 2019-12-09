import { connect } from 'react-redux';
import { getServer } from '../../../../actions/server_actions';
import { getChannels, deleteChannel } from '../../../../actions/channel_actions';
import {
  getCurrentUser,
  getCurrentServer,
  getCurrentChannel
} from '../../../../actions/current_actions';
import ChannelList from './channel_list';

const mapStateToProps = state => ({
  channels: Object.values(state.entities.channels),
  currentUserId: state.session.id,
  currentUser: state.current.user,
  currentServer: state.current.server,
  currentChannel: state.current.channel
});

const mapDispatchToProps = dispatch => ({
  getServer: serverId => dispatch(getServer(serverId)),
  getChannels: serverId => dispatch(getChannels(serverId)),
  deleteChannel: id => dispatch(deleteChannel(id)),
  getCurrentUser: userId => dispatch(getCurrentUser(userId)),
  getCurrentServer: serverId => dispatch(getCurrentServer(serverId)),
  getCurrentChannel: channelId => dispatch(getCurrentChannel(channelId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelList)