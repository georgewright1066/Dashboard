import React from 'react';
import { connect } from 'react-redux';

import AddStepModal from './components/AddStepModal';
import EditDeleteModal from './components/EditDeleteModal';
import EditAudience from './components/EditAudienceModal';
import CreateAudience from './components/CreateAudienceModal';
import Confirmation from './components/Confirmation';
import FilesModal from './components/FilesModal';
import EditStudyModal from "./components/EditStudyModal";

// import ConfirmLogoutModal from './ConfirmLogoutModal'

const MODAL_COMPONENTS = {
  'ADD_STEP': AddStepModal,
  'EDIT_DELETE_MODAL': EditDeleteModal,
  'CREATE_AUDIENCE': CreateAudience,
  'EDIT_AUDIENCE': EditAudience,
  'DELETE_CONFIRMATION': Confirmation,
  'FILES_MODAL': FilesModal,
  'EDIT_STUDY': EditStudyModal
};

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];

  return <SpecificModal {...modalProps} />;
};

export default connect(
  state => state.modal
)(ModalRoot);