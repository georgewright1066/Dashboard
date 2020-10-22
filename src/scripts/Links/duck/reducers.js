import types from './types';

const links = (state = {
  links: [],
  linksLoading: true,

}, action) => {
  switch (action.type) {
    case types.FETCH_LINKS_BEGIN: {
      return {
        ...state,
        linksLoading: true,
        error: null
      };
    }
    case types.FETCH_LINKS_SUCCESS: {
      return {
        ...state,
        linksLoading: false,
        links: action.payload,
      };
    }
    case types.FETCH_LINKS_ERROR:
      return {
        ...state,
        linksLoading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};


export default links;



