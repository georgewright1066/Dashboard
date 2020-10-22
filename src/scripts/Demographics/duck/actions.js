import types from './types.js';

const fetchDemographicBegin = () => ({
  type: types.FETCH_DEMOGRAPHIC_BEGIN
});

const fetchDemographicSuccess = data => ({
  type: types.FETCH_DEMOGRAPHIC_SUCCESS,
  payload: data
});

const fetchDemographicError = error => ({
  type: types.FETCH_DEMOGRAPHIC_ERROR,
  payload: { error }
});

const setDemographicFilter = filter => ({
  type: types.SET_DEMOGRAPHIC_FILTER,
  payload: filter
});

const fetchDemographicGraphBegin = () => ({
  type: types.FETCH_GRAPH_DEMOGRAPHIC_BEGIN
});

const fetchDemographicGraphSuccess = data => ({
  type: types.FETCH_GRAPH_DEMOGRAPHIC_SUCCESS,
  payload: data
});
const fetchDemographicGraphError = error => ({
  type: types.FETCH_GRAPH_DEMOGRAPHIC_ERROR,
  payload: { error }
});

const fetchDemographicRawBegin = () => ({
  type: types.FETCH_DEMOGRAPHIC_RAW_BEGIN
});

const fetchDemographicRawSuccess = data => ({
  type: types.FETCH_DEMOGRAPHIC_RAW_SUCCESS,
  payload: data
});

const fetchDemographicRawError = error => ({
  type: types.FETCH_DEMOGRAPHIC_RAW_ERROR,
  payload: { error }
});




export default {
  fetchDemographicBegin,
  fetchDemographicSuccess,
  fetchDemographicError,
  setDemographicFilter,
  fetchDemographicRawSuccess,
  fetchDemographicRawError,
  fetchDemographicRawBegin,
  fetchDemographicGraphBegin,
  fetchDemographicGraphSuccess,
  fetchDemographicGraphError
};


