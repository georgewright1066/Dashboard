
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import configureStore from 'redux-mock-store';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
import { shallow, mount, configure } from 'enzyme';
import thunk from 'redux-thunk';
import types from '../types';
configure({ adapter: new Adapter() });
import uut from '../reducers';


const initialState = {
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
};

describe('ON OPEN_CSM_MODAL', () => {
  test('returns the correct state', () => {
    const action =

    {
      type: types.OPEN_CSM_MODAL,
      id: 400
    };

    const expectedState = {
      ...initialState,
      modalOpen: true,
      id: '400',
      dropDownType: null,


    };
    expect(uut(undefined, action)).toEqual(expectedState);
  });
});

describe('ON CLOSE_CSM_MODAL', () => {
  test('returns the correct state', () => {
    const action =

    {
      type: types.CLOSE_CSM_MODAL,
    };

    const expectedState = {
      ...initialState,
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

    };

    expect(uut(undefined, action)).toEqual(expectedState);
  });
});


describe('ON DRAG END', () => {
  test('returns the correct state', () => {
    const action =

    {
      type: types.ON_DRAG_END,
      payload: {
        'tasks': {
          'task-1-column-1': {
            'id': 'task-1-column-1',
            'content': 'Manchester United'
          },
        }
      }
    };

    const expectedState = {
      ...initialState,
      cellData: { ...initialState.cellData, ...action.payload },

    };

    expect(uut(undefined, action)).toEqual(expectedState);
  });
});

describe('ON DROPDOWN_TYPE', () => {
  test('returns the correct state', () => {
    const action =

    {
      type: types.ON_DROPDOWN_SELECT,
      payload: 'text'
    };

    const expectedState = {
      ...initialState,
      dropDownType: 'text',


    };

    expect(uut(undefined, action)).toEqual(expectedState);
  });
});

describe('ON ADD NEW TASK', () => {
  test('returns the correct state', () => {
    const action =

    {
      type: types.ADD_NEW_TASK,
      payload: { test: 'test' }
    };

    const expectedState = {
      ...initialState,
      cellData: {},
      modalOpen: false,
    };

    expect(uut(undefined, action)).toEqual(expectedState);
  });
});

describe('ON_TOGGLE_LOCK_STUDY', () => {
  test('returns the correct state', () => {
    const action =

    {
      type: types.ON_TOGGLE_LOCK_STUDY,
      locked: true
    };

    const expectedState = {
      ...initialState,
      isLocked: false,
    };

    expect(uut(undefined, action)).toEqual(expectedState);
  });

  test('returns the correct state', () => {
    const action =

    {
      type: types.ON_TOGGLE_LOCK_STUDY,
      locked: false
    };

    const expectedState = {
      ...initialState,
      isLocked: true,
    };

    expect(uut(undefined, action)).toEqual(expectedState);
  });
});



