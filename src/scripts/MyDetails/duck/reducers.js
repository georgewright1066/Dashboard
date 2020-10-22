import types from './types';

const userData = (state = {
  userData: {},
  authenticated:false
}, action) => {
  switch(action.type) {
  case types.FETCH_USER_DATA_BEGIN: {
    return {
      ...state,
      loading: true,
      error: null
    };
  }
  case types.FETCH_USER_DATA_SUCCESS: {
    return {
      ...state,
      userData: action.payload.data,
      loading: false};
  }
  case types.FETCH_USER_DATA_ERROR:
    return {
      ...state,
      loading: false,
      error: action.payload.error,
      items: []
    };
  case types.AUTHENTICATED:
    return { ...state, authenticated: true };
  case types.UNAUTHENTICATED:
    return { ...state, authenticated: false };
  case types.AUTHENTICATION_ERROR:
    return { ...state, error: action.payload };

  default:
    return state;
  }
};


export default userData;



