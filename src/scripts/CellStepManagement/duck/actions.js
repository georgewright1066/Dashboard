import types from './types.js';

const openCsmModal = (id) => ({
  type: types.OPEN_CSM_MODAL,
  id: id

});

const openHamburgerModall = (id, columnId, studyId) => ({
  type: types.OPEN_DELETE_HAMBURGER_MODAL,
  id: id,
  columnId: columnId
});

const openHamburgerModal = (id, columnId, studyId, data) => {
  return (dispatch) => {
    dispatch(data);
    dispatch(openHamburgerModall(id, columnId, studyId));

  };
};

const closeHamburgerModal = () => ({
  type: types.CLOSE_DELETE_HAMBURGER_MODAL
});


const closeModal = () => ({
  type: types.CLOSE_CSM_MODAL
});

const openConfirmBox = () => ({
  type: types.OPEN_CONFIRM_BOX
});

const closeConfirmBox = () => ({
  type: types.CLOSE_CONFIRM_BOX
});

const openEditBox = () => ({
  type: types.OPEN_EDIT_BOX
});

const closeEditBox = () => ({
  type: types.CLOSE_EDIT_BOX
});

const onDragEnd = (newColumnOrder) => ({
  type: types.ON_DRAG_END,
  payload: newColumnOrder

});

const onDropdownSelect = item => ({
  type: types.ON_DROPDOWN_SELECT,
  payload: item
});

const addNewTask = (data) => ({
  type: types.ADD_NEW_TASK,
  payload: data

});

const deleteCell = data => ({
  type: types.DELETE_TASK,
  payload: data
});


const fetchStepBegin = () => ({
  type: types.FETCH_STEP_BEGIN
});

const fetchStepDataSuccess = step => ({
  type: types.FETCH_STEP_SUCCESS,
  payload: step
});

const fetchRawStepDataSuccess = step => ({
  type: types.FETCH_RAW_STEP_SUCCESS,
  payload: step
});


const fetchStepError = error => ({
  type: types.FETCH_STEP_ERROR,
  payload: error
});

const populateFormDropDown = data => ({
  type: types.POPULATE_FORM_DROPDOWN,
  payload: data
});

const addStepError = error => ({
  type: types.FETCH_STEP_ERROR,
  payload: 'Something went wrong'
});


const editTaskBegin = () => ({
  type: types.EDIT_TASK_BEGIN
});

const editTaskSuccess = data => ({
  type: types.EDIT_TASK_SUCCESS,
  payload: 'Your Names have been updated'
});

const editTaskError = () => ({
  type: types.EDIT_TASK_ERROR
});

const onTitleChange = (e) => ({
  type: types.ON_TITLE_CHANGE,
  payload: e.target.value
});

const onTitleChangeSubmit = (e) => ({
  type: types.ON_TITLE_CHANGE_SUBMIT,
  payload: 'Success'
});
const resetStateToLoading = () => ({
  type: types.RESET_STATE_TO_LOADING,
});

const toggleShowNotification = () => ({
  type: types.SAVED,
});

const onToggleLockStudy = (isLocked) => ({
  type: types.ON_TOGGLE_LOCK_STUDY,
  locked: isLocked
});

const onSearch = (value) => ({
  type: types.ON_STEP_SEARCH,
  value: value
})
const stepType = (type) => ({
  type: types.STEP_TYPE,
  payload: type

});

const addNewItemComplete = () => ({
  type: types.ADD_NEW_ITEM_COMPLETE
})

const openCacheModal = () => ({
  type: types.OPEN_CACHE_MODAL
})

const closeCacheModal = () => ({
  type: types.CLOSE_CACHE_MODAL
})

export default {

  closeModal,
  onDragEnd,
  onDropdownSelect,
  addNewTask,
  deleteCell,
  fetchStepBegin,
  fetchStepDataSuccess,
  fetchStepError,
  populateFormDropDown,
  fetchRawStepDataSuccess,
  addStepError,
  openHamburgerModal,
  closeHamburgerModal,
  openConfirmBox,
  closeConfirmBox,
  openEditBox,
  closeEditBox,
  editTaskBegin,
  editTaskSuccess,
  editTaskError,
  onTitleChange,
  onTitleChangeSubmit,
  resetStateToLoading,
  toggleShowNotification,
  openCsmModal,
  onToggleLockStudy,
  onSearch,
  stepType,
  addNewItemComplete,
  openCacheModal,
  closeCacheModal
};


