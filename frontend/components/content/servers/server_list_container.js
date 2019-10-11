import { connect } from 'react-redux';
import {
  getServers, getServer, createServer, updateServer, deleteServer 
} from '../../../actions/server_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { logout } from '../../../actions/session_actions';
import ServerList from './server_list';

const mapStateToProps = state => ({
  servers: Object.values(state.entities.servers)
});

const mapDispatchToProps = dispatch => ({
  getServers: () => dispatch(getServers()),
  getServer: id => dispatch(getServer(id)),
  createServer: server => dispatch(createServer(server)),
  updateServer: server => dispatch(updateServer(server)),
  deleteServer: id => dispatch(deleteServer(id)),
  openModal: item => dispatch(openModal(item)),
  closeModal: () => dispatch(closeModal()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerList)