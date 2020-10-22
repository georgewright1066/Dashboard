import React from 'react';
import Button from '../../common/components/Button';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { overviewOperations } from '../../Overview/duck/index';

function Confirmation({ confirmationModalOpen, closeConfirmationModal, deleteId, panelId, onDeleteClick }) {
  return (
    <div className={classNames('csm-modal-form ', { 'active': confirmationModalOpen })}>
      <Button
        buttonClass={classNames('filter__exit-button')}
        handleClick={() => closeConfirmationModal()}
      />
      <div className="confirmation__content-container">
        <h2 className="confirmation__title">Are you sure? This can not be undone!</h2>
        <div className="csm__form">
        <div className="confirmation__button-container">
          <Button
            buttonClass="button-primary"
            text="yes"
            handleClick={() => onDeleteClick(panelId, deleteId)}
          />
          <Button
            handleClick={() => closeConfirmationModal()}
            buttonClass="button-primary"
            text="no"

          />
        </div>

      </div>
      </div>
    </div>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteClick: (id, deleteId) => (dispatch(overviewOperations.onDeleteClick(id, deleteId))),
    closeConfirmationModal: () => (dispatch(overviewOperations.closeConfirmationModal())),

  };
};

const mapStateToProps = (state) => {
  return {
    confirmationModalOpen: state.overview.confirmationModalOpen,
    deleteId: state.overview.deleteId,


  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
