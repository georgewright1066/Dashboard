import types from './types';

const batchStims = (state = {
  batchStims: [],
  batchStimsLoading: true,
  batchStimsList: [],
  batchStimsListLoading: true,
  tableHeadings: [
    { name: "Name" },
    { name: "Batch Id" },
    { name: "Estimated Batch Size" },
    { name: "Live" },
    { name: "Completed" },
    { name: "Data Collection Start" },
    { name: "Data Collection End" },
    { name: "Report Generated" }
  ],
  batchesLoading: true,
  batchData: [],
  batchTableHeadings: [
    { name: "Identifier", tooltip: false },
    { name: "Name", tooltip: false },
    { name: "Type", tooltip: false },
    { name: "Width x Height", tooltip: false },
    { name: "Discovered Date", tooltip: false },
    { name: "AOI", tooltip: true, content: 'Define areas of interest.' }
  ],
  reportStatsLoading: true,
  reportStatsData: [],
  reportFeatureLoading: true,
  reportFeatureData: [],
  visualsLoading: true,
  batchGraphData: [],
  batchGraphLoading: true,
  searchTerm: '',
  stimType: undefined,
  searchByIdTerm: ''

}, action) => {
  switch (action.type) {
    case types.FETCH_BATCH_STIMS_BEGIN: {
      return {
        ...state,
        batchStimsLoading: true,
        error: null
      };
    }
    case types.FETCH_BATCH_STIMS_SUCCESS: {
      return {
        ...state,
        batchStimsLoading: false,
        batchStims: action.payload,
      };
    }
    case types.FETCH_BATCH_STIMS_ERROR:
      return {
        ...state,
        batchStimsLoading: false,
        error: action.payload.error,
      };
    case types.FETCH_BATCH_STIMS_LIST_BEGIN: {
      return {
        ...state,
        batchStimsListLoading: true,
        error: null
      };
    }
    case types.FETCH_BATCH_STIMS_LIST_SUCCESS: {
      return {
        ...state,
        batchStimsListLoading: false,
        batchStimsList: action.payload,
      };
    }
    case types.FETCH_BATCH_STIMS_LIST_ERROR:
      return {
        ...state,
        batchStimsListLoading: false,
        error: action.payload.error,
      };
    case types.FETCH_BATCH_DATA_BEGIN: {
      return {
        ...state,
        batchesLoading: true,
        error: null
      };
    }
    case types.FETCH_BATCH_DATA_SUCCESS: {
      return {
        ...state,
        batchesLoading: false,
        batchData: action.payload
      };
    }
    case types.FETCH_BATCH_DATA_ERROR:
      return {
        ...state,
        batchesLoading: false,
        error: action.payload.error,
      };
    case types.FETCH_REPORT_BEGIN: {
      return {
        ...state,
        reportLoading: true,
        error: null
      };
    }
    case types.FETCH_REPORT_SUCCESS: {
      return {
        ...state,
        reportLoading: false,
        reportData: action.payload
      };
    }
    case types.FETCH_REPORT_ERROR:
      return {
        ...state,
        reportLoading: false,
        error: action.payload.error,
      };
    case types.FETCH_VISUALS_BEGIN: {
      return {
        ...state,
        visualsLoading: true,
        error: null
      };
    }
    case types.FETCH_VISUALS_SUCCESSS: {
      return {
        ...state,
        visualsLoading: false,
        visualsData: action.payload
      };
    }
    case types.FETCH_VISUALS_ERROR:
      return {
        ...state,
        visualsLoading: false,
        error: action.payload.error,
      };
    case types.FETCH_REPORT_FEATURE_BEGIN: {
      return {
        ...state,
        reportFeatureLoading: true,
        error: null
      };
    }
    case types.FETCH_REPORT_FEATURE_SUCCESS: {
      return {
        ...state,
        reportFeatureLoading: false,
        reportFeatureData: action.payload
      };
    }
    case types.FETCH_REPORT_FEATURE_ERROR:
      return {
        ...state,
        reportFeatureLoading: false,
        error: action.payload.error,
      };
    case types.FETCH_REPORT_STATS_BEGIN: {
      return {
        ...state,
        reportStatsLoading: true,
        error: null
      };
    }
    case types.FETCH_REPORT_STATS_SUCCESS: {
      return {
        ...state,
        reportStatsLoading: false,
        reportStatsData: action.payload
      };
    }
    case types.FETCH_REPORT_STATS_ERROR:
      return {
        ...state,
        reportStatsLoading: false,
        error: action.payload.error,
      };
    case types.FETCH_BATCH_GRAPH_BEGIN: {
      return {
        ...state,
        batchGraphLoading: true,
      };
    }
    case types.FETCH_BATCH_GRAPH_SUCCESS: {
      return {
        ...state,
        batchGraphLoading: false,
        batchGraphData: action.payload
      };
    }
    case types.FETCH_BATCH_GRAPH_ERROR:
      return {
        ...state,
        batchGraphLoading: false,
      };
    case types.SET_BATCH_MEDIA_FILTER:
      return {
        ...state,
        searchTerm: action.media,
      };
    case types.SET_BATCH_STIM_FILTER:
      return {
        ...state,
        stimType: action.stimType,
      };
    case types.ON_SEARCH_BY_ID:
      return {
        ...state,
        searchByIdTerm: action.searchTerm,
      };
    default:
      return state;
  }
};


export default batchStims;



