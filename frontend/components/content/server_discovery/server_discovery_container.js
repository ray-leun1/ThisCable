import { connect } from 'react-redux';
import { getServers } from '../../../actions/server_actions';
import ServerDiscovery from './server_discovery';

const mapStateToProps = state => ({
  servers: Object.values(state.entities.servers),
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  getServers: () => dispatch(getServers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerDiscovery)