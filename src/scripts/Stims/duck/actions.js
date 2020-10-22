import types from './types.js';

const fetchStimsBegin = () => ({
  type: types.FETCH_STIMS_BEGIN
});

const fetchStimsSuccess = (data) => ({
  type: types.FETCH_STIMS_SUCCESS,
  payload: data,

});

const fetchStimsError = error => ({
  type: types.FETCH_STIMS_ERROR,
  payload: { error }
});
const setStimFilter = (value, currentSort) => ({
  type: types.SET_STIM_FILTER,
  value: value,
  currentSort: currentSort,
  [`${currentSort}`]: value
});

const getTypesBegin = () => ({
  type: types.GET_TYPES_BEGIN
});

const getTypesSuccess = (env, media, stimTypes, language) => ({
  type: types.GET_TYPES_SUCCESS,
  environmentTypes: env,
  mediaTypes: media,
  stimTypes: stimTypes,
  languageTypes: language
});

const setMediaFilter = (media) => ({
  type: types.SET_MEDIA_FILTER,
  media: media,
});

const setStimTypeFilter = (stimType) => ({
  type: types.SET_STIM_TYPE_FILTER,
  stimType: stimType
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

export default {
  fetchStimsBegin,
  fetchStimsSuccess,
  fetchStimsError,
  setStimFilter,
  getTypesBegin,
  getTypesSuccess,
  setMediaFilter,
  setStimTypeFilter,
  sortByAscendingOrder,
  sortByDecendingOrder
};


