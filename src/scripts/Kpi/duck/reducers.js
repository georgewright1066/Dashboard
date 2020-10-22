import types from './types';

const kpi = (state = {
  kpiData: [],
  loading: true,
  filter: '',
  graphData: [],
  graphLoading: true,
  rawKpiData: [],
  rawLoading: true,
  participantReportData: [],
  participantReportLoading: true
}, action) => {
  switch (action.type) {
    case types.FETCH_KPI_BEGIN: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }
    case types.FETCH_KPI_SUCCESS: {
      return {
        ...state,
        kpiData: action.payload,
        loading: false
      };
    }
    case types.FETCH_KPI_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    case types.SET_KPI_FILTER: {
      return {
        ...state,
        filter: action.payload
      };
    }
    case types.FETCH_GRAPH_KPI_BEGIN: {
      return {
        ...state,
        graphLoading: true,
        error: null
      };
    }
    case types.FETCH_GRAPH_KPI_SUCCESS: {
      return {
        ...state,
        graphData: action.payload,
        graphLoading: false
      };
    }
    case types.FETCH_GRAPH_KPI_ERROR:
      return {
        ...state,
        graphLoading: false,
        error: action.payload.error,
      };
    case types.FETCH_KPI_RAW_BEGIN: {
      return {
        ...state,
        rawLoading: true,
        error: null
      };
    }
    case types.FETCH_KPI_RAW_SUCCESS: {
      return {
        ...state,
        rawKpiData: action.payload.data.data,
        rawLoading: false
      };
    }
    case types.FETCH_KPI_RAW_ERROR:
      return {
        ...state,
        rawLoading: false,
        error: action.payload.error,
      };
    case types.FETCH_PARTICIPANT_REPORT_BEGIN: {
      return {
        ...state,
        participantReportLoading: true,
      };
    }
    case types.FETCH_PARTICIPANT_REPORT_SUCCESS: {
      return {
        ...state,
        participantReportData: action.payload.data,
        participantReportLoading: false
      };
    }
    case types.FETCH_PARTICIPANT_REPORT_ERROR:
      return {
        ...state,
        participantReportLoading: false,
      };
    default:
      return state;
  }
};

export default kpi;



