import types from './types';


const fetchMediaBegin = () => ({
  type: types.FETCH_MEDIA_BEGIN
});

const fetchMediaSuccess = data => ({
  type: types.FETCH_MEDIA_SUCCESS,
  payload: { data }
});

const fetchMediaError = error => ({
  type: types.FETCH_MEDIA_ERROR,
  payload: { error }
});


const fetchEnvironmentBegin = () => ({
  type: types.FETCH_ENVIRONMENT_BEGIN
});

const fetchEnvironmentSuccess = data => ({
  type: types.FETCH_ENVIRONMENT_SUCCESS,
  payload: { data }
});

const fetchEnvironmentError = error => ({
  type: types.FETCH_ENVIRONMENT_ERROR,
  payload: { error }
});

const fetchStudyDetailsBegin = () => ({
  type: types.FETCH_STUDY_DETAILS_BEGIN
});

const fetchStudyDetailsSuccess = data => ({
  type: types.FETCH_STUDY_DETAILS_SUCCESS,
  payload: { data }
});

const fetchStudyDetailsError = error => ({
  type: types.FETCH_STUDY_DETAILS_ERROR,
  payload: { error }
});



export default {
  fetchMediaBegin,
  fetchMediaSuccess,
  fetchMediaError,
  fetchEnvironmentBegin,
  fetchEnvironmentSuccess,
  fetchEnvironmentError,
  fetchStudyDetailsBegin,
  fetchStudyDetailsSuccess,
  fetchStudyDetailsError,
};


