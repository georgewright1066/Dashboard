import types from './types';

const stims = (state = {
  stims: [],
  loading: true,
  tableHeadings: [
    { name: "Name", tooltip: false },
    { name: "Media", tooltip: false },
    { name: "Brand", tooltip: false },
    { name: "Width", tooltip: false },
    { name: "Height", tooltip: false },
    { name: "Id", tooltip: false },
    { name: "Type", tooltip: false },
    { name: "AOI", tooltip: true, content: 'Define areas of interest.' }],
  filterValue: '',
  environmentTypes: [],
  mediaTypes: [],
  stimTypes: [],
  languageTypes: [],
  currentSort: 'search',
  typesLoading: true,
  media: 'All',
  stimType: 'All',
  sortType: 'DECENDING',
}, action) => {
  switch (action.type) {
    case types.FETCH_STIMS_BEGIN: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }
    case types.FETCH_STIMS_SUCCESS: {
      return {
        ...state,
        loading: false,
        stims: [...action.payload.data],
        // environmentTypes: action.environmentTypes,
        // mediaTypes: action.mediaTypes,
        // stimTypes: action.stimTypes
      };
    }
    case types.FETCH_STIMS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case types.SET_STIM_FILTER:
      return {
        ...state,
        currentSort: action.currentSort,
        filterValue: action.value,
        media: action.media ? action.media : state.media,
      };
    case types.GET_TYPES_BEGIN:
      return {
        ...state,
        typesLoading: true
      };
    case types.GET_TYPES_SUCCESS:
      return {
        ...state,
        environmentTypes: action.environmentTypes,
        mediaTypes: action.mediaTypes,
        stimTypes: action.stimTypes,
        languageTypes: action.languageTypes,
        typesLoading: false
      };
    case types.SET_MEDIA_FILTER:
      return {
        ...state,
        media: action.media
      };
    case types.SET_STIM_TYPE_FILTER:
      return {
        ...state,
        stimType: action.stimType ? action.stimType : state.stimType
      };
    case types.SORT_BY_ASCENDING_ORDER:
      return {
        ...state,
        sortType: action.ascOrDec,
        currentSort: action.item
      };
    case types.SORT_BY_DECENDING_ORDER:
      return {
        ...state,
        sortType: action.ascOrDec,
        currentSort: action.item
      };
    default:
      return state;
  }
};


export default stims;



