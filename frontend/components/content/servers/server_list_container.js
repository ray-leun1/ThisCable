import { connect } from 'react-redux';
import { getServers } from '../../../actions/server_actions';
import { getUser } from '../../../actions/user_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { logout } from '../../../actions/session_actions';
import ServerList from './server_list';

const mapStateToProps = state => ({
  servers: Object.values(state.entities.servers),
  users: Object.values(state.entities.users),
  currentUserId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  getServers: () => dispatch(getServers()),
  getUser: id => dispatch(getUser(id)),
  openModal: item => dispatch(openModal(item)),
  closeModal: () => dispatch(closeModal()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerList)