import types from './types';

const studyData = (state = {
  studies: [],
  isLive: false,
  isCompleted: false,
  media: undefined,
  environment: undefined,
  studyTypes: undefined,
  languageTypes: undefined,
  loading: false,
  error: null,
  orderBy: undefined,
  currentSort: undefined,
  type: undefined,
  environmentLoading: true,
  openNewStudyModal: false

}, action) => {
  switch (action.type) {
    case types.FETCH_STUDIES_BEGIN: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }
    case types.FETCH_STUDIES_SUCCESS: {
      return {
        ...state,
        studies: action.payload.studies.data.data,
        totalLive: action.payload.studies.data.total_live,
        totalCompleted: action.payload.studies.data.total_completed,
        loading: false
      };
    }
    case types.FETCH_STUDIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    case types.SORT_BY_ASCENDING_ORDER:
      return {
        ...state,
        studies: state.studies,
        currentSort: action.item,
        type: action.ascOrDec
      };
    case types.SORT_BY_DECENDING_ORDER:
      return {
        ...state,
        studies: state.studies,
        currentSort: action.item,
        type: action.ascOrDec,
        openNewStudyModal: false
      };
    case types.SEARCH: {
      return { ...state, searchTerm: action.value };
    }
    case types.IS_LIVE: {
      return { ...state, isLive: !state.isLive };
    }
    case types.COMPLETED: {
      return { ...state, isCompleted: !state.isCompleted };
    }
    case types.MEDIA_TYPE: {
      return { ...state, media: action.value };
    }
    case types.ENVIRONMENT_TYPE: {
      return { ...state, environment: action.environment };
    }
    case types.ON_ADD_NEW_STUDY: {
      return {
        ...state,
        openNewStudyModal: true,
        environmentData: action.environmentTypes,
        mediaData: action.mediaTypes,
        studyTypes: action.studyTypes,
        languageTypes: action.languageTypes,
        environmentLoading: false
      };
    }
    case types.CANCEL_ON_ADD_NEW_STUDY: {
      return { ...state, openNewStudyModal: false };
    }
    case types.ON_ADD_NEW_STUDY_SUBMIT: {
      return { ...state, openNewStudyModal: false };
    }
    default:
      return state;
  }
};


export default studyData;



