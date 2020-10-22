import types from './types.js';

const fetchBatchStimsBegin = () => ({
  type: types.FETCH_BATCH_STIMS_BEGIN
});

const fetchBatchStimsSuccess = data => ({
  type: types.FETCH_BATCH_STIMS_SUCCESS,
  payload: data
});

const fetchBatchStimsError = error => ({
  type: types.FETCH_BATCH_STIMS_ERROR,
  payload: { error }
});

const fetchBatchStimsListBegin = () => ({
  type: types.FETCH_BATCH_STIMS_LIST_BEGIN
});

const fetchBatchStimsListSuccess = data => ({
  type: types.FETCH_BATCH_STIMS_LIST_SUCCESS,
  payload: data
});

const fetchBatchStimsListError = error => ({
  type: types.FETCH_BATCH_STIMS_LIST_ERROR,
  payload: { error }
});

const fetchBatchDataBegin = () => ({
  type: types.FETCH_BATCH_DATA_BEGIN
});

const fetchBatchDataSuccess = data => ({
  type: types.FETCH_BATCH_DATA_SUCCESS,
  payload: data
});

const fetchBatchDataError = error => ({
  type: types.FETCH_BATCH_DATA_ERROR,
  payload: { error }
});

const fetchVisualsBegin = () => ({
  type: types.FETCH_VISUALS_BEGIN
});

const fetchVisualsSuccess = data => {
  return {
    type: types.FETCH_VISUALS_SUCCESSS,
    payload: data
  };
}

const fetchVisualsError = error => ({
  type: types.FETCH_ViSUALS_ERROR,
  payload: { error }
});

const fetchReportBegin = () => ({
  type: types.FETCH_REPORT_BEGIN
});

const fetchReportSuccess = data => ({
  type: types.FETCH_REPORT_SUCCESS,
  payload: data
});

const fetchReportError = error => ({
  type: types.FETCH_REPORT_ERROR,
  payload: { error }
});

const fetchReportStatsBegin = () => ({
  type: types.FETCH_REPORT_STATS_BEGIN
});

const fetchReportStatsSuccess = data => {
  return {
    type: types.FETCH_REPORT_STATS_SUCCESS,
    payload: data
  };
}

const fetchReportStatsError = error => ({
  type: types.FETCH_REPORT_STATS_ERROR,
  payload: { error }
});

const fetchReportFeatureBegin = () => ({
  type: types.FETCH_REPORT_FEATURE_BEGIN
});

const fetchReportFeatureSuccess = data => ({
  type: types.FETCH_REPORT_FEATURE_SUCCESS,
  payload: data
});

const fetchReportFeatureError = error => ({
  type: types.FETCH_REPORT_FEATURE_ERROR,
  payload: { error }
});

const fetchGraphBegin = () => ({
  type: types.FETCH_BATCH_GRAPH_BEGIN
});

const fetchGraphSuccess = data => ({
  type: types.FETCH_BATCH_GRAPH_SUCCESS,
  payload: data
});

const fetchGraphError = error => ({
  type: types.FETCH_BATCH_GRAPH_ERROR,
  payload: { error }
});

const setMediaFilter = media => ({
  type: types.SET_BATCH_MEDIA_FILTER,
  media: media
});

const setStimFilter = stimType => ({
  type: types.SET_BATCH_STIM_FILTER,
  stimType: stimType
});

const onSearchById = value => ({
  type: types.ON_SEARCH_BY_ID,
  searchTerm: value
});

export default {

  fetchBatchStimsBegin,
  fetchBatchStimsSuccess,
  fetchBatchStimsError,
  fetchBatchDataBegin,
  fetchBatchDataSuccess,
  fetchBatchDataError,
  fetchVisualsBegin,
  fetchVisualsSuccess,
  fetchVisualsError,
  fetchReportBegin,
  fetchReportSuccess,
  fetchReportError,
  fetchReportStatsBegin,
  fetchReportStatsSuccess,
  fetchReportStatsError,
  fetchReportFeatureBegin,
  fetchReportFeatureSuccess,
  fetchReportFeatureError,
  fetchGraphBegin,
  fetchGraphSuccess,
  fetchGraphError,
  setMediaFilter,
  setStimFilter,
  onSearchById,
  fetchBatchStimsListBegin,
  fetchBatchStimsListSuccess,
  fetchBatchStimsListError,


};


