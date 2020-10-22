import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../../common/components/Button';
import ConfirmDialog from '../../CellStepManagement/components/ConfirmDialog';
import EditStep from '../../CellStepManagement/components/EditStep';
import { CellStepManagementOperations } from '../../CellStepManagement/duck/index';
import { connect } from 'react-redux';

class EditDeleteModalForm extends React.Component {

  render() {
    const { modalOpen, id, onDeleteClick, closeModal, columnId, openConfirmBox, closeConfirmBox, confirmBoxOpen, openEditBox, editBoxOpen, onEditClick, cellData, nextList } = this.props;
    return (
      <div className={classNames('csm-modal-form add-new-study ', { 'active': modalOpen })}>
        <Button
          buttonClass={classNames('filter__exit-button', { 'active': modalOpen })}
          handleClick={() => closeModal()}
        />
          <div className="csm__form">
            <h3>Do you want to Delete this step?</h3>
            <Button
              buttonClass="csm__button-delete"
              handleClick={() => openConfirmBox()}
            />
            <div className="csm-modal-form-edit-delete__container">
              <h3>Do you want to Edit this step?</h3>
              <Button
                buttonClass="csm__button-delete edit"
                handleClick={() => openEditBox()}
              />
            </div>
          </div>
        <ConfirmDialog
          onCancelClick={() => closeConfirmBox()}
          modalOpen={confirmBoxOpen}
          onDeleteClick={() => onDeleteClick(id, columnId)}
        />
        <EditStep
          editBoxOpen={editBoxOpen}
          onEditClick={(showNext, moveNext, nextNext) => onEditClick(showNext, moveNext, nextNext, id)}
          currentShow={cellData.tasks[id].seconds_before_show_next}
          currentMove={cellData.tasks[id].seconds_before_move_next}
          currentNext={cellData.tasks[id].next_type_id}
          nextList={nextList}
        />


      </div >

    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: (id) => (dispatch(CellStepManagementOperations.closeHamburgerModal(id))),
    deleteTask: (id, columnId, studyId) => (dispatch(CellStepManagementOperations.deleteTask(id, columnId, studyId))),
    openConfirmBox: () => (dispatch(CellStepManagementOperations.openConfirmBox())),
    closeConfirmBox: () => (dispatch(CellStepManagementOperations.closeConfirmBox())),
    openEditBox: () => (dispatch(CellStepManagementOperations.openEditBox())),
    closeEditBox: () => (dispatch(CellStepManagementOperations.closeEditBox())),

  };
};

const mapStateToProps = (state) => {
  return {
    modalOpen: state.cellStepManagement.hamburgerModalOpen,
    id: state.cellStepManagement.id,
    columnId: state.cellStepManagement.columnId,
    confirmBoxOpen: state.cellStepManagement.confirmBoxOpen,
    editBoxOpen: state.cellStepManagement.editBoxOpen,
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(EditDeleteModalForm);


EditDeleteModalForm.propTypes = {
  modalOpen: PropTypes.bool,
  id: PropTypes.string,
  onDeleteClick: PropTypes.func,
  closeModal: PropTypes.func,
  columnId: PropTypes.number,
  openConfirmBox: PropTypes.func,
  closeConfirmBox: PropTypes.func,
  confirmBoxOpen: PropTypes.bool,
  openEditBox: PropTypes.func,
  editBoxOpen: PropTypes.bool,
  onEditClick: PropTypes.func

};
