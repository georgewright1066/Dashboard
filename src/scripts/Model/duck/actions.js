import types from './types.js';



const fetchAgeBegin = () => ({
  type: types.FETCH_AGE_BEGIN
});

const fetchAgeSuccess = data => ({
  type: types.FETCH_AGE_SUCCESS,
  payload: data
});

const fetchAgeError = error => ({
  type: types.FETCH_AGE_ERROR,
  payload: { error }
});

const fetchEarningsBegin = () => ({
  type: types.FETCH_EARNINGS_BEGIN
});

const fetchEarningsSuccess = data => ({
  type: types.FETCH_EARNINGS_SUCCESS,
  payload: data
});

const fetchEarningsError = error => ({
  type: types.FETCH_EARNINGS_ERROR,
  payload: { error }
});

const fetchFamilyBegin = () => ({
  type: types.FETCH_FAMILY_BEGIN
});

const fetchFamilySuccess = data => ({
  type: types.FETCH_FAMILY_SUCCESS,
  payload: data
});

const fetchFamilyError = error => ({
  type: types.FETCH_FAMILY_ERROR,
  payload: { error }
});

const fetchGenderBegin = () => ({
  type: types.FETCH_GENDER_BEGIN
});

const fetchGenderSuccess = data => ({
  type: types.FETCH_GENDER_SUCCESS,
  payload: data
});

const fetchGenderError = error => ({
  type: types.FETCH_GENDER_ERROR,
  payload: { error }
});

const addToFiltersArray = item => ({
  type: types.ADD_TO_FILTERS_ARRAY,
  payload: item
});

const removeFromFiltersArray = item => ({
  type: types.REMOVE_FILTERS_ARRAY,
  payload: item
});

const setFiltersToLive = () => ({
  type: types.SET_FILTERS_TO_LIVE
});

const clearFilters = () => ({
  type: types.CLEAR_FILTERS
});





export default {
  fetchAgeSuccess,
  fetchAgeError,
  fetchAgeBegin,
  fetchEarningsSuccess,
  fetchEarningsError,
  fetchEarningsBegin,
  fetchFamilySuccess,
  fetchFamilyError,
  fetchFamilyBegin,
  fetchGenderSuccess,
  fetchGenderError,
  fetchGenderBegin,
  addToFiltersArray,
  removeFromFiltersArray,
  setFiltersToLive,
  clearFilters




};


