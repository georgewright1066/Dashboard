import types from './types';

const cellStepManagement = (state = {
  modalOpen: false,
  cellData: {},
  dropDownType: '',
  dataFromPrimarySelection: [],
  loading: true,
  initialDropDown: ['Instruction', 'Validation', 'Calibration', 'External', 'Embedded', 'Stim', 'Cache Page', 'Question'],
  rawCellData: {},
  addStepError: '',
  hamburgerModalOpen: false,
  columnId: undefined,
  confirmBoxOpen: false,
  editBoxOpen: false,
  dropdownLoading: true,
  showNotification: false,
  isLocked: true,
  stepType: 'default',
  searchTerm: '',
  cachePageModalOpen: false

}, action) => {
  switch (action.type) {
    case types.SAVED: {
      return {
        ...state,
        showNotification: !state.showNotification
      };
    }

    case types.OPEN_CSM_MODAL: {
      return {
        ...state,
        modalOpen: true,
        id: JSON.stringify(action.id),
        dropDownType: null,
      };

    }
    case types.CLOSE_CSM_MODAL: {
      return {
        ...state,
        modalOpen: false,
        dropDownType: '',
        dataFromPrimarySelection: [],
        loading: false,
        initialDropDown: ['Instruction', 'Validation', 'Calibration', 'External', 'Embedded', 'Stim', 'Cache Page', 'Question'],
        addStepError: '',
        hamburgerModalOpen: false,
        columnId: undefined,
        confirmBoxOpen: false,
        editBoxOpen: false,
        dropdownLoading: true,
        showNotification: false,
        searchTerm: ''

      };
    }
    case types.OPEN_CONFIRM_BOX: {
      return {
        ...state,
        confirmBoxOpen: true,
        editBoxOpen: false,


      };
    }
    case types.CLOSE_CONFIRM_BOX: {
      return {
        ...state,
        confirmBoxOpen: false
      };
    }
    case types.OPEN_EDIT_BOX: {
      return {
        ...state,
        editBoxOpen: true,
        confirmBoxOpen: false


      };
    }
    case types.CLOSE_EDIT_BOX: {
      return {
        ...state,
        editBoxOpen: false,
        confirmBoxOpen: false,

      };
    }
    case types.OPEN_DELETE_HAMBURGER_MODAL: {
      return {
        ...state,
        hamburgerModalOpen: true,
        id: JSON.stringify(action.id),
        dropDownType: null,
        columnId: action.columnId
      };
    }
    case types.CLOSE_DELETE_HAMBURGER_MODAL: {
      return {
        ...state,
        hamburgerModalOpen: false,
        confirmBoxOpen: false,
        editBoxOpen: false

      };
    }
    case types.ON_DRAG_END: {
      return {
        ...state,
        cellData: { ...state.cellData, ...action.payload },
      };
    }
    case types.ON_DROPDOWN_SELECT: {
      return {
        ...state,
        dropDownType: action.payload,
        dataFromPrimarySelection: []
      };
    }
    case types.ADD_NEW_STEP: {
      return {
        ...state,
        cellData: { ...state.cellData, ...action.payload },
        modalOpen: false,


      };
    }
    case types.DELETE_STEP: {
      return {
        ...state,
        cellData: { ...state.cellData, ...action.payload },
        confirmBoxOpen: false,
        modalOpen: false,
        hamburgerModalOpen: false

      };
    }
    case types.FETCH_STEP_BEGIN: {

      return {
        ...state,
        loading: true,
        error: null
      };
    }
    case types.FETCH_STEP_SUCCESS: {

      return {
        ...state,
        cellData: action.payload,
        loading: false,
        modalOpen: false
      };
    }
    case types.FETCH_RAW_STEP_SUCCESS: {
      return {
        ...state,
        rawCellData: action.payload,
        isLocked: action.payload.allow_step_editing
      };
    }
    case types.FETCH_STEP_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case types.POPULATE_FORM_DROPDOWN:
      return {
        ...state,
        dataFromPrimarySelection: action.payload,
        dropdownLoading: false
      };
    case types.ADD_STEP_ERROR:
      return {
        ...state,
        addStepError: action.payload,
      };
    case types.RESET_STATE_TO_LOADING: {
      return {
        ...state,
        dropdownLoading: true
      };
    }
    case types.EDIT_TASK_SUCCESS: {
      return {
        ...state,
        confirmBoxOpen: false,
        editBoxOpen: false,
        modalOpen: false,
        hamburgerModalOpen: false,

      };
    }
    case types.EDIT_TASK_ERROR: {
      return {
        ...state,
      };
    }
    case types.ON_TOGGLE_LOCK_STUDY: {
      return {
        ...state,
        isLocked: !action.locked
      };
    }
    case types.ON_STEP_SEARCH: {
      return {
        ...state,
        searchTerm: action.value
      }
    }
    case types.STEP_TYPE: {
      return {
        ...state,
        stepType: action.payload
      }
    }
    case types.ADD_NEW_ITEM_COMPLETE: {
      return {
        ...state,
        searchTerm: ''
      }
    }
    case types.OPEN_CACHE_MODAL: {
      return {
        ...state,
        cachePageModalOpen: true
      }
    }
    case types.CLOSE_CACHE_MODAL: {
      return {
        ...state,
        cachePageModalOpen: false
      }
    }

    default:
      return state;
  }
};

export default cellStepManagement;


