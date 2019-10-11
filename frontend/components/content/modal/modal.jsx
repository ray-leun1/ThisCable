import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import CreateServerFormContainer from './create_server_form_container';
import SettingsContainer from './settings_container';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'create server':
      component = <CreateServerFormContainer />;
      break;
    case 'settings':
      component = <SettingsContainer />;
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
