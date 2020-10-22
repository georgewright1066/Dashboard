import React from 'react';
import { connect } from 'react-redux';
import { CellStepManagementOperations } from './duck/index';
import types from './duck/types';
import PropTypes from 'prop-types';
import Column from './components/Column';
import NewCellWrapper from './components/NewCellWrapper';
import AddNewCellInputs from './components/AddNewCellInputs';
import Notification from './components/Notification';
import { DragDropContext } from 'react-beautiful-dnd';
import LoadingSpinner from '../common/components/LoadingSpinner';
import Button from '../components/MenuButton';
import styled from 'styled-components';
import ModalRoot from '../Modal/ModalContainer';
import classNames from 'classnames'
import DataService from "../common/services/dataService";

const Container = styled.div`
display: flex;
`;

class CellStepManagement extends React.Component {

  state = {
    studyId: '',
    item: '',
    value: '',
    active: false,
    shortName: '',
    nextList : []
  }

  getList() {
    let  componentRef = this;
    DataService.getNextButton().then(function(resp) {
      componentRef.setState((state) => {
        return { ...state, nextList : resp.data };
      });
    });
  }

  componentDidMount() {
    const studyId = this.props.match.params.id;
    this.setState({ studyId: studyId })
    this.props.getStepData(studyId);
    this.getList()
  }


  onDropDownSelect = (item) => {
    const id = this.props.match.params.id
    this.props.onSelectItem(item, id)
  }


  onAddCellSubmit = (shortName, value) => {
    const { studyId } = this.state
    const { addStepError, addCell } = this.props;

    if (value === '' && value === 0) { return false }
    addCell(studyId, shortName, value)
    if (!addStepError) {
      this.setState({ active: false })
    }
  }

  onNewCellClick = () => {
    this.setState(prevState => ({
      active: !prevState.active
    }))
  }

  openModal(id) {
    const data = {
      type: types.SHOW_MODAL,
      modalType: types.ADD_STEP,
      modalProps: {
        modalOpen: this.props.modalOpen,
        onSelectItem: this.onDropDownSelect,
        handleClick: this.props.addTask,
        id: this.props.id,
        closeModal: this.props.closeModal,
        options: this.props.initialDropDown,
        dataFromPrimarySelection: this.props.dataFromPrimarySelection,
        onSecondarySelectItem: this.onSecondarySelectItem,
        studyId: this.state.studyId,
        loading: this.props.dropdownLoading,
        resetStateToLoading: this.props.resetStateToLoading,
        dropDownLoading: this.props.dropDownLoading,
      }
    }
    this.props.openModal(id, data)
  }

  openHamburgerModal(id, columnId, studyId) {
    this.props.getStepData(studyId);
    const data = {
      type: types.SHOW_MODAL,
      modalType: types.EDIT_DELETE_MODAL,
      modalProps: {
        modalOpen: this.props.hamburgerModalOpen,
        closeModal: this.props.closeHamburgerModal,
        id: this.props.id,
        onDeleteClick: (id, columnId) => this.props.deleteTask(id, columnId, this.state.studyId),
        columnId: this.props.columnId,
        openConfirmBox: this.props.openConfirmBox,
        closeConfirmBox: this.props.closeConfirmBox,
        confirmBoxOpen: this.props.confirmBoxOpen,
        closeEditBox: this.props.closeEditBox,
        openEditBox: this.props.openEditBox,
        editBoxOpen: this.props.editBoxOpen,
        onEditClick: (id, showNext, moveNext, nextNext) => this.props.editStepData(id, showNext, moveNext, nextNext, this.state.studyId),
        cellData: this.props.cellData,
        nextList: this.state.nextList
      }
    }
    this.props.openHamburgerModal(id, columnId, studyId, data)
  }

