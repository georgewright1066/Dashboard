import types from './types.js';


const addStudy = (key) => {
  return {
    type: types.ADD_COMPARE_STUDY,
    id: key
  };
};

const removeStudy = (key) => {
  return {
    type: types.REMOVE_COMPARE_STUDY,
    id: key
  };
};

const checkAllinStepRow = () => ({
  type: types.CHECK_ALL_IN_STEP
});

const removeAllinStepRow = () => ({
  type: types.REMOVE_ALL_IN_STEP
});

const clearCheckedStudies = () => {
  return {
    type: types.CLEAR_CHECKED_STUDIES
  };
};

const fetchStimBegin = () => ({
  type: types.FETCH_STIM_BEGIN
});

const fetchStimSuccess = data => ({
  type: types.FETCH_STIM_SUCCESS,
  payload: data
});

const fetchStimError = error => ({
  type: types.FETCH_STIM_ERROR,
  payload: { error }
});

const fetchStudiesSuccess = data => ({
  type: types.FETCH_STUDIES_OVERVIEW_SUCCESS,
  payload: data
});



export default {
  fetchStimSuccess,
  fetchStimError,
  fetchStimBegin,
  clearCheckedStudies,
  removeAllinStepRow,
  checkAllinStepRow,
  removeStudy,
  addStudy,
  fetchStudiesSuccess

};


