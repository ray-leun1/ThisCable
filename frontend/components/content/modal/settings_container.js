import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { logout } from '../../../actions/session_actions';
import Settings from './settings';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  openModal: item => dispatch(openModal(item)),
  closeModal: () => dispatch(closeModal()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)