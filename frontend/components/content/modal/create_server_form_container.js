import { connect } from 'react-redux';
import { createServer } from '../../../actions/server_actions';
import { closeModal } from '../../../actions/modal_actions';
import {
  getCurrentUser,
  getCurrentServer,
  getCurrentChannel
} from '../../../actions/current_actions';
import CreateServerForm from './create_server_form';

const mapStateToProps = state => ({
  currentUserId: state.session.id,
  server: { name: '' }
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createServer: server => dispatch(createServer(server)),
  closeModal: () => dispatch(closeModal()),
  getCurrentUser: userId => dispatch(getCurrentUser(userId)),
  getCurrentServer: serverId => dispatch(getCurrentServer(serverId)),
  getCurrentChannel: channelId => dispatch(getCurrentChannel(channelId)),
  updateServerIndex: ownProps.updateServerIndex
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateServerForm)