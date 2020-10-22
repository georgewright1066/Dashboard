import types from './types.js';



const fetchSurveyBegin = () => ({
  type: types.FETCH_SURVEY_BEGIN
});

const fetchSurveySuccess = data => ({
  type: types.FETCH_SURVEY_SUCCESS,
  payload: data
});

const fetchSurveyError = error => ({
  type: types.FETCH_SURVEY_ERROR,
  payload: { error }
});



export default {
  fetchSurveySuccess,
  fetchSurveyError,
  fetchSurveyBegin
};


