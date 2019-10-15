import { connect } from 'react-redux';
import { getServers } from '../../../actions/server_actions';
import { getUser, createMembership } from '../../../actions/user_actions';
import ServerDiscovery from './server_discovery';

const mapStateToProps = state => ({
  servers: Object.values(state.entities.servers),
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  getServers: () => dispatch(getServers()),
  getUser: id => dispatch(getUser(id)),
  createMembership: membership => dispatch(createMembership(membership))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerDiscovery)