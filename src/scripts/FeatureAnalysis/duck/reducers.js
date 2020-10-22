import types from './types';

const featureAnalysis = (state = {
  featureData: [],
  loading: true,
  filter: '',
  rawFeatureData: [],
  rawLoading: true
}, action) => {
  switch (action.type) {
    case types.FETCH_FEATURE_BEGIN: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }
    case types.FETCH_FEATURE_SUCCESS: {
      return {
        ...state,
        featureData: action.payload,
        loading: false
      };
    }
    case types.FETCH_FEATURE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    case types.SET_FEATURE_ANALYSIS_FILTER: {
      return {
        ...state,
        filter: action.payload,
      };
    }
    case types.FETCH_FEATURE_RAW_BEGIN: {
      return {
        ...state,
        rawLoading: true,
        error: null
      };
    }
    case types.FETCH_FEATURE_RAW_SUCCESS: {
      return {
        ...state,
        rawFeatureData: action.payload.data.data,
        rawLoading: false
      };
    }
    case types.FETCH_FEATURE_RAW_ERROR:
      return {
        ...state,
        rawLoading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};


export default featureAnalysis;



