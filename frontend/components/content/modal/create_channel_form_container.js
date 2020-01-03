import { connect } from 'react-redux';
import { getChannels, getChannel, createChannel } from '../../../actions/channel_actions';
import { getRoles } from '../../../actions/role_actions';
import { createPermission } from '../../../actions/permission_actions';
import { closeModal } from '../../../actions/modal_actions';
import {
  getCurrentUser,
  getCurrentServer,
  getCurrentChannel
} from '../../../actions/current_actions';
import CreateChannelForm from './create_channel_form';

const mapStateToProps = state => ({
  currentServer: state.current.server,
  currentServerId: state.current.server.id,
  channel: { name: '' }
});

const mapDispatchToProps = dispatch => ({
  getChannels: serverId => dispatch(getChannels(serverId)),
  getChannel: id => dispatch(getChannel(id)),
  createChannel: channel => dispatch(createChannel(channel)),
  getRoles: () => dispatch(getRoles()),
  createPermission: permission => dispatch(createPermission(permission)),
  closeModal: () => dispatch(closeModal()),
  getCurrentUser: userId => dispatch(getCurrentUser(userId)),
  getCurrentServer: serverId => dispatch(getCurrentServer(serverId)),
  getCurrentChannel: channelId => dispatch(getCurrentChannel(channelId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateChannelForm)