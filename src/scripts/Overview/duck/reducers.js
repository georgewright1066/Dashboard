import types from './types';

const overview = (state = {
  audienceLoading: true,
  error: null,
  audienceOverviewError: null,
  audienceOverview: {},
  overviewData: {},
  overviewLoading: true,
  modalOpen: false,
  panelOverview: {},
  panelLoading: true,
  confirmationModalOpen: false,
  deleteId: null,
  filesModalOpen: false,
  filesData: []
}, action) => {
  switch (action.type) {

    case types.OPEN_AUDIENCE_MODAL: {
      return {
        ...state,
        modalOpen: true,
        id: action.id
      };

    }
    case types.CLOSE_AUDIENCE_MODAL: {
      return {
        ...state,
        modalOpen: false,
      };
    }
    case types.OPEN_CONFIRMATION_MODAL: {

      return {
        ...state,
        confirmationModalOpen: true,
        deleteId: action.id
      };

    }
    case types.CLOSE_CONFIRMATION_MODAL: {
      return {
        ...state,
        confirmationModalOpen: false,
      };
    }
    case types.CREATE_PANEL_SUCCESS: {
      return {
        ...state,
        modalOpen: false,
      };
    }
    case types.CREATE_PANEL_ERROR: {
      return {
        ...state,
        modalOpen: false,
      };
    }

    case types.FETCH_OVERVIEW_BEGIN: {
      return {
        ...state,
        overviewLoading: true,
        error: null
      };
    }
    case types.FETCH_OVERVIEW_SUCCESS: {

      return {
        ...state,
        overviewData: action.payload,
        overviewLoading: false
      };
    }
    case types.FETCH_OVERVIEW_ERROR: {
      return {
        ...state,
        overviewLoading: false,
        error: action.payload.error,
      };
    }

    case types.FETCH_AUDIENCE_OVERVIEW_BEGIN: {
      return {
        ...state,
        audienceLoading: true,
        error: null
      };
    }
    case types.FETCH_AUDIENCE_OVERVIEW_SUCCESS: {

      return {
        ...state,
        audienceOverview: action.payload,
        audienceLoading: false
      };
    }
    case types.FETCH_AUDIENCE_OVERVIEW_ERROR: {
      return {
        ...state,
        audienceLoading: false,
        audienceOverviewError: action.payload.error,
      };
    }
    case types.FETCH_PANEL_DETAILS_BEGIN: {
      return {
        ...state,
        panelLoading: true,
        error: null
      };
    }
    case types.FETCH_PANEL_DETAILS_SUCCESS: {

      return {
        ...state,
        panelOverview: action.payload,
        panelLoading: false
      };
    }
    case types.FETCH_PANEL_DETAILS_ERROR: {
      return {
        ...state,
        panelLoading: false,
        panelOverviewError: action.payload.error,
      };
    }
    case types.DELETE_SUCCESS: {
      return {
        ...state,
        confirmationModalOpen: false,
      };

    }
    case types.OPEN_FILES_MODAL: {
      return {
        ...state,
        filesModalOpen: true,
        filesData: action.payload
      };
    }
    case types.CLOSE_FILES_MODAL: {
      return {
        ...state,
        filesModalOpen: false,
      };
    }

    default:
      return state;
  }
};

export default overview;


