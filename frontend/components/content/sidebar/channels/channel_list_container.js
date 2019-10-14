import { connect } from 'react-redux';
import { getServer } from '../../../../actions/server_actions';
import { openModal, closeModal } from '../../../../actions/modal_actions';
import ChannelList from './channel_list';

const mapStateToProps = (state, ownProps) => ({
  server: state.entities.servers[ownProps.match.params.serverId],
  channels: Object.values(state.entities.channels)
});

const mapDispatchToProps = dispatch => ({
  getServer: serverId => dispatch(getServer(serverId)),
  openModal: item => dispatch(openModal(item)),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelList)