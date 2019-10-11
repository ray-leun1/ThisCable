import { connect } from 'react-redux';
import { createServer } from '../../../actions/server_actions';
import { closeModal } from '../../../actions/modal_actions';
import CreateServerForm from './create_server_form';

const mapStateToProps = state => ({
  currentUserId: state.session.id,
  server: { name: '' }
});

const mapDispatchToProps = dispatch => ({
  createServer: server => dispatch(createServer(server)),
  closeModal: () => dispatch(closeModal())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateServerForm)