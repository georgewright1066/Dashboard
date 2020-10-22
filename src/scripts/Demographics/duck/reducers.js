import types from './types';

const demographics = (state = {
  demographicData: [],
  loading: true,
  filter:'',
  graphData: [],
  graphLoading: true,
  rawDemographicData:[],
  rawLoading: true
}, action) => {
  switch(action.type) {
  case types.FETCH_DEMOGRAPHIC_BEGIN: {
    return {
      ...state,
      loading: true,
      error: null
    };
  }
  case types.FETCH_DEMOGRAPHIC_SUCCESS: {
    return {
      ...state,
      demographicData: action.payload,
      loading: false};
  }
  case types.FETCH_DEMOGRAPHIC_ERROR:
    return {
      ...state,
      loading: false,
      error: action.payload.error,
      items: []
    };
  case types.SET_DEMOGRAPHIC_FILTER: {
    return {
      ...state,
      filter: action.payload
    };
  }
  case types.FETCH_GRAPH_DEMOGRAPHIC_BEGIN: {
    return {
      ...state,
      graphLoading: true,
      error: null
    };
  }
  case types.FETCH_GRAPH_DEMOGRAPHIC_SUCCESS: {
    return {
      ...state,
      graphData: action.payload,
      graphLoading: false};
  }
  case types.FETCH_GRAPH_DEMOGRAPHIC_ERROR:
    return {
      ...state,
      graphLoading: false,
      error: action.payload.error,
    };
  case types.FETCH_DEMOGRAPHIC_RAW_BEGIN: {
    return {
      ...state,
      rawLoading: true,
      error: null
    };
  }
  case types.FETCH_DEMOGRAPHIC_RAW_SUCCESS: {
    return {
      ...state,
      rawDemographicData: action.payload.data.data,
      rawLoading: false};
  }
  case types.FETCH_DEMOGRAPHIC_RAW_ERROR:
    return {
      ...state,
      rawLoading: false,
      error: action.payload.error,
    };
  default:
    return state;
  }
};

export default demographics;