  render() {
    const { loading, cellData, onToggleLockStudy, isLocked } = this.props;
    const { studyId } = this.state
    localStorage.setItem("studyId", this.state.studyId)
    const allowEditing = isLocked
    if (loading) {
      return <LoadingSpinner />;
    }


    return (
      <div>

        <div title="Toggle Lock Study" className={classNames('padlock', { 'locked': isLocked })}>
          <Button accessibleText="Toggle Lock Study" className="padlock__button" handleClick={() => onToggleLockStudy(studyId, allowEditing)} />
        </div>
        <DragDropContext onDragEnd={this.props.onDragEnd} >
          <Container className="csm">
            {cellData.columnOrder.map(columnId => {
              const column = cellData.columns[columnId];
              const tasks = column.taskIds.map(taskId => cellData.tasks[taskId.step_order_id]);
              return <Column
                modalOpen={this.modalOpen}
                handleClick={(id) => this.openModal(id)}
                onHamburburgerClick={(id, columnId) => this.openHamburgerModal(id, columnId, studyId)}
                key={columnId}
                column={column} tasks={tasks}
                addTask={this.addTask}
                onDeleteClick={(id, columnId) => this.props.deleteTask(id, columnId, studyId)}
                studyId={studyId}
                allowEditing={allowEditing}
                onTitleChange={(id, title, TYPE) => this.props.onTitleChange(id, title, TYPE, studyId)}
              />;
            })}
            {allowEditing ?
              <React.Fragment>
                <NewCellWrapper
                  onNewCellClick={this.onNewCellClick}
                  active={this.state.active}
                />
                <AddNewCellInputs
                  active={this.state.active}
                  value={this.state.value}
                  shortName={this.state.shortName}
                  onCancelClick={this.onNewCellClick}
                  studyId={this.state.studyId}
                  onAddCellSubmit={this.onAddCellSubmit}
                />
              </React.Fragment>
              : null
            }

          </Container>
        </DragDropContext>

        <Notification showNotification={this.props.showNotification} />
        <ModalRoot />

      </div>

    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (id, data) => (dispatch(CellStepManagementOperations.openModal(id, data))),
    openHamburgerModal: (id, columnId, studyId, data) => (dispatch(CellStepManagementOperations.openHamburgerModal(id, columnId, studyId, data))),
    closeModal: () => (dispatch(CellStepManagementOperations.closeModal())),
    onDragEnd: (result) => (dispatch(CellStepManagementOperations.onDragEnd(result))),
    onSelectItem: (item, id) => (dispatch(CellStepManagementOperations.onSelectItem(item, id))),
    addTask: (id, value, studyId, item, cacheId, name) => (dispatch(CellStepManagementOperations.addTask(id, value, studyId, item, cacheId, name))),
    getStepData: (id) => (dispatch(CellStepManagementOperations.getStepData(id))),
    addCell: (id, shortName, value) => (dispatch(CellStepManagementOperations.addCell(id, shortName, value))),
    editStepData: (id, showNext, moveNext, nextNext, studyId) => (dispatch(CellStepManagementOperations.editStepData(id, showNext, moveNext, nextNext, studyId))),
    onTitleChange: (id, title, TYPE, studyId) => (dispatch(CellStepManagementOperations.editTask(id, title, TYPE, studyId))),
    resetStateToLoading: () => dispatch(CellStepManagementOperations.resetStateToLoading()),
    deleteTask: (id, columnId, studyId) => (dispatch(CellStepManagementOperations.deleteTask(id, columnId, studyId))),
    onToggleLockStudy: (id, isLocked) => (dispatch(CellStepManagementOperations.toggleLockStudy(id, isLocked)))

  };
};

const mapStateToProps = (state) => {
  return {
    modalOpen: state.cellStepManagement.modalOpen,
    hamburgerModalOpen: state.cellStepManagement.hamburgerModalOpen,
    id: state.cellStepManagement.id,
    cellData: state.cellStepManagement.cellData,
    dropDownType: state.cellStepManagement.dropDownType,
    loading: state.cellStepManagement.loading,
    dataFromPrimarySelection: state.cellStepManagement.dataFromPrimarySelection,
    initialDropDown: state.cellStepManagement.initialDropDown,
    rawCellData: state.cellStepManagement.rawCellData,
    addStepError: state.cellStepManagement.addStepError,
    columnId: state.cellStepManagement.columnId,
    dropDownLoading: state.cellStepManagement.dropdownLoading,
    showNotification: state.cellStepManagement.showNotification,
    isLocked: state.cellStepManagement.isLocked
  };
};


CellStepManagement.propTypes = {
  onSelectItem: PropTypes.func,
  closeModal: PropTypes.func,
  id: PropTypes.string,
  dropDownType: PropTypes.string,
  addTask: PropTypes.func,
  modalOpen: PropTypes.bool,
  openModal: PropTypes.func,
  cellData: PropTypes.shape({
    columns: PropTypes.object,
    tasks: PropTypes.object,
    columnOrder: PropTypes.array
  }),
  onDragEnd: PropTypes.func,
  deleteTask: PropTypes.func

};

export default connect(mapStateToProps, mapDispatchToProps)(CellStepManagement);
