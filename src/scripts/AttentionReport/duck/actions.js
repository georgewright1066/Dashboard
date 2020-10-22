import types from './types.js';


const fetchAttentionBegin = () => ({
  type: types.FETCH_ATTENTION_BEGIN
});

const fetchAttentionSuccess = attention => ({
  type: types.FETCH_ATTENTION_SUCCESS,
  payload: { attention }
});

const fetchAttentionError = error => ({
  type: types.FETCH_ATTENTION_ERROR,
  payload: { error }
});

const fetchGraphBegin = () => ({
  type: types.FETCH_GRAPH_BEGIN
});

const fetchGraphSuccess = response => ({
  type: types.FETCH_GRAPH_SUCCESS,
  payload: { response }
});

const fetchGraphError = error => ({
  type: types.FETCH_GRAPH_ERROR,
  payload: { error }
});


const fetchFeatureBegin = () => ({
  type: types.FETCH_FEATURE_REPORT_BEGIN
});

const fetchFeatureSuccess = feature => ({
  type: types.FETCH_FEATURE_REPORT_SUCCESS,
  payload: { feature }
});

const fetchFeatureError = error => ({
  type: types.FETCH_FEATURE_REPORT_ERROR,
  payload: { error }
});

const setFeatureFilter = filter =>  ({
  type: types.SET_FEATURE_FILTER,
  payload: { filter }
});

const setAttentionFilter = filter =>  ({
  type: types.SET_ATTENTION_FILTER,
  payload: { filter }
});

const setVisualsFilter = filter =>  ({
  type: types.SET_VISUALS_FILTER,
  payload: { filter }
});

const fetchVisualsBegin = () => ({
  type: types.FETCH_VISUALS_BEGIN
});

const fetchVisualsSuccess = response => ({
  type: types.FETCH_VISUALS_SUCCESS,
  payload: { response }
});

const fetchVisualsError = error => ({
  type: types.FETCH_VISUALS_ERROR,
  payload: { error }
});

const fetchDemographicBegin = () => ({
  type: types.FETCH_DEMOGRAPHIC_BEGIN
});

const fetchDemographicSuccess = response => ({
  type: types.FETCH_DEMOGRAPHIC_SUCCESS,
  payload: { response }
});

const fetchDemographicError = error => ({
  type: types.FETCH_DEMOGRAPHIC_ERROR,
  payload: { error }
});



export default {
  setAttentionFilter,
  setFeatureFilter,
  fetchFeatureError,
  fetchFeatureSuccess,
  fetchFeatureBegin,
  fetchGraphError,
  fetchGraphSuccess,
  fetchGraphBegin,
  fetchAttentionError,
  fetchAttentionBegin,
  fetchAttentionSuccess,
  fetchVisualsBegin,
  fetchVisualsSuccess,
  fetchVisualsError,
  setVisualsFilter,
  fetchDemographicBegin,
  fetchDemographicSuccess,
  fetchDemographicError,
};
