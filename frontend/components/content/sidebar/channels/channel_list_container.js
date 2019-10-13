import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../../actions/modal_actions';
import ChannelList from './channel_list';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  openModal: item => dispatch(openModal(item)),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelList)