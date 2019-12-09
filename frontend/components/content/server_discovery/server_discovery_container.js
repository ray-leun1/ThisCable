import { connect } from 'react-redux';
import { getServers } from '../../../actions/server_actions';
import { getUser, createMembership } from '../../../actions/user_actions';
import {
  getCurrentUser,
  getCurrentServer,
  getCurrentChannel
} from '../../../actions/current_actions';
import ServerDiscovery from './server_discovery';

const mapStateToProps = state => ({
  servers: Object.values(state.entities.servers),
  currentUser: state.entities.users[state.session.id],
  currentServer: state.current.server
});

const mapDispatchToProps = dispatch => ({
  getServers: () => dispatch(getServers()),
  getUser: id => dispatch(getUser(id)),
  createMembership: membership => dispatch(createMembership(membership)),
  getCurrentUser: userId => dispatch(getCurrentUser(userId)),
  getCurrentServer: serverId => dispatch(getCurrentServer(serverId)),
  getCurrentChannel: channelId => dispatch(getCurrentChannel(channelId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerDiscovery)