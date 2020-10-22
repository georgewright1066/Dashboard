import types from './types';

const isolationData = (state = {
  data: [],
  whichStudiesAreChecked: [],
  loading: true,
  checked: false,
  studiesOverview: [],
  studiesOverviewLoading: true
}, action) => {
  switch (action.type) {
    case types.ADD_COMPARE_STUDY: {
      return {
        ...state,
        whichStudiesAreChecked: [...state.whichStudiesAreChecked, action.id]
      };
    }
    case types.REMOVE_COMPARE_STUDY: {
      return {
        ...state,
        whichStudiesAreChecked: state.whichStudiesAreChecked.filter(item => item !== action.id)
      };
    }
    case types.CLEAR_CHECKED_STUDIES: {
      return {
        ...state,
        whichStudiesAreChecked: []
      };
    }
    case types.FETCH_STIM_BEGIN: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }
    case types.FETCH_STIM_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    }
    case types.FETCH_STUDIES_OVERVIEW_SUCCESS: {
      return {
        ...state,
        studiesOverview: action.payload,
        studiesOverviewLoading: false
      };
    }
    case types.FETCH_STIM_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    }
    case types.CHECK_ALL_IN_STEP: {
      return {
        ...state,
        checked: true
      };
    }
    case types.REMOVE_ALL_IN_STEP: {
      return {
        ...state,
        checked: false
      };
    }
    default:
      return state;
  }
};

export default isolationData;


