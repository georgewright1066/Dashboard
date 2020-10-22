import types from './types';

const editAudience = (state = {
  audienceData: {},
  loading: true
}, action) => {
  switch (action.type) {
    case types.FETCH_AUDIENCE_BEGIN: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }
    case types.FETCH_AUDIENCE_SUCCESS: {
      return {
        ...state,
        audienceData: action.payload,
        loading: false,

      };
    }
    case types.FETCH_AUDIENCE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};


export default editAudience;



