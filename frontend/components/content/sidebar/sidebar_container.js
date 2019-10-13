import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import Sidebar from './sidebar';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  currentServer: state.entities.servers[ownProps.match.params.serverId]
});

const mapDispatchToProps = dispatch => ({
  openModal: item => dispatch(openModal(item)),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)