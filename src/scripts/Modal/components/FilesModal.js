import React from 'react';
import Button from '../../common/components/Button';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { overviewOperations } from '../../Overview/duck/index';
import Table from '../../Files/components/Table';

function FilesModal({ filesModalOpen, closeFilesModal, filesData }) {
  return (
    <div className={classNames('files ', { 'active': filesModalOpen })}>
      <Button
        buttonClass={classNames('filter__exit-button')}
        handleClick={() => closeFilesModal()}
      />
      <Table files={filesData} />

    </div>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteClick: (id, deleteId) => (dispatch(overviewOperations.onDeleteClick(id, deleteId))),
    closeFilesModal: () => (dispatch(overviewOperations.closeFilesModal())),

  };
};

const mapStateToProps = (state) => {
  return {
    filesModalOpen: state.overview.filesModalOpen,
    deleteId: state.overview.deleteId,
    filesData: state.overview.filesData


  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilesModal);
