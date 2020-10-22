import types from './types';

const filter = (state = {
  ageData: [],
  locationData:[],
  familyData:[],
  genderData:[],
  loading: true,
  genderLoading: true,
  familyLoading:true,
  earningsLoading:true,
  filtersArray:[],
  areFiltersLive: false,
  modalOpen: false,
  checkedItems: []

}, action ) => {
  switch(action.type) {
  case types.FETCH_AGE_BEGIN: {
    return {
      ...state,
      loading: true,
      error: null
    };
  }
  case types.FETCH_AGE_SUCCESS: {
    return {
      ...state,
      ageData: action.payload,
      loading: false};
  }
  case types.FETCH_AGE_ERROR:
    return {
      ...state,
      error: action.payload.error,
    };
  case types.FETCH_FAMILY_BEGIN: {
    return {
      ...state,
      error: null
    };
  }
  case types.FETCH_FAMILY_SUCCESS: {
    return {
      ...state,
      familyData: action.payload,
      familyLoading: false
    };
  }
  case types.FETCH_FAMILY_ERROR:
    return {
      ...state,
      error: action.payload.error,
    };
  case types.FETCH_EARNINGS_BEGIN: {
    return {
      ...state,
      error: null
    };
  }
  case types.FETCH_EARNINGS_SUCCESS: {
    return {
      ...state,
      earningsData: action.payload,
      earningsLoading: false
    };
  }
  case types.FETCH_EARNINGS_ERROR:
    return {
      ...state,
      error: action.payload.error,
    };
  case types.FETCH_GENDER_BEGIN: {
    return {
      ...state,
      error: null
    };
  }
  case types.FETCH_GENDER_SUCCESS: {
    return {
      ...state,
      genderData: action.payload,
      genderLoading: false
    };
  }
  case types.FETCH_GENDER_ERROR:
    return {
      ...state,
      error: action.payload.error,
    };
  case types.ADD_TO_FILTERS_ARRAY:
    return {
      ...state,
      filtersArray: [...state.filtersArray, action.payload]
    };
  case types.REMOVE_FILTERS_ARRAY: {
    return {...state,
      filtersArray:  state.filtersArray.filter(item => item  !== action.payload)
    };
  }
  case types.SET_FILTERS_TO_LIVE: {
    return {...state,
      areFiltersLive: true,
      modalOpen: false
    };
  }
  case types.CLEAR_FILTERS: {
    return {...state,
      areFiltersLive: false,
      filtersArray: [],
      modalOpen: false
    };
  }
  case types.OPEN_MODAL: {
    return {...state,
      modalOpen: true,
    };
  }
  case types.CLOSE_MODAL: {
    return {...state,
      modalOpen: false,
    };
  }

  default:
    return state;
  }
};

export default filter;


