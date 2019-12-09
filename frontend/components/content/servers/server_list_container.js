import { connect } from 'react-redux';
import { getServers } from '../../../actions/server_actions';
import { getUser } from '../../../actions/user_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { logout } from '../../../actions/session_actions';
import {
  getCurrentUser,
  getCurrentServer,
  getCurrentChannel
} from '../../../actions/current_actions';
import ServerList from './server_list';

const mapStateToProps = state => ({
  servers: Object.values(state.entities.servers),
  users: Object.values(state.entities.users),
  currentUserId: state.session.id,
  currentUser: state.current.user,
  currentServer: state.current.server
});

const mapDispatchToProps = dispatch => ({
  getServers: () => dispatch(getServers()),
  getUser: id => dispatch(getUser(id)),
  openModal: item => dispatch(openModal(item)),
  closeModal: () => dispatch(closeModal()),
  logout: () => dispatch(logout()),
  getCurrentUser: userId => dispatch(getCurrentUser(userId)),
  getCurrentServer: serverId => dispatch(getCurrentServer(serverId)),
  getCurrentChannel: channelId => dispatch(getCurrentChannel(channelId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerList)