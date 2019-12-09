import { connect } from 'react-redux';
import { getUsers } from '../../../actions/user_actions';
import {
  getCurrentUser,
  getCurrentServer,
  getCurrentChannel
} from '../../../actions/current_actions';
import MemberIndex from './member_index';

const mapStateToProps = state => ({
  users: state.entities.users,
  currentUserId: state.session.id,
  currentChannel: state.current.channel
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
  getCurrentUser: userId => dispatch(getCurrentUser(userId)),
  getCurrentServer: serverId => dispatch(getCurrentServer(serverId)),
  getCurrentChannel: channelId => dispatch(getCurrentChannel(channelId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberIndex)