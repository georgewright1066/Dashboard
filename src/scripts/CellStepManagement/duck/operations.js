import Creators from './actions';
import DataService from '../../common/services/dataService';
import Utils from '../../common/utils/Utils';
import HelperFuncs from './HelperFuncs';
const openCsmModal = Creators.openCsmModal;
const onSearch = Creators.onSearch;
const stepType = Creators.stepType;
const openConfirmBox = Creators.openConfirmBox;
const closeConfirmBox = Creators.closeConfirmBox;
const openEditBox = Creators.openEditBox;
const closeEditBox = Creators.closeEditBox;
const closeModal = Creators.closeModal;
const onDropdownSelect = Creators.onDropdownSelect;
const fetchStepBegin = Creators.fetchStepBegin;
const fetchStepDataSuccess = Creators.fetchStepDataSuccess;
const fetchRawStepDataSuccess = Creators.fetchRawStepDataSuccess;
const addStepError = Creators.addStepError
const fetchStepError = Creators.fetchStepError;
const populateFormDropDown = Creators.populateFormDropDown;
const openHamburgerModal = Creators.openHamburgerModal;
const closeHamburgerModal = Creators.closeHamburgerModal;
const onTitleChangeSubmit = Creators.onTitleChangeSubmit;
const editTaskBegin = Creators.editTaskBegin;
const editTaskSuccess = Creators.editTaskSuccess;
const editTaskError = Creators.editTaskError;
const resetStateToLoading = Creators.resetStateToLoading;
const toggleShowNotification = Creators.toggleShowNotification;
const onToggleLockStudy = Creators.onToggleLockStudy;
const addNewItemComplete = Creators.addNewItemComplete;
const openCacheModal = Creators.openCacheModal;
const closeCacheModal = Creators.closeCacheModal

const getStepData = (id) => {
  return async dispatch => {
    try {
      dispatch(fetchStepBegin());

      const res = await DataService.fetchStepData(id);
      const sortedTask = Utils.sortedTaskData(res.data.data)
      const sortedStepData = Utils.sortStepData(res.data.data)
      const newData = Utils.createSortedDataForDragAndDrop(sortedTask, sortedStepData)
      dispatch(fetchRawStepDataSuccess(res.data))
      dispatch(fetchStepDataSuccess(newData))

    }
    catch (err) {
      dispatch(fetchStepError(err))
      throw (err)
    }
  }
}


const onDragEnd = (result) => {
  const studyId = localStorage.getItem('studyId');
  return async (dispatch, getState) => {
    const locked = getState().cellStepManagement.rawCellData.allow_step_editing
    if (!locked) return false

    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const start = getState().cellStepManagement.cellData.columns[source.droppableId];
    const finish = getState().cellStepManagement.cellData.columns[destination.droppableId];
    const tasks = getState().cellStepManagement.cellData.tasks

    if (start === finish) {
      const data = Utils.sortReOrderDataForApi(start, finish, tasks, source, destination, draggableId)

      try {
        await DataService.postStepReOrderData(studyId, data);
        const response = await DataService.fetchStepData(studyId);
        const sortedStepData = Utils.sortStepData(response.data.data)
        const sortedTask = Utils.sortedTaskData(response.data.data)
        const sortedDataForDragAndDrop = Utils.createSortedDataForDragAndDrop(sortedTask, sortedStepData)
        dispatch(fetchStepDataSuccess(sortedDataForDragAndDrop))
        dispatch(savedNotification())

      }
      catch (error) {
        throw error
      }
    }
  };
};



const onSelectItem = (item, id) => {
  const dropDownType = HelperFuncs.returnDropDownType(item);
  return async dispatch => {
    dispatch(stepType(dropDownType.item))
    dispatch(onDropdownSelect(dropDownType.type));
    const data = {
      step_type: dropDownType.item
    }
    if (dropDownType.item === 'instruction' || dropDownType.item === 'cache' || dropDownType.item === 'question' || dropDownType.item === 'external' || dropDownType.item === 'embedded' || dropDownType.item === 'stim' ) {
      try {
        const res = await DataService.getStepDetailInfo(id, data)
        const sortedData = dropDownType.item === 'stim' ? await Utils.createSortedItems(res.data) : res.data.data
        dispatch(populateFormDropDown(sortedData))
      }
      catch (err) {
        throw err
      }
    } else {
      return false
    }

  };
};



const seperateIdAndValue = (value) => {
  const obj = {}
  const valueArray = value.split(':');
  let string = valueArray.shift();
  string.trim()
  obj.step_id = parseInt(valueArray.pop(), 10);
  obj.value = string
  return obj
}

const createNewDataObject = (id, value, stepOrder, stepType, stepIdAndValue, secondaryData, name, newItem) => {
  let data = {};
  switch (stepType) {
    case 'External':
      if (newItem === true){
        data = { step_order: stepOrder, step_type: stepType.toLowerCase(), cell_id: parseInt(id, 10), external_url: value, member_insert: secondaryData, name: name }
      } else {
        data = { step_order: stepOrder, cell_id: parseInt(id, 10), step_type: stepType.toLowerCase(), external_page_id: secondaryData }
      }
      break;
    case 'Embedded':
      if (newItem === true){
        data = { step_order: stepOrder, step_type: stepType.toLowerCase(), cell_id: parseInt(id, 10), external_url: value, member_insert: secondaryData, name: name }
      } else {
        data = { step_order: stepOrder, cell_id: parseInt(id, 10), step_type: stepType.toLowerCase(), embedded_page_id: secondaryData }
      }
      break;
    case 'Validation':
      data = { step_order: stepOrder, step_type: stepType.toLowerCase(), cell_id: parseInt(id, 10) }
      break;
    case 'Calibration':
      data = { step_order: stepOrder, step_type: stepType.toLowerCase(), cell_id: parseInt(id, 10) }
      break;
    case 'Instruction':
      data = { step_order: stepOrder, cell_id: parseInt(id, 10), step_type: stepType.toLowerCase(), step_id: secondaryData }
      break;
    case 'Cache Page':
      data = { step_order: stepOrder, cell_id: parseInt(id, 10), step_type: 'cache', cache_page_id: secondaryData }
      break;
    case 'Stim':
      data = { step_order: stepOrder, cell_id: parseInt(id, 10), step_type: stepType.toLowerCase(), stim_id: secondaryData }
      break;
    case 'Question':
      data = { step_order: stepOrder, cell_id: parseInt(id, 10), step_type: stepType.toLowerCase(), question_group_id: secondaryData }
      break;
    default:
      data = {}
  }

  return data
}

const addTask = (id, value, study, stepType, secondaryData, name, newItem) => {
  const studyId = localStorage.getItem('studyId');
  const stepIdAndValue = seperateIdAndValue(value)
  return async (dispatch, getState) => {
    const locked = getState().cellStepManagement.rawCellData.allow_step_editing
    if (!locked) return false

    let column;
    if (getState().cellStepManagement.cellData.columns[id] === undefined) {
      column = {
        id: id,
        taskIds: []
      }
    } else {
      column = getState().cellStepManagement.cellData.columns[id];
    }

    const stepOrder = column.taskIds.length;
    Array.from(column);

    const newCellOrder = column.taskIds.map((item, index) => {
      return { index: index, step_order_id: item.step_order_id }
    })
    const data = {};
    data[column.id] = newCellOrder;

    let newData = createNewDataObject(id, value, stepOrder, stepType, stepIdAndValue, secondaryData, name, newItem);

    try {
      await DataService.postStepReOrderData(studyId, data);
      await DataService.postNewStepDataToApi(studyId, newData);
      const response = await DataService.fetchStepData(studyId);
      const sortedStepData = Utils.sortStepData(response.data.data)
      const sortedTask = Utils.sortedTaskData(response.data.data)
      const sortedDataForDragAndDrop = Utils.createSortedDataForDragAndDrop(sortedTask, sortedStepData)
      dispatch(addNewItemComplete())
      dispatch(savedNotification())
      dispatch(fetchStepDataSuccess(sortedDataForDragAndDrop))

    }
    catch (err) {
      throw err
    }

  };
};


const deleteTask = (id, columnId, studyId) => {
  return async (dispatch, getState) => {

    const locked = getState().cellStepManagement.rawCellData.allow_step_editing
    if (!locked) return false;
    const data = {
      step_order_id: id
    }

    let column = getState().cellStepManagement.cellData.columns[columnId];
    Array.from(column);
    const newCellOrder = column.taskIds.map((item, index) => {
      return { index: index, step_order_id: item.step_order_id }
    })
    const dataOrder = {};
    dataOrder[column.id] = newCellOrder;


    try {
      await DataService.postStepReOrderData(studyId, dataOrder);
      await DataService.deleteStepFromCell(studyId, data);
      const response = await DataService.fetchStepData(studyId);
      const sortedStepData = Utils.sortStepData(response.data.data)
      const sortedTask = Utils.sortedTaskData(response.data.data)
      const sortedDataForDragAndDrop = Utils.createSortedDataForDragAndDrop(sortedTask, sortedStepData)
      dispatch(fetchStepDataSuccess(sortedDataForDragAndDrop))
      dispatch(closeModal())
      dispatch(closeHamburgerModal())
      dispatch(savedNotification())

    }
    catch (error) {
      throw error
    }

  };
};

const addCell = (id, shortName, value) => {
  const data = {
    "cell_name": value,
    "short_name": shortName
  }
  return async (dispatch) => {
    try {
      const action = {
        type: 'SHOW_MODAL',
        modalType: 'ADD_STEP',
      }
      const res = await DataService.addCell(id, data);
      dispatch(openModal(res.data.cell_id, action))
      dispatch(savedNotification())

    }

    catch (error) {
      dispatch(addStepError())
      throw error
    }
  }
}

const editTask = (id, title, TYPE, studyId) => {
  return async (dispatch, getState) => {
    const locked = getState().cellStepManagement.rawCellData.allow_step_editing
    if (!locked) return false;
    dispatch(editTaskBegin())
    let data = {}
    if (TYPE === 'SUBTITLE') {
      const cellName = getState().cellStepManagement.cellData.columns[id].cellName
      data = {
        "cell_id": id,
        "cell_name": cellName,
        "short_name": title
      }

    } else {
      const shortName = getState().cellStepManagement.cellData.columns[id].shortName

      data = {
        "cell_id": id,
        "cell_name": title,
        "short_name": shortName
      }
    }

    try {
      const res = await DataService.editTask(studyId, data)
      dispatch(getStepData(studyId))
      dispatch(editTaskSuccess(res))
    }

    catch (error) {
      dispatch(editTaskError())
      throw error
    }
  }
}

const onTitleChange = (id, title, studyId) => {
  return async (dispatch) => {
    dispatch(editTaskBegin())
    const data = {
      "cell_id": id,
      "cell_name": title,
    }
    try {
      await DataService.editTask(studyId, data);
      dispatch(onTitleChangeSubmit())
    }

    catch (error) {
      throw error
    }
  }
}

const editStepData = (showNext, moveNext, nextNext, id, studyId) => {

  return async (dispatch) => {
    const data = {
      "step_order_id": parseInt(id, 10),
      "seconds_before_show_next": parseInt(showNext || 0, 10),
      "seconds_before_move_next": parseInt(moveNext || 0, 10),
      "next_type_id": parseInt(nextNext || 0, 10),
    }
    try {
      await DataService.editStepData(studyId, data);
      dispatch(editTaskSuccess())
      dispatch(getStepData(studyId))
    }

    catch (error) {
      throw error
    }
  }
}

const savedNotification = () => {
  return (dispatch) => {
    dispatch(toggleShowNotification())
    setTimeout(() => {
      dispatch(toggleShowNotification())
    }, 1800)

  }
}

const openModal = (id, action) => {
  return (dispatch) => {
    dispatch(action);
    dispatch(openCsmModal(id));

  };
};

const toggleLockStudy = (id, isLocked) => {
  return async (dispatch) => {
    try {
      await DataService.unlockStudy(id)
      dispatch(getStepData(id))
      dispatch(onToggleLockStudy(isLocked));

    }

    catch (error) {
      throw error
    }

  };
};

const onCachePageSumbit = (url, name, studyId) => {
  return async (dispatch) => {
    const data = {
      url: url,
      name: name
    }
    try {
      await DataService.orderACachePage(data);
      dispatch(onSelectItem('Cache Page', studyId))

    }

    catch (error) {
      throw error
    }
  }
}


export default {
  openModal,
  closeModal,
  onDragEnd,
  onSelectItem,
  addTask,
  deleteTask,
  getStepData,
  seperateIdAndValue,
  addCell,
  openHamburgerModal,
  closeHamburgerModal,
  openConfirmBox,
  closeConfirmBox,
  openEditBox,
  closeEditBox,
  editTask,
  onTitleChange,
  editStepData,
  resetStateToLoading,
  toggleShowNotification,
  savedNotification,
  toggleLockStudy,
  onSearch,
  openCacheModal,
  closeCacheModal,
  onCachePageSumbit

};


