import { connect } from 'react-redux';
import { getMessages, getMessage, createMessage } from '../../../actions/message_actions';
import {
  getCurrentUser,
  getCurrentServer,
  getCurrentChannel
} from '../../../actions/current_actions';
import Chat from './chat';

const mapStateToProps = state => ({
  currentUserId: state.session.id,
  currentChannel: state.current.channel
});

const mapDispatchToProps = dispatch => ({
  getMessages: channelId => dispatch(getMessages(channelId)),
  getMessage: id => dispatch(getMessage(id)),
  createMessage: message => dispatch(createMessage(message)),
  getCurrentUser: userId => dispatch(getCurrentUser(userId)),
  getCurrentServer: serverId => dispatch(getCurrentServer(serverId)),
  getCurrentChannel: channelId => dispatch(getCurrentChannel(channelId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)