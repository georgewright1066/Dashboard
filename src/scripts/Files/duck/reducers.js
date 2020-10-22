import types from './types';

const files = (state = {
  files: [],
  loading: true,

}, action) => {
  switch (action.type) {
    case types.FETCH_ALL_FILES_BEGIN: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }
    case types.FETCH_ALL_FILES_SUCCESS: {
      return {
        ...state,
        loading: false,
        files: [...action.payload],
      };
    }
    case types.FETCH_ALL_FILES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};


export default files;



