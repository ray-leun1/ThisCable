import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import CreateServerForm from './new_create_server_form';
import Settings from './settings';
import CreateChannelFormContainer from './create_channel_form_container';

function Modal({ modal, closeModal }) {
  if (!modal) return null;

  let component;
  switch (modal.component) {
    case 'createServer':
      component = <CreateServerForm {...modal.props} />;
      break;
    case 'createChannel':
      component = <CreateChannelFormContainer {...modal.props} />;
      break;
    case 'settings':
      component = <Settings {...modal.props} />;
      break;
    default:
      return null;
  }
  
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  modal: state.ui.modal
})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
