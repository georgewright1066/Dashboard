import types from './types.js';

const fetchFeatureBegin = () => ({
  type: types.FETCH_FEATURE_BEGIN
});

const fetchFeatureSuccess = data => ({
  type: types.FETCH_FEATURE_SUCCESS,
  payload: data
});

const fetchFeatureError = error => ({
  type: types.FETCH_FEATURE_ERROR,
  payload: { error }
});


const setFeatureAnalysisFilter = filter => ({
  type: types.SET_FEATURE_ANALYSIS_FILTER,
  payload: filter
});

const fetchFeatureRawBegin = () => ({
  type: types.FETCH_FEATURE_RAW_BEGIN
});

const fetchFeatureRawSuccess = data => ({
  type: types.FETCH_FEATURE_RAW_SUCCESS,
  payload: data
});

const fetchFeatureRawError = error => ({
  type: types.FETCH_FEATURE_RAW_ERROR,
  payload: { error }
});


export default {
  fetchFeatureBegin,
  fetchFeatureSuccess,
  fetchFeatureError,
  setFeatureAnalysisFilter,
  fetchFeatureRawSuccess,
  fetchFeatureRawError,
  fetchFeatureRawBegin,

};


