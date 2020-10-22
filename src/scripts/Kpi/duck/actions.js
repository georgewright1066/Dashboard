import types from './types.js';

const fetchKpiBegin = () => ({
  type: types.FETCH_KPI_BEGIN
});

const fetchKpiSuccess = data => ({
  type: types.FETCH_KPI_SUCCESS,
  payload: data
});

const fetchKpiError = error => ({
  type: types.FETCH_KPI_ERROR,
  payload: { error }
});

const setKpiFilter = filter => ({
  type: types.SET_KPI_FILTER,
  payload: filter
});

const fetchKpiGraphBegin = () => ({
  type: types.FETCH_GRAPH_KPI_BEGIN
});

const fetchKpiGraphSuccess = data => ({
  type: types.FETCH_GRAPH_KPI_SUCCESS,
  payload: data
});
const fetchKpiGraphError = error => ({
  type: types.FETCH_GRAPH_KPI_ERROR,
  payload: { error }
});

const fetchKpiRawBegin = () => ({
  type: types.FETCH_KPI_RAW_BEGIN
});

const fetchKpiRawSuccess = data => ({
  type: types.FETCH_KPI_RAW_SUCCESS,
  payload: data
});

const fetchKpiRawError = error => ({
  type: types.FETCH_KPI_RAW_ERROR,
  payload: { error }
});

const fetchParticipantReportBegin = () => ({
  type: types.FETCH_PARTICIPANT_REPORT_BEGIN
});

const fetchParticipantReportSuccess = data => ({
  type: types.FETCH_PARTICIPANT_REPORT_SUCCESS,
  payload: data
});

const fetchParticipantReportError = error => ({
  type: types.FETCH_PARTICIPANT_REPORT_ERROR,
  payload: { error }
});





export default {
  fetchKpiBegin,
  fetchKpiSuccess,
  fetchKpiError,
  setKpiFilter,
  fetchKpiRawSuccess,
  fetchKpiRawError,
  fetchKpiRawBegin,
  fetchKpiGraphBegin,
  fetchKpiGraphSuccess,
  fetchKpiGraphError,
  fetchParticipantReportBegin,
  fetchParticipantReportSuccess,
  fetchParticipantReportError
};


