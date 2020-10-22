import types from './types';

const editStudyDetails = (state = {
  studyDetails: {},
  authenticated: false,
  environmentOptions: {},
  mediaOptions: [],
  environmentLoading: true,
  mediaLoading: false,
  studyDetailsLoading: false

}, action) => {
  switch (action.type) {
    case types.FETCH_ENVIRONMENT_BEGIN: {
      return {
        ...state,
        environmentLoading: true,
        error: null
      };
    }
    case types.FETCH_ENVIRONMENT_SUCCESS: {
      return {
        ...state,
        environmentOptions: action.payload.data,
        environmentLoading: false
      };
    }
    case types.FETCH_ENVIRONMENT_ERROR:
      return {
        ...state,
        environmentLoading: false,
        error: action.payload.error,
        items: []
      };

    case types.FETCH_MEDIA_BEGIN: {
      return {
        ...state,
        mediaLoading: true,
        error: null
      };
    }
    case types.FETCH_MEDIA_SUCCESS: {
      return {
        ...state,
        mediaOptions: action.payload.data,
        mediaLoading: false
      };
    }
    case types.FETCH_MEDIA_ERROR:
      return {
        ...state,
        mediaLoading: false,
        error: action.payload.error,
        items: []
      };

    case types.FETCH_STUDY_DETAILS_BEGIN: {
      return {
        ...state,
        studyDetailsLoading: true,
        error: null
      };
    }
    case types.FETCH_STUDY_DETAILS_SUCCESS: {
      return {
        ...state,
        studyDetails: action.payload.data,
        studyDetailsLoading: false
      };
    }
    case types.FETCH_STUDY_DETAILS_ERROR:
      return {
        ...state,
        studyDetailsLoading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};


export default editStudyDetails;



