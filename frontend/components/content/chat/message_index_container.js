import { connect } from 'react-redux';
import { getUsers } from '../../../actions/user_actions';
import { getMessages, getMessage, createMessage } from '../../../actions/message_actions';
import {
  getCurrentUser,
  getCurrentServer,
  getCurrentChannel
} from '../../../actions/current_actions';
import MessageIndex from './message_index';

const mapStateToProps = state => ({
  messages: Object.values(state.entities.messages),
  users: state.entities.users,
  currentUserId: state.session.id,
  currentChannel: state.current.channel
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
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
)(MessageIndex)