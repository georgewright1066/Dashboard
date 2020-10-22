import types from './types';

const survey = (state = {
  surveyData: {},
  loading:true
}, action ) => {
  switch(action.type) {
  case types.FETCH_SURVEY_BEGIN: {
    return {
      ...state,
      loading: true,
      error: null
    };
  }
  case types.FETCH_SURVEY_SUCCESS: {
    return {
      ...state,
      surveyData: action.payload,
      loading: false};
  }
  case types.FETCH_SURVEY_ERROR:
    return {
      ...state,
      error: action.payload.error,
    };

  default:
    return state;
  }
};

export default survey;


