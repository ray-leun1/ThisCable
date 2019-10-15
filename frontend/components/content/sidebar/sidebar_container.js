import { connect } from 'react-redux';
import { getUser, deleteMembership } from '../../../actions/user_actions';
import { getServer, deleteServer } from '../../../actions/server_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import Sidebar from './sidebar';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  currentServer: state.entities.servers[ownProps.match.params.serverId]
});

const mapDispatchToProps = dispatch => ({
  getUser: id => dispatch(getUser(id)),
  deleteMembership: serverId => dispatch(deleteMembership(serverId)),
  getServer: id => dispatch(getServer(id)),
  deleteServer: id => dispatch(deleteServer(id)),
  openModal: item => dispatch(openModal(item)),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)