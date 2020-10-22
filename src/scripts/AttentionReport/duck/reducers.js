import types from './types';

const attentionReport = (state = {
  attentionReportData: {},
  featureReportData: {},
  loading: true,
  visualLoading: true,
  featureLoading: true,
  visualData: {},
  filter: 'avg_stim_dwell_time',
  visualFilter: 'original_url',
  featureFilter: '',
  graphData: {},
  graphLoading: true,
}, action) => {
  switch (action.type) {
    case types.FETCH_ATTENTION_BEGIN: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }
    case types.FETCH_ATTENTION_SUCCESS: {
      return {
        ...state,
        attentionReportData: action.payload,
        loading: false
      };
    }
    case types.FETCH_ATTENTION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    case types.SET_ATTENTION_FILTER: {
      return {
        ...state,
        filter: action.payload,
        visualLoading: true,

      };
    }
    case types.VISUALS_BEGIN: {
      return {
        ...state,
        visualLoading: true,
        error: null
      };
    }
    case types.FETCH_VISUALS_SUCCESS: {
      return {
        ...state,
        visualData: action.payload.response.data,
        visualLoading: false
      };
    }
    case types.FETCH_VISUALS_ERROR:
      return {
        ...state,
        visualLoading: false,
        error: action.payload.error,
      };
    case types.SET_VISUALS_FILTER: {
      return {
        ...state,
        visualFilter: action.payload
      };
    }
    case types.FETCH_FEATURE_REPORT_BEGIN: {
      return {
        ...state,
        featureLoading: true,
        error: null
      };
    }
    case types.FETCH_FEATURE_REPORT_SUCCESS: {
      return {
        ...state,
        featureReportData: action.payload.feature.data,
        featureLoading: false
      };
    }
    case types.FETCH_FEATURE_REPORT_ERROR:
      return {
        ...state,
        featureLoading: false,
        error: action.payload.error,
        items: []
      };
    case types.SET_FEATURE_FILTER: {
      return {
        ...state,
        featureFilter: action.payload
      };
    }
    case types.FETCH_GRAPH_BEGIN: {
      return {
        ...state,
        graphLoading: true,
        error: null
      };
    }
    case types.FETCH_GRAPH_SUCCESS: {
      return {
        ...state,
        graphData: action.payload,
        graphLoading: false
      };
    }
    case types.FETCH_GRAPH_ERROR:
      return {
        ...state,
        graphLoading: false,
        error: action.payload.error,
        items: []
      };
    case types.FETCH_DEMOGRAPHIC_BEGIN: {
      return {
        ...state,
        demographicLoading: true,
        error: null
      };
    }
    case types.FETCH_DEMOGRAPHIC_SUCCESS: {
      return {
        ...state,
        demographicData: action.payload,
        demographicLoading: false
      };
    }
    case types.FETCH_DEMOGRAPHIC_ERROR:
      return {
        ...state,
        demographicLoading: false,
        error: action.payload.error,
        items: []
      };
    default:
      return state;
  }
};

export default attentionReport;
