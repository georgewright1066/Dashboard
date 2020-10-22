import types from './types.js';

const fetchStudiesBegin = () => ({
  type: types.FETCH_STUDIES_BEGIN
});

const fetchStudiesSuccess = studies => ({
  type: types.FETCH_STUDIES_SUCCESS,
  payload: { studies }
});

const fetchStudiesError = error => ({
  type: types.FETCH_STUDIES_ERROR,
  payload: { error }
});


const sortByAscendingOrder = (item, type) => ({
  type: types.SORT_BY_ASCENDING_ORDER,
  item: item,
  ascOrDec: type
});

const sortByDecendingOrder = (item, type) => ({
  type: types.SORT_BY_DECENDING_ORDER,
  item: item,
  ascOrDec: type
});

const search = (value) => {
  return {
    type: types.SEARCH,
    value
  };
};

const toggleLive = () => {
  return {
    type: types.IS_LIVE,
  };
};

const toggleCompleted = () => {
  return {
    type: types.COMPLETED,
  };
};

const setMediaFilter = (value) => {
  return {
    type: types.MEDIA_TYPE,
    value
  };
};

const setEnvironmentFilter = (environment) => {
  return {
    type: types.ENVIRONMENT_TYPE,
    environment
  };
};


const onAddNewStudy = (environmentTypes, mediaTypes, studyTypes, languageTypes) => ({
  type: types.ON_ADD_NEW_STUDY,
  environmentTypes: environmentTypes,
  mediaTypes: mediaTypes,
  studyTypes: studyTypes,
  languageTypes: languageTypes
});

const onAddNewStudySubmit = () => {
  return {
    type: types.ON_ADD_NEW_STUDY_SUBMIT
  };
};

const cancelOnAddNewStudy = () => {
  return {
    type: types.CANCEL_ON_ADD_NEW_STUDY
  };
};

export default {
  setEnvironmentFilter,
  setMediaFilter,
  toggleCompleted,
  toggleLive,
  search,
  sortByAscendingOrder,
  sortByDecendingOrder,
  fetchStudiesBegin,
  fetchStudiesSuccess,
  fetchStudiesError,
  onAddNewStudy,
  cancelOnAddNewStudy,
  onAddNewStudySubmit

};


